import classNames from "classnames"
import { TicketContainer } from "../../layout/TicketContainer"

export const Ticket = () => {
    return (
        <TicketContainer className={classNames(
            'bg-theme-red',

            'py-2',
            'pl-6',
            'pr-4',
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
                )}/>
                <img src="asset/icon/close.png" alt="del" className={classNames(
                    'w-4',
                    'h-4',
                )}/>
            </div>

            {/* 제목 */}
            <div className={classNames(
                'py-2',

                'font-bold',
                'text-xl',
            )}>
                Text Title
            </div>

            {/* 내용 */}
            <div className={classNames(
                'pb-2',

                'font-light',
                'text-[0.875rem]',
            )}>
                Text Content
            </div>
        </TicketContainer>
    )
}