import React from "react";
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    /*
    JSX => return block
    React.fragment => one block
    */
    handleShowHideJobs = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDelete = (job) => {
        console.log(this.props);
        this.props.deleteAJob(job);
    }
    render() {
        console.log(this.props);
        let { arrJobs } = this.props;
        return (
            <>  {this.state.showJobs === false ?
                <button onClick={() => this.handleShowHideJobs()}>
                    Show
                </button>
                :
                <>
                    <div className="jobs-list">
                        {
                            arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        Name-salary: {item.name} - {item.salary}<></><></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>;
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button onClick={() => this.handleShowHideJobs()}>Hide</button>
                    </div>
                </>
            }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     console.log(props);
//     return (
//         <>
//             <div className="ListJobs">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 Name-salary: {item.name} - {item.slary};
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;