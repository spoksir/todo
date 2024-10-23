import React from 'react';
import { toast } from 'react-toastify';


const Todo = ({ id, title, description, mongoId, complete, deleteTodo, completeTodo }) => {
  
  const handleDelete = async () => {
    try {
      await deleteTodo(mongoId);
      toast.success('Tarefa excluída com sucesso');
    } catch (error) {
      toast.error('Erro ao excluir a tarefa');
    }
  };

  const handleComplete = async () => {
    try {
      await completeTodo(mongoId);
      toast.success('Tarefa marcada como concluída');
    } catch (error) {
      toast.error('Erro ao marcar a tarefa como concluída');
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {mongoId} {/* Usando mongoId como identificador único */}
      </th>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">
        {complete ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4 flex gap-1">
        <button 
          onClick={handleDelete} 
          className='py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600' 
          aria-label={`Delete task ${title}`}
        >
          Delete
        </button>
        {!complete && (
          <button 
            onClick={handleComplete} 
            className='py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600' 
            aria-label={`Mark task ${title} as completed`}
          >
            Done
          </button>
        )}
      </td>              
    </tr>
  );
};

export default Todo;
