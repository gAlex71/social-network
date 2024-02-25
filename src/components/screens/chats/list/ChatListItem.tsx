import { IChat } from '@/types/chat.types';
import { IUser } from '@/types/user.types';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

export const ChatListItem = ({ participants, messages, id }: IChat) => {
	//Авторизовавшийся пользователь
	const authUserEmail: IUser['name'] = 'Alex';

	const companion = participants.find((user) => user !== authUserEmail);
	const lastMessage = messages.at(-1);

	return (
		<Link href={`/chat/${id}`} className="p-layout flex items-center border-b border-border duration-300 ease-linear transition-colors hover:bg-border animation-slide-fade">
			<Image src={'/avatar.jpg'} alt="" width={45} height={45} className="mr-5 rounded-full" />

			<div className="text-sm w-full">
				<div className="flex items-center justify-between">
                    <span>{companion}</span>
                    <span className='text-xs opacity-30'>{dayjs(lastMessage?.createdAt).format('HH:mm')}</span>
                </div>
				<div className="opacity-30">{lastMessage?.text}</div>
			</div>
		</Link>
	);
};
