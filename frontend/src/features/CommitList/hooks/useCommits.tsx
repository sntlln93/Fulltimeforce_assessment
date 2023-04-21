import { useState, useEffect } from "react";
import { getCommits } from "../services/CommitService";
import { Commit } from "../types/commit";
import { CommitResponse } from "../types/api";

function useCommits() {
    const [commits, setCommits] = useState<Commit[]>([]);

    useEffect(() => {
        getCommits().then(json => {
            const newCommits = json.map((commit: CommitResponse) => {
                return {
                    id: commit.sha,
                    author: {
                        name: commit.commit.committer.name,
                        avatar: commit.committer.avatar_url
                    },
                    message: commit.commit.message,
                    date: commit.commit.committer.date
                }
            });
            setCommits(newCommits);
        });
    }, []);

    return [commits];
}

export default useCommits;