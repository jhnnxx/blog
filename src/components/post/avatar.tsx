import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex cursor-default items-center gap-2">
      <div className={`relative h-5 w-5`}>
        <Image
          src={picture}
          className="mr-4 h-12 w-12 rounded-full"
          fill
          alt={name}
        />
      </div>
      <div className="text-sm font-bold lg:text-lg">{name}</div>
    </div>
  )
}

export default Avatar
