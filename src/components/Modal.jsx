import Style from './Modal.module.css';

function Modal({children, onClose}) {
    return (
    <>
        <div className={Style.backdrop} onClick={onClose}> 
        <dialog open className={Style.modal}>
            {children}
        </dialog>
        </div>
    </>
    );
}

export default Modal;