import Modal from '@/components/shared/modal';
import { ComponentProps, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;
interface IContextValueModal {
  open: (options: ModalProps) => void;
  close: () => void;
}

const Context = createContext<IContextValueModal | undefined>(undefined);
const defaultValues = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
};

export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);
  const $portal_root = document.getElementById('root-portal');

  const open = (options: ModalOptions) => {
    setModalState({ ...options, open: true });
  };

  const close = () => {
    setModalState(defaultValues);
  };

  const values = {
    open,
    close,
  };

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const values = useContext(Context);
  if (values == null) {
    throw new Error('ModalContext 안에서 사용해주세요');
  }
  return values;
};
