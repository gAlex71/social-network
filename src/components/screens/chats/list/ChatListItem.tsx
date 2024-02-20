import { IChat } from '@/types/chat.types';
import { IUser } from '@/types/user.types';
import Image from 'next/image';

export const ChatListItem = ({ participants, messages }: IChat) => {
	//Авторизовавшийся пользователь
	const authUserEmail: IUser['name'] = 'emailAuth@mail.ru';

	const companion = participants.find((user) => user !== authUserEmail);
	const lastMessage = messages.at(-1);

	return (
		<div className="p-layout flex items-center">
			<Image src={''} alt="" width={45} height={45} className="mr-5" />

			<div className="text-sm">
				<div>
                    <span>{companion}</span>
                    <span>{lastMessage?.createdAt}</span>
                </div>
				<div className="opacity-30">{lastMessage?.text}</div>
			</div>
		</div>
	);
};
