import { useDispatch } from 'react-redux';
import classNames from 'classnames';

export const TicketMoveToggle = ({ status, todo }) => {
  const dispatch = useDispatch();

  const handleMove = (status) => {
    dispatch({ type: `MOVE_${status}`, id: todo.id });
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
      onClick={() => handleMove(status)}
    >
      {status}
    </div>
  );
};
