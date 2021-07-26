import { useState } from 'react';

type UseModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const useModal = (defaultValue = false): UseModalProps => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const toggleModal = () => setIsOpen(!isOpen);
  return { isOpen, toggleModal };
};

export default useModal;
