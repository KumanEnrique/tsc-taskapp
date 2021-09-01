import * as React from 'react'
import {ITask} from './Task'

export class TaskForm extends React.Component<ITaskFormProps,any>{
    constructor(props: ITaskFormProps){
        super(props)
        this.state = {
            title: "",
            description: ""
        }
    }
    getCurrentTimeStamp(){
        return new Date().getTime()
    }
    handleNewTask(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const newtask :ITask = {
            id: this.getCurrentTimeStamp(),
            title: this.state.title,
            description: this.state.description,
            completed:false
        }
        this.props.addNewTask(newtask)
        this.setState({title:'',description:''})
    }
    handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <form onSubmit={e=>this.handleNewTask(e)}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Task title</label>
                            <input type="text" value={this.state.title} onChange={e=> this.handleInputChange(e)} name="title" id="title" className="form-control" autoFocus placeholder="lorem"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Task description</label>
                            <input type="text" value={this.state.description} name="description" onChange={e=> this.handleInputChange(e)} id="description" placeholder="lorem" className="form-control" />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

interface ITaskFormProps{
    addNewTask:(task:ITask)=> void
}
interface ITaskFormState{
    title:string
    description: string
}