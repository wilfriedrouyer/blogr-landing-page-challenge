import '../styles/Paragraph.css'

export default function Paragraph({title, style, children}) {
  return (
    <div className='paragraph' style={style}>
        {title && <h2 className='paragraph-title' style={style?.titleStyle}>{title}</h2>}
        <div className='paragraph-content' style={style?.contentStyle}>{children}</div>
    </div>
  )
}
