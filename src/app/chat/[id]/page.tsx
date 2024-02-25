import { ChatsScreen } from "@/components/screens/chats/ChatsScreen";
import { Metadata } from "next";
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Chat from "@/components/screens/chats/chat/Chat";

export const metadata: Metadata = {
    title: 'Chat',
    ...NO_INDEX_PAGE
}

export default function ChatPage({ id }: { id: string }) {
    return (
        <ChatsScreen>
            <Chat id={id} />
        </ChatsScreen>
    )
}
