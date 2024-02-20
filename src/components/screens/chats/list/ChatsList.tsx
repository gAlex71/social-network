import Field from "@/components/ui/field/Field";
import { IChat } from "@/types/chat.types";
import { Search } from "lucide-react";
import { ChatListItem } from "./ChatListItem";

const chatsList: IChat[] = [
  {
    id: '123',
    messages: [
      {
        id: 'qw',
        createdAt: '12.03.20',
        text: 'Hello brother',
        sender: '123'
      },
      {
        id: 'er',
        createdAt: '12.03.20',
        text: 'Hello brother',
        sender: '456'
      },
    ],
    participants: [
      'Alex',
      'Dima'
    ]
  },
  {
    id: '456',
    messages: [
      {
        id: 'qw',
        createdAt: '12.03.20',
        text: 'Hello brother',
        sender: '123'
      },
      {
        id: 'er',
        createdAt: '12.03.20',
        text: 'Hello brother',
        sender: '456'
      },
    ],
    participants: [
      'Alex',
      'Dima'
    ]
  }
];

export const ChatsList = () => {
  return (
    <div>
      <div className="border-t border-b border-border p-layout">
        <Field placeholder="Search chat" Icon={Search} />
      </div>

      <div>
        {chatsList.map(chat => <ChatListItem key={chat.id} {...chat} />)}
      </div>
    </div>
  )
}
