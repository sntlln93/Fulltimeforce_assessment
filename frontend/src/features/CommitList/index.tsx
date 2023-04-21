import Commit from "./components/Commit";
import useCommits from "./hooks/useCommits";
import style from "./styles.module.css";

function CommitList() {
    const [commits] = useCommits();

    return <ul className={style.commitList}>
        {commits.length && commits.map((commit: any) => <Commit key={commit.id} commit={commit} />)}
    </ul>
}

export default CommitList;