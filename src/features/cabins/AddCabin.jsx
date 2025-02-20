import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOponModal, setIsOponModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOponModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOponModal && (
        <Modal onClose={() => setIsOponModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOponModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
