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
}

export type TasksStateTYpe = {
	[todolistId: string]: TaskType[]
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App_7() {


	const todolistId_1 = v1()
	const todolistId_2 = v1();


	const [todolists, setTodolists] = useState<Array<TodolistType>>([
		{
			id: v1(),
			title: "What to learn",
			filter: "all",
		},
		{
			id: v1(),
			title: "What to buy",
			filter: "all",
		},
	])


	const [tasks, setTasks] = useState({
		[todolistId_1]: [
			{ id: v1(), title: 'HTML&CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'ReactJS', isDone: false }],
		[todolistId_2]: [
			{ id: v1(), title: 'Water', isDone: true },
			{ id: v1(), title: 'Ice', isDone: true },
			{ id: v1(), title: 'Beer', isDone: true }]
	})



	const removeTask = (taskId: string, todolistId:string) => {
		setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t=>t.id !== taskId)})
	}


	const addTask = (title: string, todolistId:string) => {
		const newTask = {
			id: v1(),
			title: title,
			isDone: false
		}
		setTasks({...tasks,[todolistId] : [...tasks[todolistId],newTask]})
	}


	const changeTaskStatus = (taskId: string, taskStatus: boolean, todolistId:string) => {
		// const newState = tasks.map(t => t.id == taskId ? { ...t, isDone: taskStatus } : t)
		// setTasks(newState)
		setTasks({...tasks,[todolistId]:tasks[todolistId].map(t => t.id == taskId ? { ...t, isDone: taskStatus } : t)})
	}


	const changeFilter = (filter: FilterValuesType, todolistId:string) => {
		setTodolists(todolists.map(tl=>tl.id === todolistId ? {...tl,filter: filter} :tl))
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
