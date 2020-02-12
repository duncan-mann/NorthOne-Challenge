import React from 'react'
import Form from 'react-bootstrap/Form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddItemForm(props) {

    return (
        <div>
         <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control 
            placeholder="Enter Title" 
            value={props.title}
            onChange={event => props.onItemTitleChange(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            placeholder="Enter a Description" 
            value={props.description}
            onChange={event => props.onItemDescriptionChange(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Due Date</Form.Label>
            <DatePicker
            selected={props.date}
            onChange={date => props.onItemDateChange(date)}
            ></DatePicker>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        </Form>   
        </div>
    )
}
