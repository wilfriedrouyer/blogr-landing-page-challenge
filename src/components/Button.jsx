import '../styles/Button.css'

export default function Button({url, variant, children}) {
  return (
    <a href={url} className={`cta cta-${variant}`}>{children}</a>
  )
}
