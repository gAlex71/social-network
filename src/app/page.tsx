import { Metadata } from "next"
import { Chat } from "@/components/screens/chats/Chat";
import { ChatsList } from "@/components/screens/chats/ChatsList";
import { CurrentUser } from "@/components/screens/chats/CurrentUser";

export const metadata: Metadata = {
    title: 'Chats'
}

export default function ChatsPage() {
  return (
    <div className="grid h-full" style={{ gridTemplateColumns: '1fr 3fr' }}>
      <div className="border-r border-border">
        <CurrentUser />
        <ChatsList />
      </div>

      <div>
        <Chat />
      </div>
    </div>
  );
}
