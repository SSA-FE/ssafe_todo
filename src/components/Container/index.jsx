import { useSelector } from "react-redux";
import { BlackContainer } from "../../layout/BlackContainer"
import { Ticket } from "../Ticket"
import classNames from 'classnames';
import { useEffect } from "react";

export const Container = (props) => {
    //Todo 받아오기
    const todos = useSelector((state) => state.todos);
    
    return (
        <BlackContainer className={classNames(
            'box-border',
            'px-8',
            'py-4',

            'relative', // '추가' 버튼을 위한 'relative' 속성 추가

            'flex',
            'flex-col',
            'items-center',
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

            {/* 추가 버튼 */}
            <div className={classNames(
                'w-10',
                'h-10',

                'bg-[#B5B5B5]',

                'absolute',
                'bottom-[-20px]',

                'flex',
                'justify-center',
                'items-center',

                'rounded-full',

                'text-[1rem]',
                'font-bold',

                'hover:cursor-pointer',
            )}>
                +
            </div>
        </BlackContainer>
    )
}