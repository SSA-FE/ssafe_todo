import { useDispatch } from 'react-redux';
import { useState } from 'react';

import classNames from 'classnames';

import { v4 as uuidv4 } from 'uuid';

const COLORS = [
    '#00A88B',
    '#D93535',
    '#307FE2',
    '#6A6DCD'
]

export const AddTicketModal = ({ closeModal, status }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#00A88B');

    const dispatch = useDispatch();
    
    const handleAddTicket = () => {
        if (title === '' || content === '') {
            alert('제목과 내용을 모두 입력해 주세요👺');
            return;
        }

        dispatch({
            type: `ADD_${status}`, data: {
                id: uuidv4(),
                title: title, 
                content: content,
                color: color,
            }
        })
        closeModal();
    }

    const handleColor = (col) => {
        setColor(col);
    }

    return (
        <div className={classNames(
            'w-[600px]',
            'h-[300px]',

            'py-4',
            'px-8',

            'absolute',
            'top-[50%]',
            'left-[50%]',
            'transform',
            'translate-x-[-50%]',
            'translate-y-[-50%]',

            `bg-[#f5f5f5]`,

            'rounded-md',

            'z-50',

            'dark:text-black',
        )}>
            <div className={classNames(
                'w-full',

                'py-2',

                'flex',
                'justify-between',
                'items-center',

                'text-[1.5rem]',
            )}>
                <div className={classNames(
                    'font-bold',
                )}>할 일을 입력해 주세요✅</div>

                <div className={classNames(
                    'flex',
                    'items-center',
                    'justify-between',
                )}>
                    <div className={classNames(
                        'mr-4',

                        'flex',
                        'gap-x-2',
                    )}>
                        {
                            COLORS.map((v) => (<div className={classNames(
                                'w-5',
                                'h-5',

                                'rounded-full',

                                `bg-[${v}]`,
                                'cursor-pointer',

                                color === v ? 'opacity-100' : 'opacity-20',
                            )} key={'color_'+v} onClick={() => {
                                handleColor(v);
                            }}/> ))
                        }

                    </div>
                    <img src={process.env.PUBLIC_URL + '/asset/icon/close_black.png'} alt="closeModal" onClick={closeModal} className={classNames(
                        'cursor-pointer',
                        'hover:opacity-60',
                    )} />
                </div>
            </div>

            <input className={classNames(
                'w-full',

                'py-2',
                'px-4',
                'mb-4',

                'box-border',

                'rounded-md',
            )} type="text" value={title} placeholder='제목' onChange={(e) => setTitle(e.target.value)} />

            <textarea className={classNames(
                'w-full',

                'py-2',
                'px-4',
                'mb-4',

                'box-border',

                'rounded-md',

                'resize-none',
            )} value={content} placeholder='내용' onChange={(e) => setContent(e.target.value)} />

            <div className={classNames(
                'w-full',
                'flex',
                'justify-center',
                'gap-x-4',

            )}>
                <button onClick={handleAddTicket} className={classNames(
                    'w-1/2',
                    'h-12',

                    'bg-black',
                    'text-white',

                    'font-bold',

                    'rounded-md',

                    'hover:bg-opacity-80',
                )}>추가</button>
                <button onClick={closeModal} className={classNames(
                    'w-1/2',
                    'h-12',

                    'bg-gray-300',
                    'text-white',

                    'font-bold',

                    'rounded-md',

                    'hover:bg-opacity-80',
                )}>취소</button>
            </div>
        </div>
    )
}