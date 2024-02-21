import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

export const TicketMoveToggle = ({ move, status, todo }) => {
  const { todos } = useSelector((state) => state.todos);
  const { progress } = useSelector((state) => state.progress);
  const { done } = useSelector((state) => state.done);

  const dispatch = useDispatch();

  const handleMove = () => {
    dispatch({
      type: `DELETE_${status}`,
      id: todo.id,
    });

    dispatch({
      type: `ADD_${move}`,
      data: {
        id: move === 'TODO' ? todos.length + 1 : move === 'PROGRESS' ? progress.length + 1 : done.length + 1
        , title: todo.title, content: todo.content
      },
    });
  };

  return (
    <div
      className={classNames(
        'w-full',
        'h-full',

        'py-2',
        'mx-4',

        'flex',
        'items-center',
        'justify-center',

        'rounded-md',

        'bg-black',
        'hover:bg-gray-800',

        'cursor-pointer'
      )}
      onClick={() => handleMove()}
    >
      {move}
    </div>
  );
};
