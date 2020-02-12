import React from 'react'
import { FaTrash, FaCheckCircle, FaWrench, FaRegClock, FaUndoAlt } from "react-icons/fa";

export default function ListItem(props) {

    let styles = {
        listItem: {
            borderRadius: '5px',
            width: '95%',
            height: '150px',
            background: (props.status === 'incomplete') ? 'white' : 'rgb(0, 77, 26, 0.6)',
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
            margin: 20,
            marginBottom: 0
        },
        alignLeft: {
            'text-align': 'left'
        }
    }

    let dateString = (props.status === 'incomplete') ? props.date.toString().slice(0,15) : props.completedOn;
    let footerIcon = (props.status === 'incomplete') ? <FaRegClock style={{'marginBottom': 3}}/> : <FaCheckCircle/>;
    let completeIcon = (props.status === 'incomplete') ? <FaCheckCircle onClick={() => props.completeItem(props.id, props.listId, 'complete')} /> : <FaUndoAlt onClick={() => props.completeItem(props.id, props.listId, 'incomplete')} />;

    return (
        <div style={styles.listItem}>
            <div style={styles.itemHeader}>
            <div>
            <h5 style={styles.alignLeft}>{props.title}</h5>
            <p style={styles.alignLeft}>{props.description}</p>
            </div>
            <div>
            <FaWrench
            style={{'marginRight': 10}}
            />{completeIcon}</div>
            </div>
            <div style={styles.itemHeader}>
            <p>
            {footerIcon}
            {`  ${dateString}`}</p>
            <FaTrash
            onClick={() => {
                console.log('clicking button');
                props.deleteItem(props.id, props.listId)}}
            />
            </div>
        </div>
    )
}
