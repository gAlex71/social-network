import { PropsWithChildren } from "react"
import { CurrentUser } from "./CurrentUser"
import { ChatsList } from "./list/ChatsList"

interface IChatsScreen extends PropsWithChildren {}


export const ChatsScreen = ({children}: IChatsScreen) => {
  const ChatComponent = () => children ? <>{children}</> : <p>Click chat on the left side for open</p>;

  return (
    <div className="grid h-full" style={{ gridTemplateColumns: '1fr 3fr' }}>
      <div className="border-r border-border">
        <CurrentUser />
        <ChatsList />
      </div>

      <div className="p-layout flex justify-center">
        <ChatComponent />
      </div>
    </div>
  )
}
