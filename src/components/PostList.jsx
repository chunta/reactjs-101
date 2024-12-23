import Post from './Post'
import Style from './PostList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

function PostList() {
    const [enteredBody, setEnterBody] = useState('');
    const [enterAuthor, setEnterAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);
    let modalContent;
    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>
            <NewPost onBodyChanged={bodyChangedHandler} 
            onAuthorChanged={authorChangedHandler} />
            </Modal>
        );
    }

    function hideModalHandler(event) {
        setModalIsVisible(false);
    }

    function bodyChangedHandler(event) {
        setEnterBody(event.target.value);
    }

    function authorChangedHandler(event) {
        setEnterAuthor(event.target.value);
    }

    return (
        <div>
        {modalIsVisible && modalContent}
        <ul className={Style.postList}>
            <Post author={enterAuthor} body={enteredBody} />
            <Post author="Sarah" body="Sarah Body"/>
        </ul>
        </div>
    );
}

export default PostList;