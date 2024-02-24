import { chatsList } from "../dataChats";
import { Message } from "./Message";
import MessageField from "./MessageField";

export default function Chat () {
  return (
    <div className="w-8/12 h-full">
      {chatsList[0].messages.map((message) => 
        <Message message={message} />
      )}

      {/* @ts-ignore */}
      <MessageField />
    </div>
  )
}
