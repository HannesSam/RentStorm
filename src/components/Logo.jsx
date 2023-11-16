import Image from 'next/image'
import backgroundImage from '@/images/logos/hyrfokus.jpg'

export function Logo(props) {
  return (
    <div>
      <Image className="h-40 w-40" src={backgroundImage} alt="" unoptimized />
    </div>
  )
}
