import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { CommitResponse } from './types/api';
import { Commit } from './types/commit';
import { Commit as CommitApi } from './constants/api';

@Injectable()
export class CommitService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    async getCommits(): Promise<Commit[]> {
        const user = process.env.GITHUB_USER;
        const repo = process.env.GITHUB_REPO;

        const uri = CommitApi.GET.replace(':user', user).replace(':repo', repo);

        const { data } = await firstValueFrom(
            this.httpService.get<any[]>(uri).pipe(
                catchError((error: AxiosError) => {
                    if (Number(error.code) === 403) {
                        throw new ForbiddenException('Limit exceeded!',
                            { cause: error, description: 'Unauthenticated accounts are limited to 60 request per hour' }
                        );
                    }

                    throw new Error("Something went wrong");
                }),
            ),
        );

        return data.map((commit: CommitResponse) => {
            return {
                id: commit.sha,
                author: {
                    name: commit.commit.committer.name,
                    avatar: commit.committer.avatar_url
                },
                message: commit.commit.message,
                date: commit.commit.committer.date
            }
        });;
    }
}
