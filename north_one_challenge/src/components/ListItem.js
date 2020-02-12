import React from 'react'

export default function ListItem(props) {

    let styles = {
        listItem: {
            border: '1px solid black',
            borderRadius: '5px',
            width: '90%',
            height: '400px'
        }
    }
    return (
        <div style={styles.listItem}>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
}
