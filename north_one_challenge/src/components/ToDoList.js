import React from 'react'
import Button from 'react-bootstrap/Button'


export default function ToDoList(props) {

    let styles = {
        listDiv: {
            border: '1px solid black',
            width: '50%',
            height: '90%',
            borderRadius: '10px',
            margin: 10
        },
        header: {
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'center'
        }
    }

    return (
        <div style={styles.listDiv}>
            <div style={styles.header}>
            <h3>{props.title}</h3>
            <Button onClick={props.showItemModal}>+</Button>
            </div>

        </div>
    )
}
