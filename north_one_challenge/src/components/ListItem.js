import React from 'react'
import { FaTrash, FaCheckCircle, FaWrench, FaRegClock } from "react-icons/fa";

export default function ListItem(props) {

    let styles = {
        listItem: {
            borderRadius: '5px',
            width: '95%',
            height: '150px',
            background: 'white',
            margin: '0 auto',
            marginTop: 10,
            paddingTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'start'
        },
        itemHeader: {
            display: 'flex',
            'flex-direction': 'row',
            justifyContent: 'space-between',
            margin: 20
        }
    }
    let dateString = props.date.toString().slice(0,15);

    return (
        <div style={styles.listItem}>
            <div style={styles.itemHeader}>
            <h5>{props.title}</h5>
            <div>
            <FaWrench
            style={{'marginRight': 10}}
            /><FaCheckCircle
            onClick={() => props.completeItem(props.id, props.listId)}
            /></div>
            </div>
            <p>{props.description}</p>
            <div style={styles.itemHeader}>
            <p><FaRegClock
            style={{'marginBottom': 3}}
            />{`  ${dateString}`}</p>
            <FaTrash/>
            </div>
        </div>
    )
}
