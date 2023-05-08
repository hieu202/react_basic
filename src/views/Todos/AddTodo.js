import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {

    state = {
        title : ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title : event.target.value
        })
    }
    handleOnClickAdd = ()=> {
        if(!this.state.title) {
            toast.error('Không được để trống các trường')
            return;
        }
        let todo =  {
            id : Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo1(todo)
        this.setState({
            title : ''
        })
        toast.success('Thêm thành công')
    }
    render() {
        let {title} = this.state;
    return (
        <div className="add-todo" >
            <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
            <button className="add" type="button" onClick={() => this.handleOnClickAdd()}>Add</button>
        </div>
    )
}
}

export default AddTodo;