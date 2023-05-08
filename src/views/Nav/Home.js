import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../HOC/Color";
import logo from "../../assets/images/hoc-tot-ngu-van-12-toan-tap.jpg"
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() =>{
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render() {
        
        let ListUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello Hoàng Minh Hiếu
                </div>
                {/* <div >
                <img src = {logo} />
            </div> */}
                <div> 
                    {ListUsers && ListUsers.length > 0 && ListUsers.map((item, index) => {
                        return (
                            <div key = {item.id}>
                                {index + 1}- {item.name} 
                                &nbsp; <span onClick={()=>this.handleDeleteUser(item)}>x</span>

                            </div>
                        )
                    })}
                    <button onClick={()=>this.handleCreateUser()}>Add New</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload : userDelete}) ,
        addUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
