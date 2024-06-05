import '../App.css';
import { Todolist_1 } from './DeleteTasks_2';

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

function App_4() {
	const tasks1: Array<TaskType> = [
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	]

	const RemoveTask = (taskId:number) =>{
		alert(taskId)
	}
	return (
		<div className="App">
			<Todolist_1 title="What to learn"
			 tasks={tasks1}
			 removeTask={RemoveTask} />
		</div>
	);
}

export default App_4;
