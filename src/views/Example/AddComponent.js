import { render } from "@testing-library/react";
import React from "react";
class AddComponent extends React.Component {

    state = {
        name : "",
        salary : ""
    }
    handleOnChangeFirstName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnCkickButton = (event) => {
        
        this.props.addNewJobs({
            id : Math.floor(Math.random() * 1001),
            name : this.state.name,
            salary : this.state.salary
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Name:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeFirstName(event)} value={this.state.name} id="fname" /><br />
                    <label htmlFor="lname"> Salary:</label><br />
                    <input type="text" onChange={(event) => this.handleOnChangeLastName(event)} value={this.state.salary} id="lname" /> <br /> <br />
                    <input type="button" onClick={(event) => this.handleOnCkickButton(event)} value="Gửi"></input>
                </form>
            </>
        )
    }
}
export default AddComponent;