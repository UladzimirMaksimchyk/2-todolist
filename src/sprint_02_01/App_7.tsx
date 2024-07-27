import './App_7.css';
import { useState } from "react";
import { v1 } from "uuid";
import { Todolist_7 } from './Todolist_7';

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type TodolistType = {
	id: string
	title: string
	filter: FilterValuesType
	tasks: TaskType[]
}
export type FilterValuesType = 'all' | 'active' | 'completed'

function App_7() {

	const [todolists, setTodolists] = useState<Array<TodolistType>>([
		{
			id: v1(),
			title:"What to learn",
			filter:"all",
			tasks:[
				{ id: v1(), title: 'HTML&CSS', isDone: true },
				{ id: v1(), title: 'JS', isDone: true },
				{ id: v1(), title: 'ReactJS', isDone: false },
		
			]
		},
		{
			id: v1(),
			title:"What to buy",
			filter:"all",
			tasks:[
				{ id: v1(), title: 'Water', isDone: true },
				{ id: v1(), title: 'Ice', isDone: true },
				{ id: v1(), title: 'Beer', isDone: true },
		
			]
		},

	])

	const [tasks, setTasks] = useState<TaskType[]>([
		{ id: v1(), title: 'HTML&CSS', isDone: true },
		{ id: v1(), title: 'JS', isDone: true },
		{ id: v1(), title: 'ReactJS', isDone: false },
	])

	const [filter, setFilter] = useState<FilterValuesType>('all')

	const removeTask = (taskId: string) => {
		const filteredTasks = tasks.filter((task) => {
			return task.id !== taskId
		})
		setTasks(filteredTasks)
	}

	const addTask = (title: string) => {
		const newTask = {
			id: v1(),
			title: title,
			isDone: false
		}
		const newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}

	const changeFilter = (filter: FilterValuesType) => {
		setFilter(filter)
	}

	const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
		const newState = tasks.map(t => t.id == taskId ? { ...t, isDone: taskStatus } : t)
		setTasks(newState)
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
			<Todolist_7
				title="What to learn"
				tasks={tasksForTodolist}
				removeTask={removeTask}
				changeFilter={changeFilter}
				addTask={addTask}
				changeTaskStatus={changeTaskStatus}
				filter={filter}
			/>
		</div>
	);
}

export default App_7;
