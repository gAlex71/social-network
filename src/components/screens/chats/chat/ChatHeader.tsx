import { Search } from "lucide-react";
import Image from "next/image";

export function ChatHeader({participant}: { participant: string }) {
    return (
        <div className="mb-5 flex items-center justify-between">
			<div className="flex items-center">
				<Image src={'/avatar.jpg'} alt="" width={40} height={40} className="mr-5 rounded-full" />

				<div className="text-sm">
					<div>{participant}</div>
					<div className="opacity-30">2 members</div>
				</div>
			</div>

            <button className="text-[#7C7275] hover:text-white">
                <Search />
            </button>
		</div>
    )
}