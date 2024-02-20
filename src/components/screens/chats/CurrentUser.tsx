import Image from "next/image"

export const CurrentUser = () => {
  return (
    <div className="p-layout flex items-center">
      <Image src={''} alt='' width={50} height={50} className="mr-5" />

      <div className="text-sm">
        <div>Username</div>
        <div className="opacity-30">UI/UX Designer</div>
      </div>
    </div>
  )
}
