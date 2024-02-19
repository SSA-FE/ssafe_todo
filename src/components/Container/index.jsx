import { useSelector, useDispatch } from "react-redux";
import { BlackContainer } from "../../layout/BlackContainer"
import { Ticket } from "../Ticket"
import classNames from 'classnames';
import { useEffect, useState } from "react";

const MATCH_STATUS = {
    'To do': 'TODO',
    'In progress': 'PROGRESS',
    'Done': 'DONE',
}
export const Container = (props) => {
    //Todo 받아오기
    const { todos } = useSelector((state) => state.todos);
    const { progress } = useSelector((state) => state.progress);
    const { done } = useSelector((state) => state.done);

    const [containerStatus, setContainerStatus] = useState('');

    useEffect(() => {
        setContainerStatus(MATCH_STATUS[props.status])
    }, [])

    const dispatch = useDispatch();

    const handleAddTicket = () => {
        const data = containerStatus === 'TODO' ? todos : containerStatus === 'PROGRESS' ? progress : done;
        dispatch({ type: `ADD_${containerStatus}`, data: { id: data.length + 1, title: '제목', content: '내용' } })
    }

    return (
        <BlackContainer className={classNames(
            'box-border',
            'px-8',
            'py-4',

            'gap-y-4',

            
        )}>
            <div className={classNames(
                'hover: visible',
                'w-full',
                'h-full',
                'hidden',

                'bg-red-500',

            )}>
                테스트
            </div>
            {/* wrapper */}
            <div className={classNames(
                'w-full',

                'flex',
                'flex-col',
                'items-center',

                // 'overflow-y-scroll',
                // 'overflow-x-hidden', // x축 스크롤 제거
            )}>
                <div className={classNames(
                    'w-full',
                    'text-[2.3rem]',
                    'font-bold',

                    'mb-2'
                )}>
                    <span>{props.status}</span>
                </div>

                {/* 진행도 별 컨테이너 */}
                {
                    containerStatus === 'TODO' ? todos.map((todo, index) => (
                        <Ticket key={index} status={containerStatus} todo={todo}/>
                    )) : containerStatus === 'PROGRESS' ? progress.map((progress, index) => (
                        <Ticket key={index} status={containerStatus} todo={progress}/>
                    )) : containerStatus === 'DONE' ? done.map((done, index) => (
                        <Ticket key={index} status={containerStatus} todo={done}/>
                    )) : <span>Loading ... </span>
                }

            </div>


            {/* 추가 버튼 */}
            <div onClick={handleAddTicket} className={classNames(
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