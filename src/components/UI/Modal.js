import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
  return(<div className={classes.backdrop} onClick={props.onClose}/>)
}

const ModalOverly = props =>{
  return(
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>)
}

const portalElements = document.getElementById('overlays');
const Modal = props =>{
  return(
    <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElements)}
    {ReactDOM.createPortal(<ModalOverly>{props.children}</ModalOverly>, portalElements)}
    </>
  )
}

export default Modal;