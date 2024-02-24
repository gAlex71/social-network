'use client'

import Field from "@/components/ui/field/Field";
import { ArrowRightToLine, Send } from "lucide-react";
import { useState } from "react";

interface IMessageField {
    sendMessage: (message: string) => Promise<void>
}

export default function MessageField ({sendMessage}: IMessageField) {
    const [message, setMessage] = useState('');

    const onSubmit = () => {
        message && sendMessage(message);
    };

    return (
      <div className="border-t border-border flex justify-between">
        <Field 
            placeholder="Write a message..." 
            Icon={ArrowRightToLine} 
            value={message} 
            onChange={e => setMessage(e.target.value)}
        />

        <button 
            disabled={!message}
            onClick={onSubmit} 
            className="hover:text-primary transition-colors cursor-pointer"
        >
            <Send />
        </button>
      </div>
    )
  }
  