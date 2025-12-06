import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import {connectDB} from './db/connection.js';

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

connectDB().then(() => {
	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}`);
	});
});

