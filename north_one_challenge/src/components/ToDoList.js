import React from 'react'
import Button from 'react-bootstrap/Button'


export default function ToDoList(props) {

    let styles = {
        listDiv: {
            border: '1px solid black',
            width: '50%',
            borderRadius: '10px',
            margin: 10
        }
    }

    return (
        <div style={styles.listDiv}>
            <div>
            <h3>{props.title}</h3>
            <Button onClick={props.showItemModal}>+</Button>
            </div>




        </div>
    )
}
