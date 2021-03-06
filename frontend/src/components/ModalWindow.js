import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function ModalWindow(props) {
  const {signUpFail, setSignUpFail, modalText} = props.modalValues
    
    return (
      <>
        <Modal show={signUpFail} onHide={()=>setSignUpFail(false)} animation={false}>
          <Modal.Body>{modalText}</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={()=>setSignUpFail(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalWindow