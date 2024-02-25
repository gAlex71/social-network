import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'Friends'
}

const friendsDef = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Alex'},
  {id: 3, name: 'Any'},
  {id: 4, name: 'Igor'},
  {id: 5, name: 'Liza'},
]

export default function FriendsPage() {
  return (
    <div className="p-layout w-10/12">
      <div className="text-2xl font-medium">All people</div>
      {friendsDef.map(friend =>
        <div key={friend.id} className="pt-layout text-center border border-t-0 border-border">
          <Image width={80} height={80} src={'/avatar.jpg'} alt='' className="rounded-full" priority />

          <div className="mt-3 text-xl font-medium">{friend.name}</div>

          <button className="border-b border-white transition-colors hover:border-primary hover:text-primary">Add to friends</button>
        </div>  
      )}
    </div>
  )
}
