import './index.scss'
import '../Layout/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import pic1 from '../../assets/images/family_pic.jpg'
import pic2 from '../../assets/images/pwc_pic.jpg'
import pic3 from '../../assets/images/rc_pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: 'top',
            distance: '50px',
            duration: 1000,
            delay: 200,
            reset: true
        })
    }, [])
    return (
        <>
            <div className='page'>
                <div className='left'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters strArray={['About Me']} idx={1} />
                        </h1>
                        <div className='p-holder'>
                            <p>
                                I’m a computer science major with a minor in mathematics at Virginia Tech.
                                I moved from Brazil to America about 10 years ago, and have been programming
                                ever since. I've always loved the problem solving aspect that came with coding
                                and was planning to pursue a career in software development.
                            </p>
                            <p>
                                That began to change when I launched a fitness program called Delta Fitness in
                                my second semester of my freshman year. I started a freelance personal trainer
                                and after a month I had enough clientele to enlist others to help train the clients.
                                And quite frankly, it was a lot and I wanted to learn some fundamentals about running
                                a business, so I joined the consulting group on campus. In the group, I discovered
                                my passion for addressing challenges faced by businesses and learning about unique
                                industries. Recently, I completed a project with a Muslim bank, integrating
                                generative AI into their products, where I got to learn about Sharia banking law
                                and the banking industry as a whole. This semester, I'm a project manager for a
                                project for a startup news application, planning a hard launch strategy where I’ve
                                learned the dynamics of a startup. These experiences shifted my career interests from
                                software development to technology consulting. But I wanted to zoom out and learn and
                                understand how businesses make their money and know how to evaluate a company so I decided
                                to join SEED, the investment club here on campus.
                            </p>
                            <p>
                                I am currently an Analyist in the engergy sector of the group with an interest and foucus on
                                renweables. I've loved learning about the intricacies of each industry, whether it is a deep
                                dive into geothermal power plants or looking at the semiconductor industry. And this is where
                                I had that lightbulb moment where I can leverage my problem solving skills in an environment
                                where I get to continuously learn about different industries and companies with Strategy consulting.
                                On top of that, I want to be in a social and client facing environment, as I love interacting
                                with people as an extrovert.
                            </p>
                            <p>
                                This summer I will be interning at PwC this summer in the Oracle practice working with
                                ERP implementations. While I still do have an interest in enterprise architecture, I want
                                to do something less technical and more fast paced for junior year and full time positions,
                                such as strategy consulting. But beyond all that I love watching movies, working
                                out and rock climbing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='pics'>
                        <img src={pic1} alt="pic1" />
                    </div>
                    <div className='pics'>
                        <img src={pic2} alt="pic2" />
                    </div>
                    <div className='pics'>
                        <img src={pic3} alt="pic3" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default About