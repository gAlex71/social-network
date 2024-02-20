import { IChat } from "@/types/chat.types";

export const chatsList: IChat[] = [
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