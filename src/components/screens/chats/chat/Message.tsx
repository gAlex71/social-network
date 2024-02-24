import { IMessage } from "@/types/chat.types";
import dayjs from "dayjs";
import Image from "next/image";

export function Message({ message }: { message: IMessage }) {
    const isSender = '123' === message.sender;

    return (
        <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2.5`}>
            <div className={`relative flex items-center ${isSender ? 'flex-row-reverse': ''}`}>
                <Image src='' alt='avatar' className="rounded-full" width={45} height={45} />

                <div className={`bg-gray-200 p-2 rounded-lg ${isSender ? 'mr-3' : 'ml-3' }`}>
                    <p className="text-sm text-gray-800">{message.text}</p>
                    <span className="text-xs text-gray-500 block mt-1">
                        {dayjs(`2022-01-01T${message.createdAt}:00Z`).format('HH:mm')}
                    </span>
                </div>
            </div>
        </div>
    )
}