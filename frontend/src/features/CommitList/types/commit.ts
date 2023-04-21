export interface Commit {
    id: string;
    author: Author;
    message: string;
    date: string;
}

interface Author {
    name: string;
    avatar: string;
}