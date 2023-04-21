import { Controller, Get } from '@nestjs/common';
import { CommitService } from './commit.service';

@Controller('commits')
export class CommitController {
    constructor(private readonly commitService: CommitService) { }

    @Get()
    index() {
        return this.commitService.getCommits();
    }
}
