import classNames from "classnames"
import { TicketContainer } from "../../layout/TicketContainer"

export const Ticket = ({todo}) => {

    const handleDelete = () => {
        console.log('삭제')
    }

    const handleEdit = () => {
        console.log('수정')
    }

    return (
        <TicketContainer className={classNames(
            'bg-theme-red',

            'py-2',
            'pl-6',
            'pr-4',

            'mb-4',
        )}>
            <div className={classNames(
                'w-full',

                'flex',
                'justify-end',
                'items-center',
            )}>
                <img src="asset/icon/edit.png" alt="edit" className={classNames(
                    'w-4',
                    'h-4',
                    'mr-4',
                )} onClick={handleEdit}/>
                <img src="asset/icon/close.png" alt="del" className={classNames(
                    'w-4',
                    'h-4',
                )} onClick={handleDelete}/>
            </div>

            {/* 제목 */}
            <div className={classNames(
                'py-2',

                'font-bold',
                'text-xl',
            )}>
                {todo.title}
            </div>

            {/* 내용 */}
            <div className={classNames(
                'pb-2',

                'font-light',
                'text-[0.875rem]',
            )}>
                {todo.content}
            </div>
        </TicketContainer>
    )
}