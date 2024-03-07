import mongoose from "mongoose";
import subtaskSchema from "./subtask.model.js";

const taskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:  'User'
        },
        subtasks: [subtaskSchema]
    }, {timestamps: true}
);

export default mongoose.model('Task', taskSchema);