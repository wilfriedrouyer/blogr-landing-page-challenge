import '../../styles/Footer/FooterList.css'

export default function FooterList({ title, children }) {
  return (
    <div className='footer-list'>
        <div>{title}</div>
        <ul className='footer-list-elements'>
            {children}
        </ul>
    </div>
  )
}
