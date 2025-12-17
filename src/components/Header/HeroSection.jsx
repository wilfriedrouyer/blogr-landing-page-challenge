import Navbar from './Navbar'

import "../../styles/Header/HeroSection.css"
import Button from '../Button'

export default function HeroSection() {
  return (
    <div className='hero-section'>
        <Navbar />
        <div className='hero-content'>
          <div className='headline'>A modern publishing platform</div>
          <div className='subheadline'>Grow your audience and build your online brand</div>
          <div className='hero-cta'>
            <Button url='/' variant='primary'>Start for Free</Button>
            <Button url='/' variant='secondary'>Learn more</Button>
          </div>
        </div>
    </div>
  )
}
