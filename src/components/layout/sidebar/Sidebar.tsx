import Image from 'next/image';
import { MessagesSquare, Phone, Settings, Sun, User2 } from 'lucide-react';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<Image width={50} height={50} src="/logo.svg" alt="" />

			<div>
				<Link href="/friends">
          <User2 />
        </Link>
				<Link href="/call">
          <Phone />
        </Link>
				<Link href="/chats">
          <MessagesSquare />
        </Link>
				<Link href="/settings">
          <Settings />
        </Link>
			</div>

			<Sun />
		</aside>
	);
};
