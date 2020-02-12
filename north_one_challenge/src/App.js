import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import ToDoListModal from './components/ToDoListModal'
import ToDoList from './components/ToDoList'
import AddItemModal from './components/AddItemModal';
import EditItemModal from './components/EditItemModal';



export default function App() {


const [state, setState] = useState({
  toDoLists: [],
  currentListId: undefined,
  modalState: false,
  itemModalState: false,
  listInput: '',
  itemFormTitle: '',
  itemFormDescription: '',
  itemFormDate: new Date(),
  editFormTitle: undefined,
  editFormDescription: undefined,
  editFormDate: undefined,
  editModalState: false,
  editItem: {
    itemId: undefined,
    listId: undefined
  }
});

//The following functions are handlers for showing/hiding the 3 modals in the app, as well as 
//keeping track of their form states

const showModal = () => {
  setState(prev => ({...prev, modalState: true}))
}

const hideModal = () => {
  setState(prev => ({...prev, modalState: false, listInput: ''}))
}

const showItemModal = (listId) => {
  setState(prev => ({...prev, itemModalState: true, currentListId: listId}))
}

const hideItemModal = () => {
  setState(prev => ({...prev, itemModalState: false,  itemFormTitle: '', itemFormDescription: '', itemFormDate: new Date(),}))
}

const hideEditModal = () => {
  setState(prev => ({...prev, editModalState: false}))

}

const onListInput = (val) => {
  setState(prev => ({...prev, listInput: val}))
}

const onItemTitleChange = (val) => {
  setState(prev => ({...prev,  itemFormTitle: val}))
}

const onItemDescriptionChange = (val) => {
  setState(prev => ({...prev,  itemFormDescription: val}))
}

const onItemDateChange = (val) => {
  setState(prev => ({...prev,  itemFormDate: val}))
}

const onEditItemTitleChange = (val) => {
  setState(prev => ({...prev,  editFormTitle: val}))
}

const onEditItemDescriptionChange = (val) => {
  setState(prev => ({...prev,  editFormDescription: val}))
}

const onEditItemDateChange = (val) => {
  setState(prev => ({...prev,  editFormDate: val}))
}

//Adds a new list to the toDoLists state
const addList = () => {

  let newList = {
    id: state.toDoLists.length + 1,
    title: (state.listInput !== '') ? state.listInput : 'New List',
    items: []
  }

  setState(prev => ({
    ...prev, 
    toDoLists: [...state.toDoLists, newList],
    modalState: false,
    listInput: ''
    }
  )) 

}

//Add a new item to the list with the id corresponding to the currentListId state
const addItem = () => {
  let listCopy = [...state.toDoLists];
  for (let list of listCopy) {
    if (list.id === state.currentListId) {
      list.items.push({
        id: list.items.length + 1,
        title: state.itemFormTitle,
        description: state.itemFormDescription,
        date: state.itemFormDate,
        status: 'incomplete',
        completedOn: undefined
      })
    }
  }
  setState(prev => ({...prev, toDoLists: listCopy, itemModalState: false, itemFormTitle: '', itemFormDescription: '', itemFormDate: new Date()}))
}

//Change the state of an item to 'complete' or 'incomplete' through the status parameter
const completeItem = (itemId, listId, status) => {
  let today = new Date();
  today = today.toString().slice(0,15);

  let listCopy = [...state.toDoLists];

  for(let list of listCopy) {
    if (list.id === listId) {
      for (let item of list.items) {
        if (item.id === itemId) {
          item.status = status;
          item.completedOn = (status === "complete") ? today : undefined;
        }
      }
    }
  }

  setState(prev => ({...prev, toDoLists: listCopy}))
}


//Delete item from list.items state
const deleteItem = (itemId, listId) => {
  let listCopy = [...state.toDoLists];

  for(let list of listCopy) {
    if (list.id === listId) {
      list.items = list.items.filter(item => {
        return item.id !== itemId
      })
    }
  }

  setState(prev => ({...prev, toDoLists: listCopy}))
}

//Show the edit modal, and set the starting values of the form 
//to the values of the item that is being edited using itemId and listId
const editModalShow = (itemId, listId) => {

  let listCopy = [...state.toDoLists];

  for(let list of listCopy) {
    if (list.id === listId) {
      for (let item of list.items) {
        if (item.id === itemId) {
          
  setState(prev => (
            {
            ...prev, 
            editModalState: true,
            editFormTitle: item.title,
            editFormDescription: item.description,
            editFormDate: item.date,
            editItem: {
              itemId, listId
            }
            }))

        }
      }
    }
  }

}

//Set state for submitting an edited item
const submitEdits = () => {
  let listCopy = [...state.toDoLists];
  
  for(let list of listCopy) {
    if (list.id === state.editItem.listId) {
      for (let item of list.items) {
        if (item.id === state.editItem.itemId) {
          item.title = state.editFormTitle;
          item.description = state.editFormDescription;
          item.date = state.editFormDate;
        }
      }
    }
  }

  setState(prev => ({...prev, toDoLists: listCopy, editModalState: false}))
}

//Delete entire list from State
const deleteList = (listId) => {
  let listCopy = [...state.toDoLists];

  let filteredLists = listCopy.filter(list => {
    return (list.id !== listId)
  })

  setState(prev => ({...prev, toDoLists: filteredLists}))

}

//Create toDoLists array, which maps over state.toDoLists and returns a custom ToDoList item for each list
let toDoLists = state.toDoLists.map(list => {

  return (
  <ToDoList 
    key={list.id}
    id={list.id}
    title={list.title}
    showItemModal={showItemModal}
    itemModalState={state.itemModalState}
    items={list.items}
    completeItem={completeItem}
    deleteItem={deleteItem}
    editItem={editModalShow}
    deleteList={deleteList}
  ></ToDoList>
  )
})

  let styles = {
    toDoListContainer : {
      display: 'flex',
      flexDirection: 'row',
      height: '100%'
    },
    app: {
      background: 'linear-gradient(to right, #1c92d2, #f2fcfe)'
    }
  }
    return (
      <div className="App" style={styles.app}>
        <Button 
        style={{marginTop: 10}}
        onClick={showModal}>Add List</Button>
        <ToDoListModal
        modalShow={state.modalState}
        modalHide={hideModal}
        onListInput={onListInput}
        listInput={state.listInput}
        addList={addList}
        />
        <AddItemModal
        modalShow={state.itemModalState}
        modalHide={hideItemModal}
        title={state.itemFormTitle}
        description={state.addFormDescription}
        date={state.itemFormDate}
        onItemTitleChange={onItemTitleChange}
        onItemDescriptionChange={onItemDescriptionChange}
        onItemDateChange={onItemDateChange}
        addItem={addItem}
        />
        <EditItemModal
        modalShow={state.editModalState}
        modalHide={hideEditModal}
        editTitle={onEditItemTitleChange}
        editDescription={onEditItemDescriptionChange}
        editDate={onEditItemDateChange}
        editFormTitle={state.editFormTitle}
        editFormDescription={state.editFormDescription}
        editFormDate={state.editFormDate}
        submit={submitEdits}
        />
        <div style={styles.toDoListContainer}>
          {toDoLists}
        </div>
      </div>
    )
}

