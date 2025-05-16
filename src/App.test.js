import {useState} from 'react';
import Modal from './components/Modal';

test('Modal component', () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
      