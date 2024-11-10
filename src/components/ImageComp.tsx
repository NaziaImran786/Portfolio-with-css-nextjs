import Image from 'next/image'
import React from 'react'

const ImageComp = () => {
  return (
    <div>
      <Image className="imageSetting" src={"/images/image.jpg"} alt="image" width={250} height={200}/>
    </div>
  )
}

export default ImageComp
