import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function AddItemModal(props) {

    let styles = {
        formInput: {
            width: '100%',
            border: 'none'
        }
    };

    return (
        <div>
           <Modal
            show={props.modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Add a to do item!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
            <Button
            >Add Item</Button>
            <Button onClick={props.modalHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
  
    )
}
