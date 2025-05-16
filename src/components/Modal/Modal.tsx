import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';



const Modal = ({children, onClose}) => {
	const modalRoot = document.getElementById('modal-root');
	const containerRef = useRef(document.createElement('div'))

	useEffect(()=>{
		const container = containerRef.current;
		modalRoot?.appendChild(container);
		return()=>{
			modalRoot?.removeChild(container);
		};
	},[modalRoot]);

	return ReactDOM.createPortal(
		<div className = {styles.modalOverlay} onClick = {onClose}>
		<div className = {styles.modalContent} onClick = {e=> e.stopPropagation()}>
		{children}
		<button className = {styles.modalClose} onClick={onClose}>
		&times;
		</button>
		</div>
		</div>,
		containerRef.current
		);
}

export default Modal;