import Paragraph from '../Paragraph'
import Section from '../Section'

import '../../styles/Home/Introduction.css'

import editorImg from '../../assets/img/illustration-editor-desktop.svg'

export default function Introduction() {
    const imagePosition = 'right'
    const stickSection = 'right';

    return (
        <>
            <div className='home-title'>Designed for the future</div>
            <Section image={editorImg} imagePosition={imagePosition} stickSection={stickSection}>
                <Paragraph title={"Introducing an extensible editor"}>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.
                </Paragraph>
                <Paragraph title={"Robust content management"}>
                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </Paragraph>
            </Section>
        </>
    )
}
