import mongoose from "mongoose";

const subtaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export default subtaskSchema;