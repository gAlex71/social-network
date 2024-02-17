'use client'

import { MessagesSquare, Phone, Settings, Sun, User2 } from 'lucide-react';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import cn from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuIcons = [
	{
		url: '/friends',
		icon: <User2 size={30} />,
	},
	{
		url: '/call',
		icon: <Phone size={30} />,
	},
	{
		url: '/',
		icon: <MessagesSquare size={30} />,
	},
	{
		url: '/settings',
		icon: <Settings size={30} />,
	},
];

const isLogin = false;

export const Sidebar = () => {
	const pathName = usePathname();

	if(!isLogin) return null;
	
	return (
		<aside className={styles.sidebar}>
			<Image width={45} height={45} priority src="/logo.svg" alt="" />

			<div>
				{menuIcons.map(({ url, icon }) => (
					<Link href={url} key={url} className={cn({ [styles.active]: pathName === url })}>
						{icon}
					</Link>
				))}
			</div>

			<Sun size={30} />
		</aside>
	);
};
