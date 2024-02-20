import { IUser } from "./user.types";

export interface IMessage {
    id: string;
    text: string;
    createdAt: string;
    sender: IUser['id'];
}

export interface IChat {
    id: string;
    messages: IMessage[];
    participants: IUser['name'][];
}