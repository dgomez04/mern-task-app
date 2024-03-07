import Task from "../models/task.model.js"


export const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
};

export const createTask = async (req, res) => {
    const { title, description, date, subtasks } = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        subtasks,
        user: req.user.id
    });

    const savedTask = await newTask.save();
    res.json(savedTask);

};

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.json(task);
}

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
};

export const createSubstask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    const { title, description} = req.body;
    tasks.subtasks.push({ title, description });

    const saved_task = await task.save();
    res.json(saved_task);
}

export const getSubtasks = async (req ,res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task.subtasks);
}

export const deleteSubtasks = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.subtask.id(req.params.subtaskId).remove();
    const saved_task = await task.save();

    res.json(saved_task);
}

export const updateSubtask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    const subtask = task.subtasks.id(req.params.subtaskId);
    if (!subtask) return res.status(404).json({ message: "Subtask not found" });

    subtask.set(req.body);
    const saved_task = await task.save();

    res.json(saved_task);
}
