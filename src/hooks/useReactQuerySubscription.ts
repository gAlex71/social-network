import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

interface WebSocketEvent {
    id?: string;
    entity: string;
    operation: 'invalidate' | 'update';
    payload?: Record<string, unknown>;
}

interface UpdateData {
    id: string;
    [key: string]: any;
}

const useReactQuerySubscription = () => {
    const queryClient = useQueryClient();

    const socket = useRef<Socket>();

    useEffect(() => {
        socket.current = io(process.env.BACK_URL as string);

        socket.current.on('connect', () => {
            console.log('connected to socket');
        })

        socket.current.on('invalidate', (data: WebSocketEvent) => {
            //Очистка всех активных запросов в кэше
            queryClient.invalidateQueries();
        })

        //Обновляем данные
        socket.current.on('update', (data: WebSocketEvent) => {
            queryClient.setQueriesData({queryKey: [data.entity, data.id]}, (oldData) => {
                const update = (entity: UpdateData) =>
                    entity.id === data.id ? { ...entity, ...data.payload } : entity;
                
                return Array.isArray(oldData) ? oldData.map(update) : update(oldData as UpdateData)
            })
        })

        return () => {
            socket.current?.disconnect();
        }
    }, [queryClient]);

    const send = (input: WebSocketEvent) => {
        socket.current?.emit('invalidate', input);
    }

    return send;
}

export default useReactQuerySubscription;