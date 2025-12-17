import Paragraph from "../Paragraph";
import Section from "../Section";

import phoneImg from '../../assets/img/illustration-phones.svg';
import circleImg from '../../assets/img/bg-pattern-circles.svg';

export default function Infrastructure() {
    const sectionStyle = {
        paddingLeft: '200px',
        height: '50vh',
        gap: '50px',
        backgroundColor: 'hsl(238, 21%, 29%)',
        backgroundImage: `url(${circleImg})`,
        backgroundSize: '75%',
        backgroundPosition: '-250px -620px',
        backgroundRepeat: 'no-repeat',
        borderBottomLeftRadius: '100px',
        borderTopRightRadius: '100px'
    };

    const paragraphStyle = {
        titleStyle: {
            color: 'white',
            fontSize: '36px',
            fontWeight: '300',
            lineHeight: '1'
        },
        contentStyle: {
            color: 'white',
        },
    };

    return (
        <Section image={phoneImg} style={sectionStyle}>
            <Paragraph title={"State of the Art Infrastructure"} style={paragraphStyle}>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </Paragraph>
        </Section>
    )
}
