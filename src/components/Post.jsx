import style from './Post.module.css';

function Post(props) {
    return (
        <div className={style.post}>
            <p className={style.author}>{props.author}</p>
            <p className={style.text}>{props.body}</p>
        </div>
    );
}

 export default Post;