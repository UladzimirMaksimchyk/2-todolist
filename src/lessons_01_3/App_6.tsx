import './App.css';
import {useState} from "react";
import { Todolist_6 } from './Todolist_6';
import { v1 } from 'uuid';

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export function App_6() {
	const [tasks, setTasks] = useState<TaskType[]>([
		{id: v1(), title: 'HTML&CSS', isDone: true},
		{id: v1(), title: 'JS', isDone: true},
		{id: v1(), title: 'ReactJS', isDone: true},
		{id: v1(), title: 'Redux', isDone: false},
		{id: v1(), title: 'Typescript', isDone: false},
		{id: v1(), title: 'RTK query', isDone: false},
	])

	const [filter, setFilter] = useState<FilterValuesType>('all')

	const removeTask = (taskId:string) => {
		const filteredTasks = tasks.filter((task) => {
			return task.id !== taskId
		})
		setTasks(filteredTasks)
	}

	const changeFilter = (filter: FilterValuesType) => {
		setFilter(filter)
	}

	let tasksForTodolist = tasks
	if (filter === 'active') {
		tasksForTodolist = tasks.filter(task => !task.isDone)
	}

	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(task => task.isDone)
	}

	return (
		<div className="App">
			<Todolist_6 title="What to learn"
			          tasks={tasksForTodolist}
			          removeTask={removeTask}
			          changeFilter={changeFilter}/>
		</div>
	);
}

export default App_6;
