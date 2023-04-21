import { Commit as CommitApi } from "../constants/api";
import { Commit } from "../types/commit";

export function getCommits(): Promise<Commit[]> {
    return fetch(CommitApi.GET)
        .then(response => response.json());
}