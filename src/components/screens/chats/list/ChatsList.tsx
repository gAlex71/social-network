import Field from "@/components/ui/field/Field";
import { Search } from "lucide-react";
import { ChatListItem } from "./ChatListItem";
import { chatsList } from "../dataChats";

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
