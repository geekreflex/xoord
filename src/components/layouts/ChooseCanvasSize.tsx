import Modal from '../common/Modal';
import InputNum from '../common/input/InputNum';

export default function ChooseCanvasSize() {
  return (
    <Modal title="Choose Template Size">
      <div>
        <InputNum />
      </div>
    </Modal>
  );
}
