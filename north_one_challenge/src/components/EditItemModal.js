import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditItemForm from './EditItemForm'

export default function EditItemModal(props) {

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
                Edit Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditItemForm
                fetchData={props.fetchData}
                editTitle={props.editTitle}
                editDescription={props.editDescription}
                editDate={props.editDate}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button
            onClick={undefined}
            >Submit</Button>
            <Button 
            variant="danger"
            onClick={props.modalHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
  
    )
}
