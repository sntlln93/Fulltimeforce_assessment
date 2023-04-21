import { useState, useEffect } from "react";
import { getCommits } from "../services/CommitService";
import { Commit } from "../types/commit";

function useCommits() {
    const [commits, setCommits] = useState<Commit[]>([]);

    useEffect(() => {
        getCommits().then(newCommits => setCommits(newCommits));
    }, []);

    return [commits];
}

export default useCommits;