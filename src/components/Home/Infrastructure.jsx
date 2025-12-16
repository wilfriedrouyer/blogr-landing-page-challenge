import Paragraph from "./Paragraph";
import Section from "../Section";

import phoneImg from '../../assets/img/illustration-phones.svg';

export default function Infrastructure() {
    const sectionStyle = {paddingLeft: '200px', backgroundColor: 'hsl(238, 21%, 29%)'}
    const paragraphStyle = {contentStyle: {color: 'white' }};

    return (
        <Section image={phoneImg} style={sectionStyle}>
            <Paragraph title={"State of the Art Infrastructure"} style={paragraphStyle}>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </Paragraph>
        </Section>
    )
}
