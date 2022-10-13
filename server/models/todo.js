import { Schema, model } from "mongoose"

const TodoSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
})

const Todo = model('todo', TodoSchema)

export default Todo
