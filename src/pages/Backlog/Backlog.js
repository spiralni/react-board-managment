import { useEffect, useState } from 'react';
import Task from '../../components/Tasks/Task';
import useDataFetching from '../../hooks/useDataFetching';
import './Backlog.css'

const Backlog = () => {
    const [loading, error, data] = 
        useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [data])

    return (
        <div className='Backlog-wrapper'>
            <h2>Backlog</h2>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ) : (
                tasks.map(task => (
                    <Task
                        key={task.id}
                        title={task.title}
                        body={task.body}
                    />
                ))
            )}
        </div>
    )
}

export default Backlog
