import { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import NameContext from "../context/name";

const LoginModal = () => {
  const { name, setName } = useContext(NameContext);
  const [modal, setModal] = useState(true);
  const [tempName, setTempName] = useState("");
  const toggle = () => setModal(!modal);

  const handleNameSubmit = (e) => {
    setName(tempName);
    toggle();
  };

  const handleNameChange = (e) => {
    setTempName(e.target.value);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter your name</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Enter your name"
            onChange={handleNameChange}
            value={tempName}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleNameSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;
