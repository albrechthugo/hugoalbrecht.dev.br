import { useState } from 'react';

type UseModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
};

const useModal = (defaultValue = false): UseModalProps => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const toggleModal = () => setIsOpen(!isOpen);
  return { isOpen, setIsOpen, toggleModal };
};

export default useModal;
