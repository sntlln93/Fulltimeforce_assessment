import { useState, useEffect } from "react";
import { getCommits } from "./services/CommitService";
import style from "./styles.module.css";
import useTimeAgo from "../../hooks/useTime";

function CommitList() {
    const [commits, setCommits] = useState<any>([]);
    const timeFormatter = useTimeAgo();

    useEffect(() => {
        getCommits().then(json => setCommits(json));
    }, []);

    // useEffect(() => {
    //     const newCommits = getCommits()
    //     console.log({newCommits})
    //     setCommits(newCommits);
    // }, []);

    return <ul className={style.commitList}>
        {
            commits.length && commits.map((commit: any) => {
                return <li key={commit.sha}>
                    <div className={style.avatar}>
                        <img src={commit.author.avatar_url} alt={commit.author.login} />
                    </div>
                    <div className={style.commit}>
                        <p className={style.comment}>{commit.commit.message}</p>
                        <p className={style.author}>{commit.commit.committer.name} <span>{timeFormatter.TimeAgo(new Date(commit.commit.committer.date))}</span></p>
                    </div>
                </li>
            })
        }
    </ul>
}

export default CommitList;