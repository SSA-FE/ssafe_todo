import { useSelector } from "react-redux";
import { BlackContainer } from "../../layout/BlackContainer"
import { Ticket } from "../Ticket"
import classNames from 'classnames';
import { Fragment, useEffect, useState } from "react";
import { AddTicketModal } from "../Modal/AddTicketModal";

const MATCH_STATUS = {
    'To do': 'TODO',
    'In progress': 'PROGRESS',
    'Done': 'DONE',
}

export const Container = (props) => {
    const { todos } = useSelector((state) => state.todos);
    const { progress } = useSelector((state) => state.progress);
    const { done } = useSelector((state) => state.done);

    const [containerStatus, setContainerStatus] = useState('');
    const [isAddModal, setIsAddModal] = useState(false);

    useEffect(() => {
        const status = props.status;
        setContainerStatus(MATCH_STATUS[status])
    }, [props.status])

    const openAddModal = () => {
        setIsAddModal(true);
    }

    const closeAddModal = () => {
        setIsAddModal(false);
    }

    return (
        <Fragment>
            <BlackContainer className={classNames(
                'box-border',
                'px-8',
                'py-4',

                'gap-y-4',
            )}>                    <div className={classNames(
                'w-full',
                'text-[2.3rem]',
                'font-bold',

                'mb-2'
            )}>
                    <span>{props.status}</span>
                </div>
                <div className={classNames(
                    'w-full',
                    'max-h-[500px]',

                    'flex',
                    'flex-col',
                    'items-center',

                    'scroll'
                )}>


                    {
                        containerStatus === 'TODO' ? todos.map((todo, index) => (
                            <Ticket key={index} status={containerStatus} todo={todo} />
                        )) : containerStatus === 'PROGRESS' ? progress.map((progress, index) => (
                            <Ticket key={index} status={containerStatus} todo={progress} />
                        )) : containerStatus === 'DONE' ? done.map((done, index) => (
                            <Ticket key={index} status={containerStatus} todo={done} />
                        )) : <span>Loading ... </span>
                    }

                </div>

                <div onClick={openAddModal} className={classNames(
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
            {isAddModal && (
                <div className={classNames(
                    'w-full',
                    'h-full',

                    'fixed',
                    'top-0',
                    'left-0',

                    'bg-black',
                    'bg-opacity-50',

                    'cursor-pointer',

                    'z-40'
                )} onClick={closeAddModal} />
            )}
            {isAddModal && <AddTicketModal closeModal={closeAddModal} status={containerStatus} />}
        </Fragment>

    )
}