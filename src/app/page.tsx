import { Metadata } from "next"
import { Chat } from "@/components/screens/chats/chat/Chat";
import { ChatsList } from "@/components/screens/chats/list/ChatsList";
import { CurrentUser } from "@/components/screens/chats/CurrentUser";
import { ChatsScreen } from "@/components/screens/chats/ChatsScreen";

export const metadata: Metadata = {
    title: 'Chats'
}

export default function ChatsPage() {
  return <ChatsScreen />;
}
