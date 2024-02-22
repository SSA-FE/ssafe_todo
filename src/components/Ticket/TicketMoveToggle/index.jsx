import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames';

export const TicketMoveToggle = ({ move, status, todo }) => {
  const dispatch = useDispatch();

  const handleMove = () => {
    dispatch({
      type: `DELETE_${status}`,
      id: todo.id,
    });

    dispatch({
      type: `ADD_${move}`,
      data: {
        id: uuidv4(), 
        title: todo.title, 
        content: todo.content,
        color: todo.color,
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
