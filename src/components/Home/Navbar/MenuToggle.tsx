// import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import iconClose from '../../../assets/icon-close.svg'
import { NavbarMenu } from './data'


type MenuProps = {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}


const MenuToggle = ({toggleMenu, isMenuOpen}: MenuProps) => {
    

  return (
    <div>
        <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x:isMenuOpen ? 0 : '-100%'}}
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.2}}>
              <div className='bg-white fixed right-0 top-0 bottom-0 h-screen w-[65%] z-50 pt-12 pl-10 inset-0 '>
                <img className='w-6 h-6 cursor-pointer'
                  src={iconClose} alt="icon-close" 
                  onClick={toggleMenu}
                  />

                <div className='pb-10'>
                  <ul className='pt-10 space-y-8 text-xl '>
                    {
                      NavbarMenu.map((item) => {
                        return(
                          <li key={item.id} className='links active:text-green-800'>
                            <a href={item.link}>
                                {item.title}
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                  
                </div>

                <a href="/login"
                  className="px-10 py-3 bg-green-800 rounded-r-3xl text-white text-[20px] active:transition-transform active:-translate-y-1 active:duration-300 active:bg-green-700">
                    Login
                </a>
              </div>  
        </motion.div>

        <AnimatePresence mode='wait'>
          {
            isMenuOpen && (
            <motion.div 
            className="fixed inset-0 z-30 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            </motion.div>
            ) 
          }
        </AnimatePresence>
    </div>
  )
}

export default MenuToggle