import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {
        name: "",
        age: "",
        gender: "",	
        arrJobs: [
            {id: "NV01", name: "Minh Hiếu", salary: "500$"},
            {id: "NV02", name: "Huy Ngọ", salary: "600$"},
            {id: "NV03", name: "Quang Anh", salary: "1000$"},
        ]
    }
    /*
    JSX => return block
    React.fragment => one block
    */
    addNewJobs = (job) => {
        console.log(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        let name = "Hoàng Minh Hiếu"
        return (
            <>
                <AddComponent
                    addNewJobs = {this.addNewJobs}
                    
                />
                <ChildComponent
                    name={this.state.name}
                    age={'25'}
                    gender={'Nam'}
                    arrJobs = {this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                />




            </>
        )
    }
}
export default MyComponent;