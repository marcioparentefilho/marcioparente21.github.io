import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M', 'a', 'r', 'c', 'i', 'o', ' ', 'P', 'a', 'r', 'e', 'n', 't', 'e']


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1><AnimatedLetters letterClass={letterClass} strArray={nameArray} inx={15} /></h1>
                <h2>
                    Virginia Tech Student | Computer Science
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div >
    );
}

export default Home