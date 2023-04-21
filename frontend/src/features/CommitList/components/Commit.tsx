import style from '../styles.module.css';
import useTimeAgo from "../../../hooks/useTime";
import { Commit } from '../types/commit';

function Commit({ commit }: { commit: Commit }) {
    const timeFormatter = useTimeAgo();

    return <li>
        <div className={style.avatar}>
            <img src={commit.author.avatar} alt={commit.author.name} />
        </div>
        <div className={style.commit}>
            <p className={style.comment}>{commit.message}</p>
            <p className={style.author}>{commit.author.name} <span>{timeFormatter.TimeAgo(new Date(commit.date))}</span></p>
        </div>
    </li>;
}

export default Commit;