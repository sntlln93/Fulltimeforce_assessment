import { CommitResponse } from "../types/api";

export function getCommits(): Promise<CommitResponse[]> {
    return fetch('https://api.github.com/repos/sntlln93/fulltimeforce_assessment/commits')
        .then(response => response.json());
}