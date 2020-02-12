import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import EditItemForm from './EditItemForm'

export default function EditItemModal(props) {


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
                editFormTitle={props.editFormTitle}
                editFormDescription={props.editFormDescription}
                editFormDate={props.editFormDate}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button
            onClick={props.submit}
            >Submit</Button>
            <Button 
            variant="danger"
            onClick={props.modalHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
  
    )
}
