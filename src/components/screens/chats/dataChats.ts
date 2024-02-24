import { IChat } from "@/types/chat.types";

export const chatsList: IChat[] = [
    {
      id: '123',
      messages: [
        {
          id: 'qw',
          createdAt: '13:15',
          text: 'Hello brother',
          sender: '123'
        },
        {
          id: 'er',
          createdAt: '11:56',
          text: 'Hello brother',
          sender: '456'
        },
        {
          id: 'gh',
          createdAt: '13:15',
          text: 'How are you',
          sender: '123'
        },
        {
          id: '.d',
          createdAt: '11:56',
          text: 'Perfect',
          sender: '456'
        },
        {
          id: 'p[',
          createdAt: '13:15',
          text: 'I`m home, end you?',
          sender: '123'
        },
        {
          id: '3d',
          createdAt: '11:56',
          text: 'Don`t worry',
          sender: '456'
        },
        {
          id: '65',
          createdAt: '13:15',
          text: 'About me',
          sender: '123'
        },
        {
          id: 't5',
          createdAt: '11:56',
          text: 'I play games on PlayStation',
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