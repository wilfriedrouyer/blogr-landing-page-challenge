import Navbar from './Navbar'

import "../../styles/HeroSection.css"

export default function HeroSection() {
  return (
    <div className='hero-section'>
        <Navbar />
        <div className='hero-content'>
          <div className='headline'>A modern publishing platform</div>
          <div className='subheadline'>Grow your audience and build your online brand</div>
          <div className='hero-cta'>
            <a href='/' className='cta start-for-free'>Start for Free</a>
            <a href='/' className='cta learn-more'>Learn more</a>
          </div>
        </div>
    </div>
  )
}
