import * as React from 'react'
import {TaskForm} from './TaskForm'
import {ITask} from './Task'
import TaskList from './TaskList'

export class App extends React.Component<IProps,IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            tasks: []
        }
    }
    addNewTask = (task:ITask)=>{
        this.setState({
            tasks:[...this.state.tasks, task]
        })
    }
    deleteTask = (id:number)=>{
        const tasks: ITask[] = this.state.tasks.filter((task: ITask)=>task.id !==id)
        this.setState({tasks})
        // console.log(id)
    }
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Task app</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container my-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <TaskForm addNewTask={this.addNewTask}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
                    </div>
                </div>
                <h1>hola desde app.tsx {this.props.title}</h1>
            </>
            
        )
    }
}
interface IProps{
    title?: string
}
interface IState{
    tasks:ITask[]
}