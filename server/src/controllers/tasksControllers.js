import Task from '../models/Task.js';

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (e) {
		console.error('Fail to get all tasks: ', e);
		res.status(500).json('Internal Server Error');
	}
};

const createTask = async (req, res) => {
	try {
		const {title} = req.body;
		const task = new Task({title});

		const newTask = await task.save();
		res.status(201).json(newTask);
	} catch (e) {
		console.error('Fail to create task: ', e);
		res.status(500).json('Internal Server Error');
	}
	res.status(200).json({message: 'Task Created'});
};

const updateTask = async (req, res) => {
	try {
		const {title, status, completedAt} = req.body;
		const updatedTask = await Task.findByIdAndUpdate(
			req.params.id, {title, status, completedAt},
			{new: true}
		);
		if (!updatedTask) {
			return res.status(400).json({message: 'Task undefined'});
		}
		res.status(200).json(updatedTask);
	} catch (e) {
		console.error('Fail to update task: ', e);
		res.status(500).json('Internal Server Error');
	}
};

const deleteTask = async (req, res) => {
	try {
		const deleteTask = await Task.findByIdAndDelete(req.params.id);
		if (!deleteTask) {
			return res.status(400).json({message: 'Task undefined'});
		}
		res.status(200).json(deleteTask);
	} catch (e) {
		console.error('Fail to delete task: ', e);
		res.status(500).json('Internal Server Error');
	}
};

export {getAllTasks, createTask, updateTask, deleteTask};