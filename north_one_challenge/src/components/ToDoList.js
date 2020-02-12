import React from 'react'
import Button from 'react-bootstrap/Button'
import ListItem from './ListItem'


export default function ToDoList(props) {

    let styles = {
        listDiv: {
            background: '#d2ddeb',
            width: '50%',
            height: '90%',
            borderRadius: '10px',
            margin: 10,
        },
        header: {
            display: 'flex',
            'flex-direction': 'row',
            justifyContent: 'space-between',
            margin: 20
        }
    }

    let toDoItems = props.items.map(item => {
        return (
            <ListItem
            id={item.id}
            listId={props.id}
            title={item.title}
            description={item.description}
            date={item.date}
            completeItem={props.completeItem}
            deleteItem={props.deleteItem}
            status={item.status}
            completedOn={item.completedOn}
            editItem={props.editItem}
            >
            </ListItem>
        )
    })

    return (
        <div style={styles.listDiv}>
            <div style={styles.header}>
            <h3>{props.title}</h3>
            <Button 
            variant="outline-primary"
            onClick={() => props.showItemModal(props.id)}>+</Button>
            </div>
        {toDoItems}
        </div>
    )
}
