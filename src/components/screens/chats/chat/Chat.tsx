'use client';

// import { useQuery } from "@tanstack/react-query";
import { chatsList } from '../dataChats';
import { Message } from './Message';
import MessageField from './MessageField';
import { ChatHeader } from './ChatHeader';

export default function Chat({ id }: { id: string }) {
	// const { data } = useQuery({
	//   queryKey: ['chat', id],
	//   queryFn: async() => {
	//     const response = await fetch('');
	//     return response.json();
	//   },
	//   enabled: !!id
	// });

	// console.log(data);

	return (
		<div className="w-8/12 h-full grid" style={{ gridTemplateRows: '.6fr 6fr .6fr' }}>
			<ChatHeader participant={chatsList[0].participants[0]} />

			<div className="pt-5 border-t border-border">
				{chatsList[0].messages.map((message) => (
					<Message key={message.id} message={message} />
				))}
			</div>

			<MessageField />
		</div>
	);
}
