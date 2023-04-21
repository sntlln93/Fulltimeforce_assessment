export interface CommitResponse {
    sha: string,
    commit: CommitResponseElement,
    committer: CommitterAvatarUrlResponse
}

interface CommitResponseElement {
    committer: CommitterResponse,
    message: string,
}

interface CommitterResponse {
    name: string,
    date: string
}

interface CommitterAvatarUrlResponse {
    avatar_url: string;
}