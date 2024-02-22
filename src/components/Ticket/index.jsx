import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TicketContainer } from '../../layout/TicketContainer';
import { TicketMoveToggle } from './TicketMoveToggle';
import { UpdateTicketModal } from '../Modal/UpdateTicketModal';

import classNames from 'classnames';

export const Ticket = ({ status, todo }) => {
  const [isTicketHover, setIsTicketHover] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    window.confirm('할 일을 삭제하시겠습니까?') &&
      dispatch({ type: `DELETE_${status}`, id: todo.id });
  };

  const openEditModal = () => {
    setIsEditModal(true);
  };

  const closeEditModal = () => {
    setIsEditModal(false);
  };

  const handleMoustIn = () => {
    setIsTicketHover(true);
  };

  const handleMoustOut = () => {
    setIsTicketHover(false);
  };

  return (
    <Fragment>
      <TicketContainer
        className={classNames(
          {
            'bg-[#00A88B]' : todo.color === '#00A88B',
            'bg-[#D93535]' : todo.color === '#D93535',
            'bg-[#307FE2]' : todo.color === '#307FE2',
            'bg-[#6A6DCD]' : todo.color === '#6A6DCD',
          },

          'py-2',
          'mb-4',

          'box-border',

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
            src={process.env.PUBLIC_URL + '/asset/icon/edit.png'}
            alt="edit"
            className={classNames(
              'w-4',
              'h-4',

              'mr-4',

              'cursor-pointer'
            )}
            onClick={openEditModal}
          />
          <img
            src={process.env.PUBLIC_URL + '/asset/icon/close.png'}
            alt="delete"
            className={classNames(
              'w-4',
              'h-4',

              'cursor-pointer',
              'hover:opacity-70'
            )}
            onClick={handleDelete}
          />
        </div>

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

      {isEditModal && (
        <div className={classNames(
          'w-full',
          'h-full',

          'absolute',
          'top-0',
          'left-0',

          'bg-black',
          'bg-opacity-50',

          'cursor-pointer',
          
          'z-40'
        )} onClick={closeEditModal}/>
      )}

      {isEditModal && (
        <UpdateTicketModal closeModal={closeEditModal} status={status} todo={todo}/>
      )}
    </Fragment>
  );
};
