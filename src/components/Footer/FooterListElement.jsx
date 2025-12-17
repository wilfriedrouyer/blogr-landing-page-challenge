import '../../styles/Footer/FooterListElement.css'

export default function FooterListElement({children, url}) {
  return (
    <li>
        <a href={url} className='list-element'>{children}</a>
    </li>
  )
}
