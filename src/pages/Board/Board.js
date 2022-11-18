import Lane from '../../components/Lane/Lane'
import useDataFetching from '../../hooks/useDataFetching';
import './Board.css'

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

function onDragStart(e, id) {
  e.dataTransfer.setData('id', id)
}

function onDragOver(e) {
  e.preventDefault()
}

const Board = () => {
  const [loading, error, tasks] = 
    useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`)

  return (
    <div className='Board-wrapper'>
      {loading ? (<span>Loading...</span>) : (lanes.map((lane) => (
        <Lane 
          key={lane.id} 
          title={lane.title} 
          error={error}
          tasks={tasks.filter(task => task.lane === lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
        />
      )))}
    </div>
  );
}

export default Board;
