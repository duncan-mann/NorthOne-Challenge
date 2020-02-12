import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ToDoListModal(props) {

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
                Name your list!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                required
                placeholder="Enter list name"
                style={styles.formInput}
                value={props.listInput}
                onChange={event => props.onListInput(event.target.value)}
                ></input>
            </Modal.Body>
            <Modal.Footer>
            <Button
            onClick={props.addList}
            >Add</Button>
            <Button 
                variant="danger"
                onClick={props.modalHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
  
    )
}
