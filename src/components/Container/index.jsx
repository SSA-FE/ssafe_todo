import { useSelector, useDispatch } from "react-redux";
import { BlackContainer } from "../../layout/BlackContainer"
import { Ticket } from "../Ticket"
import classNames from 'classnames';

export const Container = (props) => {
    //Todo 받아오기
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', data: { id: todos.length + 1, title: '제목', content: '내용' } })
    }

    return (
        <BlackContainer className={classNames(
            'box-border',
            'px-8',
            'py-4',

            'gap-y-4',

            'flex',
            'flex-col',
            'items-center',
        )}>
            {/* wrapper */}
            <div className={classNames(
                'w-full',

                'overflow-y-scroll',
                'overflow-x-hidden', // x축 스크롤 제거
            )}>
                <div className={classNames(
                    'w-full',
                    'text-[2.3rem]',
                    'font-bold',

                    'mb-2'
                )}>
                    <span>{props.status}</span>
                </div>

                {/* Todo */}
                {
                    todos && todos.map((todo, index) => (
                        <Ticket key={index} todo={todo} />
                    ))
                }
            </div>


            {/* 추가 버튼 */}
            <div onClick={handleAddTodo} className={classNames(
                'w-full',
                'min-h-[32px]',
            
                'flex',
                'justify-center',
                'items-center',
            )}>
                <div className={classNames(
                    'w-[32px]',
                    'h-[32px]',
                    'bg-[#B5B5B5]',

                    'flex',
                    'justify-center',
                    'items-center',

                    'rounded-full',
                    'text-[1rem]',
                    'font-bold',

                    'hover:cursor-pointer',
                )}>+</div>
            </div>
        </BlackContainer>
    )
}