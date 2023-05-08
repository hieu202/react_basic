import React from "react";
import './ListTodo.scss';
import './AddTodo.js';
import AddTodo from "./AddTodo.js";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodos: {}
    }
    handleOnChangeEditToDo = (event) => {

        let copyeditTodos = { ...this.state.editTodos };
        copyeditTodos.title = event.target.value
        this.setState({
            editTodos: copyeditTodos
        })
    }
    handleEditToDo = (todo) => {
        let { listTodos, editTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;
        if (isEmptyObj === false && editTodos.id == todo.id) {
            let objIndex = listTodos.findIndex((obj => obj.id == todo.id));
            listTodos[objIndex].title = editTodos.title;
            toast.success('Sửa thành công')
            this.setState({
                editTodos: {}
            })
            return;
        }
        this.setState({
            editTodos: todo
        })
    }
    addNewTodo = (todo) => {
        // let currentListTodos = this.state.listTodos;
        // currentListTodos.push(todo);
        this.setState({
            listTodos: [...this.state.listTodos, todo]
            // listTodos : currentListTodos           
        })
    }
    handleDeleteTodo = (todo) => {
        let currentListTodos = this.state.listTodos;
        currentListTodos = currentListTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentListTodos
        })
        toast.success('Xóa thành công')
    }
    render() {
        // let listTodos = this.state.listTodos;
        let { listTodos, editTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;

        return (
            <>
                <p>
                    Simple TODO Apps with React.js (Minh Hiếu)
                    <div className="list-todo-container">
                        <AddTodo addNewTodo1={this.addNewTodo}
                        />
                        <div className="list-todo-content">
                            {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.key}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodos.id == item.id ?
                                                    <span>{index + 1} - <input value={editTodos.title} onChange={(event) => this.handleOnChangeEditToDo(event)} /> </span>
                                                    :
                                                    <span>{index + 1} - {item.title} </span>

                                                }
                                            </>

                                        }
                                        <button className="edit" onClick={() => this.handleEditToDo(item)}>
                                            {(isEmptyObj === false && editTodos.id == item.id) ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </p>
            </>

        )
    }
}

export default Color(ListTodo);