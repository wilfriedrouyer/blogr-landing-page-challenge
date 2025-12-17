import "../styles/Section.css"

export default function Section({image, imagePosition = 'left', stickSection, style, children}) {
    const paragraphClasses = `${stickSection !== null && stickSection !== undefined ? `stick-${stickSection}` : ''}`;
    const paragraphContentClasses = `${imagePosition === 'left' ? 'order-1' : ''}`;
    const paragraphImgClasses = `${imagePosition === 'right' ? ' order-1' : ''}`;

    return (
        <div className={`paragraph-section ${paragraphClasses}`} style={style}>
            <div className={`paragraph-content ${paragraphContentClasses}`}>
                {children}
            </div>
            <div className={`paragraph-img ${paragraphImgClasses}`}>
                <img src={image} alt="section" />
            </div>
        </div>
    )
}
