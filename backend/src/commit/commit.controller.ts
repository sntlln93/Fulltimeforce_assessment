import { Controller, Get } from '@nestjs/common';
import { CommitService } from './commit.service';

@Controller('commits')
export class CommitController {
    constructor(private readonly appService: CommitService) { }

    @Get()
    index() {
        return this.appService.getCommits();
    }
}
