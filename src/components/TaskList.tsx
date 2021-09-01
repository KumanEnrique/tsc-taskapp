import * as React from 'react'
import {ITask} from './Task'

class TaskList extends React.Component<ITaskListProps,any>{
    render():JSX.Element[]{
        return this.props.tasks.map((task:ITask,index:number)=>{
            return(
                <div className="col-lg-3 mb-3" key={task.id}    >
                    <div className="card" >
                        <div className="card-header">
                            <h3>{task.title}</h3>
                        </div>
                        <div className="card-body">
                            <h4>{task.description}</h4>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid">
                                <button onClick={()=>this.props.deleteTask(task.id)} className="btn btn-warning">delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
}
interface ITaskListProps{
    tasks: ITask[]
    deleteTask:(id:number)=> void
}
export default TaskList