import mongoose from 'mongoose';
const {Schema} = mongoose;

const TaskSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	status: {
		type: String,
		enum: ['todo', 'in-progress', 'done'],
		default: 'todo',
	},
	completedAt: {
		type: Date,
		default: null,
	},
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
export default Task;
