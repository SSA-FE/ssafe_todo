import { BlackContainer } from "../../layout/BlackContainer"
import { Ticket } from "../Ticket"
import classNames from 'classnames';

export const Container = (props) => {
    return (
        <BlackContainer className={classNames(
            'box-border',
            'px-8',
            'py-4',

            'flex',
            'flex-col',
            'items-center',
        )}>
            <div className={classNames(
                'w-full',
                'text-[2.3rem]',
                'font-bold',
            )}>
                <span>{props.status}</span>
            </div>

            <Ticket />
        </BlackContainer>
    )
}