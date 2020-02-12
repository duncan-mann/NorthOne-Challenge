import React from 'react'
import Form from 'react-bootstrap/Form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditItemForm(props) {


    return (
        <div>
         <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control 
            required
            placeholder="Enter Title" 
            value={props.editFormTitle}
            onChange={event => props.editTitle(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            required
            placeholder="Enter a Description" 
            value={props.editFormDescription}
            onChange={event => props.editDescription(event.target.value)}
            />
        </Form.Group>

        <Form.Group className="dateForm">
            <Form.Label>Due Date</Form.Label>
            <DatePicker
            className="datePicker"
            selected={props.editFormDate}
            onChange={date => props.editDate(date)}
            ></DatePicker>
        </Form.Group>

        </Form>   
        </div>
    )
}
