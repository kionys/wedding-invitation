import { useModalContext } from '@/contexts/modal-context';
import { IWedding } from '@/models/wedding';
import { useEffect, useRef } from 'react';

const AttendCountModal = ({ wedding }: { wedding: IWedding }) => {
  const { open, close } = useModalContext();

  const $input = useRef<HTMLInputElement>(null);
  const haveSeenModal = localStorage.getItem('@have-seen-modal');

  useEffect(() => {
    if (haveSeenModal === 'true') return;
    open({
      open: true,
      title: `현재 참석자: ${wedding.attendCount} 명`,
      body: (
        <div>
          <input
            ref={$input}
            type="number"
            placeholder="참석 가능 인원을 추가해주세요."
            style={{ width: '100%' }}
          />
        </div>
      ),
      onLeftButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
      onRightButtonClick: async () => {
        if ($input.current == null) {
          return;
        }
        console.log($input.current?.value);
        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
    });
  }, []); // eslint-disable-line

  return null;
};
export default AttendCountModal;
