
import Style from './NewPost.module.css';

function NewPost(props)
{   
    return (
        <form className={Style.form}>
            <p>
            <label htmlFor='body'>Text</label>
            <textarea id="body" required row={3} onChange={props.onBodyChanged}/>
            </p>
            <p>
            <label htmlFor='name'>Your name</label>
            <input type='text' id='name' required onChange={props.onAuthorChanged}/>
            </p>
        </form>
    );
}

export default NewPost;