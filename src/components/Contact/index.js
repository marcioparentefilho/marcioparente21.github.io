import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        console.log('Sending email...')

        emailjs
            .sendForm(
                'service_688il45',
                'template_hwt1ibc',
                refForm.current,
                'vd-wjSvcG96aQLRP8'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['Contact Me']} idx={1} />
                    </h1>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='text' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Contact