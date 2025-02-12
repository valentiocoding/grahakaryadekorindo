
import React from 'react'
import CarouselLogo from '../pages/CarouselLogo'
import logo1 from '../assets/logo/1.png'
import logo2 from '../assets/logo/2.png'
import logo3 from '../assets/logo/3.png'
import logo4 from '../assets/logo/4.png'
import logo5 from '../assets/logo/5.png'
import logo6 from '../assets/logo/6.png'
import logo7 from '../assets/logo/7.png'
import logo8 from '../assets/logo/8.png'

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8
]

const InfiniteScroll = () => {
  return (
    <div className=' w-[70%] flex item justify-center my-5'>
      <CarouselLogo images={logos}/>
    </div>
  )
}

export default InfiniteScroll



