import {useState, useEffect} from 'react'
import { NavbarMenu } from './data'

type NavbarProps = {
    toggleMenu: () => void;
}

const Navbar = ({toggleMenu}: NavbarProps) => {

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = () => {
        if (typeof window !== 'undefined'){
            if (window.scrollY > lastScrollY){
                setShow(false)
            }else{
                setShow(true)
            }
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
    }, [lastScrollY])

  return (
    <nav className={`flex justify-between items-center  py-2 px-8 tablet:px-20 fixed w-full transition-transform duration-300 tablet: tablet:z-20 ${show ? 'translate-y-0':'-translate-y-[150%]'}`}>
        <div className='flex justify-between items-center bg-white shadow-md rounded-4xl py-2 px-5 w-full'>
            <h1 className='flex'>
            <span className='text-green-800 font-bold text-[20px] mobile:text-[28px]'>TrustBank</span> 
            <span className='uppercase text-[10px] flex flex-row justify-center items-center'>Online</span>
        </h1>
        <ul className='text-[18px] tablet:flex flex-1 justify-center row text-[#565d5af0] cursor-pointer hidden'>
            {NavbarMenu.map((item) => {
                return (
                    <li key={item.id}>
                        <a className='pl-6 hover:text-[#19704bf0]'
                        href={item.link}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>

        <img className="tablet:hidden w-6 h-5" src="/src/assets/icon-menu.svg" alt="" onClick={toggleMenu}/>
        <a href="/login"
            className="px-5 py-2 bg-green-800 rounded-3xl text-white text-[20px] max-tablet:hidden hover:transition-transform hover:translate-x-1 hover:duration-300 hover:bg-green-700">
            Login
        </a>
        </div>
    </nav>
  )
}

export default Navbar