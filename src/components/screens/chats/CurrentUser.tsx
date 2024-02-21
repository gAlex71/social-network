'use client';

import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CurrentUser = () => {
	const { push } = useRouter();

	return (
		<div className="p-layout flex items-center justify-between">
			<div className="flex items-center">
				<Image src="" alt="" width={50} height={50} className="mr-5" />

				<div className="text-sm">
					<div>Username</div>
					<div className="opacity-30">UI/UX Designer</div>
				</div>
			</div>

			<button className="text-[#7C7275] hover:text-white" onClick={() => push('/login')}>
				<LogOut />
			</button>
		</div>
	);
};
