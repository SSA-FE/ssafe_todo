import { BlackContainer } from "../../layout/BlackContainer"
import { Ticket } from "../Ticket"
import classNames from 'classnames';

export const Container = (props) => {
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

            <Ticket />

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