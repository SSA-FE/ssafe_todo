import { useDispatch } from 'react-redux';

import classNames from 'classnames';
import { TicketContainer } from '../../layout/TicketContainer';
import { useState } from 'react';
import { TicketMoveToggle } from './TicketMoveToggle';

export const Ticket = ({ status, todo }) => {
  const [isTicketHover, setIsTicketHover] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: `DELETE_${status}`, id: todo.id });
  };

  const handleEdit = () => {
    dispatch({
      type: `UPDATE_${status}`,
      id: todo.id,
      data: { title: '수정', content: '수정' },
    });
  };

  const handleMoustIn = () => {
    setIsTicketHover(true);
  };

  const handleMoustOut = () => {
    setIsTicketHover(false);
  };

  return (
    <TicketContainer
      className={classNames(
        {
          'bg-DONE': status === 'DONE',
          'bg-PROGRESS': status === 'PROGRESS',
          'bg-TODO': status === 'TODO',
        },

        'py-2',

        'box-border',

        'mb-4',

        'relative'
      )}
      onMouseOver={handleMoustIn}
      onMouseOut={handleMoustOut}
    >
      {isTicketHover && (
        <div
          className={classNames(
            'w-full',

            'box-border',

            'absolute',
            'bottom-8',

            'flex',

            'justify-center',
            'items-center'
          )}
        >
          {status === 'TODO' ? (
            <TicketMoveToggle move="PROGRESS" status={status} todo={todo} />
          ) : status === 'PROGRESS' ? (
            <>
              <TicketMoveToggle move="TODO" status={status} todo={todo} />
              <TicketMoveToggle move="DONE" status={status} todo={todo} />
            </>
          ) : (
            <TicketMoveToggle move="PROGRESS" status={status} todo={todo} />
          )}
        </div>
      )}
      <div
        className={classNames(
          'w-full',
          'pl-6',
          'pr-4',

          'flex',
          'justify-end',
          'items-center'
        )}
      >
        <img
          src="asset/icon/edit.png"
          alt="edit"
          className={classNames(
            'w-4',
            'h-4',
            'mr-4',

            'cursor-pointer'
          )}
          onClick={handleEdit}
        />
        <img
          src="asset/icon/close.png"
          alt="del"
          className={classNames(
            'w-4',
            'h-4',

            'cursor-pointer',
            'hover:opacity-70'
          )}
          onClick={handleDelete}
        />
      </div>

      {/* 제목 */}
      <div
        className={classNames(
          'py-2',
          'pl-6',
          'pr-4',

          'font-bold',
          'text-xl'
        )}
      >
        {todo.title}
      </div>

      {/* 내용 */}
      <div
        className={classNames(
          'pb-2',
          'pl-6',
          'pr-4',

          'font-light',
          'text-[0.875rem]'
        )}
      >
        {todo.content}
      </div>
    </TicketContainer>
  );
};
