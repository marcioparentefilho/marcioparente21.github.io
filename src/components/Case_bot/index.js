import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Ormat_Deck from '../../assets/SEED/ORMAT_DECK.pdf'
import Ormat_Primer from '../../assets/SEED/Parente_Ormat_Capstone_Primer.pdf'
import Broadcom_Primer from '../../assets/SEED/Parente_BroadcomPrimer_V3.pdf'
import Halozyme_Primer from '../../assets/SEED/Parente_HALO_V2.pdf'
import Deckers_Primer from '../../assets/SEED/Parente_DECK_V1.pdf'
import Digital_Primer from '../../assets/SEED/Parente_DBRG_VF.pdf'
import Ormat_Primer_Orginial from '../../assets/SEED/Parente_Ormat_V1.pdf'

const Case_bot = () => {
    return (
        <>
            <div className='container bot-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['Publications']} idx={1} />
                    </h1>
                    <a href={Ormat_Deck} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Ormat Buy Pitch Slide Deck - 04/23/2024
                    </a>
                    <a href={Ormat_Primer} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Ormat Primer - 04/23/2024
                    </a>
                    <a href={Digital_Primer} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Digital Bridge Primer - 04/10/2024
                    </a>
                    <a href={Deckers_Primer} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Deckers Primer - 03/24/2024
                    </a>
                    <a href={Ormat_Primer_Orginial} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Ormat Primer - 03/08/2024
                    </a>
                    <a href={Halozyme_Primer} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Halozyme Primer - 02/27/2024
                    </a>
                    <a href={Broadcom_Primer} target="_blank" rel="noopener noreferrer" className='pdf-link'>
                        Broadcom Primer - 02/15/2024
                    </a>
                </div>
            </div >
        </>
    )
}

export default Case_bot