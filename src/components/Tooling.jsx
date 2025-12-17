import Paragraph from './Paragraph'
import Section from './Section'

import LaptopImg from '../assets/img/illustration-laptop-desktop.svg'

export default function Tooling() {
    const stickSection = 'left';
    
    return (
        <Section image={LaptopImg} stickSection={stickSection}>
            <Paragraph title={"Free, open, simple"}>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </Paragraph>
            <Paragraph title={"Powerful tooling"}>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
            </Paragraph>
        </Section>
    )
}
