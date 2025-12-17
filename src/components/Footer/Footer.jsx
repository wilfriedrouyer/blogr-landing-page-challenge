import FooterList from './FooterList'

import '../../styles/Footer/Footer.css'

import Logo from '../../assets/img/logo.svg'
import FooterListElement from './FooterListElement'

export default function Footer() {
  return (
    <div className='footer'>
        <img src={Logo} alt='Blogr' className='footer-logo' />
        <FooterList title='Product'>
            <FooterListElement url='#'>Overview</FooterListElement>
            <FooterListElement url='#'>Pricing</FooterListElement>
            <FooterListElement url='#'>Marketplace</FooterListElement>
            <FooterListElement url='#'>Features</FooterListElement>
            <FooterListElement url='#'>Integrations</FooterListElement>
        </FooterList>
        
        <FooterList title='Company'>
            <FooterListElement url='#'>About</FooterListElement>
            <FooterListElement url='#'>Team </FooterListElement>
            <FooterListElement url='#'>Blog</FooterListElement>
            <FooterListElement url='#'>Careers</FooterListElement>
        </FooterList>
        
        <FooterList title='Connect'>
            <FooterListElement url='#'>Contact</FooterListElement>
            <FooterListElement url='#'>Newsletter</FooterListElement>
            <FooterListElement url='#'>LinkedIn</FooterListElement>
        </FooterList>
    </div>
  )
}
