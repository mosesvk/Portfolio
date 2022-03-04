import {motion} from 'framer-motion'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({handleClose, text}) => {



  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modal orange-gradient'
        
      >

      </motion.div>

    </Backdrop>
  )
}