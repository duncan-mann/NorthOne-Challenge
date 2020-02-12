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
            required
            placeholder="Enter Title" 
            value={props.title}
            onChange={event => props.onItemTitleChange(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            required
            placeholder="Enter a Description" 
            value={props.description}
            onChange={event => props.onItemDescriptionChange(event.target.value)}
            />
        </Form.Group>

        <Form.Group className="dateForm">
            <Form.Label>Due Date</Form.Label>
            <DatePicker
            style={{width: '100%'}}
            selected={props.date}
            onChange={date => props.onItemDateChange(date)}
            className="datePicker"
            ></DatePicker>
        </Form.Group>

        </Form>   
        </div>
    )
}
