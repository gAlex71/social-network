'use client'

import Field from "@/components/ui/field/Field";
import { Search } from "lucide-react";
import { ChatListItem } from "./ChatListItem";
import { chatsList } from "../dataChats";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const ChatsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedTerm = useDebounce(searchTerm);

  return (
    <div>
      <div className="border-t border-b border-border p-layout">
        <Field placeholder="Search chat" Icon={Search} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div>
        {chatsList.map(chat => <ChatListItem key={chat.id} {...chat} />)}
      </div>
    </div>
  )
}
