import TaskWrapper from "./TaskWrapper"

const Task = ({ id, title, body, onDragStart }) => {
    return <TaskWrapper
        draggable
        onDragStart={e => onDragStart(e, id)}
        >
        <h3>{title}</h3>
        <p>{body}</p>
    </TaskWrapper>
}

export default Task