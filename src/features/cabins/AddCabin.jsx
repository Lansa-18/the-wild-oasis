import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <>
      <div>
        <Modal>
          <Modal.Open opens="cabin-form">
            <Button>Add new cabin</Button>
          </Modal.Open>
          <Modal.Window name="cabin-form">
            <CreateCabinForm />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

// function AddCabin() {
//   const [isOponModal, setIsOponModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOponModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOponModal && (
//         <Modal onClose={() => setIsOponModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOponModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
