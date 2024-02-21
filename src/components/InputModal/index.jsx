import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const InputModal = ({ closeModal, status }) => {
    const { todos } = useSelector((state) => state.todos);
    const { progress } = useSelector((state) => state.progress);
    const { done } = useSelector((state) => state.done);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const handleAddTicket = () => {
        const data = status === 'TODO' ? todos : status === 'PROGRESS' ? progress : done;
        dispatch({ type: `ADD_${status}`, data: { id: data.length + 1, title: '제목', content: '내용' } })
    }

    return (
        <div className={classNames(
            'w-[600px]',
            'h-[300px]',

            'p-8',

            'absolute',
            'top-[50%]',
            'left-[50%]',
            'transform',
            'translate-x-[-50%]',
            'translate-y-[-50%]',

            'bg-white',

            'rounded-md',

            'z-50',
        )}>
            {/* header */}
            <div></div>

            {/* title */}
            <div></div>

            {/* content */}
            <div></div>

            {/* button */}
            <div></div>
        </div>
    )
}