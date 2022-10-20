import React from 'react'
import '../'

function Todo() {
    return (
        <div>
            <div id="myDIV" className="header">
                <h2 style={"margin:5px"}>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onclick="newElement()" className="addBtn">Add</span>
            </div>
        </div>
    )
}

export default Todo