'use client'

import Field from "@/components/ui/field/Field";
// import useReactQuerySubscription from "@/hooks/useReactQuerySubscription";
import { ArrowRightToLine, Send } from "lucide-react";
// import { useParams } from "next/navigation";
import { useState } from "react";

export default function MessageField () {
    const [message, setMessage] = useState('');

    // const send = useReactQuerySubscription();
    // const { id } = useParams();

    const onSubmit = () => {
        if(!message) return;

        console.log(message);
        // send({
        //     operation: 'invalidate',
        //     entity: 'chat',
        //     id: id.toString(),
        // })
    };

    return (
      <div className="border-t border-border flex justify-between">
        <Field 
            placeholder="Write a message..." 
            Icon={ArrowRightToLine} 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => {
                if(e.key === 'Enter') onSubmit()
            }}
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
  