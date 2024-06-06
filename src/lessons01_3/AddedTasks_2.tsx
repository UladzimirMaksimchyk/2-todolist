import { Button } from "../Button";
import {FilterValuesType, TaskType} from "./AddedTasks";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	changeFilter: (filter: FilterValuesType) => void
}

export const Todolist_2 = ({title, tasks, removeTask, changeFilter}: PropsType) => {

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'}/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map(task => {
							return (
								<li key={task.id}>
									<input type="checkbox" checked={task.isDone}/>
									<span>{task.title}</span>
									<Button title={'x'} onClick={() => removeTask(task.id)}/>
								</li>
							)
						})}
					</ul>
			}
			<div>
				<Button title={'All'} onClick={()=> changeFilter('all')}/>
				<Button title={'Active'} onClick={()=> changeFilter('active')}/>
				<Button title={'Completed'} onClick={()=> changeFilter('completed')}/>
			</div>
		</div>
	)
}
