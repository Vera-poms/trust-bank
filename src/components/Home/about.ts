import { FaBoltLightning } from "react-icons/fa6";
import { GiArrowScope } from "react-icons/gi";
import { FaMedal } from "react-icons/fa6";
import OpenAccountImg from '../../assets/couple.jpg'
import Services from '../../assets/bankservices.jpg'
import Invest from '../../assets/farmers.jpg'
import Loans from '../../assets/landm.jpg'

export const AboutSection = [
    {
        id: 1,
        logo: FaBoltLightning,
        title: 'Our Mission',
        content: 'To empower our clients with the financial tools and unwavering security they need to confidently build their future, globally and locally.'
    },
    {
        id: 2,
        logo: GiArrowScope,
        title: 'Our Vision',
        content: 'To be the most reliable and technologically advanced banking partner, recognized for exceptional transparency and client-first service.'
    },
    {
        id: 3,
        logo: FaMedal,
        title: 'Core Values',
        content: 'Integrity, Security, Innovation, and Dedication to our community. These principles guide every decision we make.'
    },
]

export const Itenary = [
    {
        id: 1,
        image:OpenAccountImg,
        title: 'Open an Account',
        link: '/openAccount', 
    },
    {
        id: 2,
        image:Services,
        title: 'Our Services',
        link: '/services', 
    },
    {
        id: 3,
        image:Loans,
        title: 'Take a Loan',
        link: '/loans', 
    },
    {
        id: 4,
        image:Invest,
        title: 'Invest and Save',
        link: '/investment', 
    },
]