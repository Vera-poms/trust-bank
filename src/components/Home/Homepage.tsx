import Navbar from './Navbar/Navbar';
import Green from '../../assets/green_banking.webp';
import MenuToggle from './Navbar/MenuToggle';
import Footer from './Footer';
import { AboutSection, Itenary } from './about';
import { Link } from "react-router-dom";


type HomeProps = {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}
const Homepage = ({isMenuOpen, toggleMenu}: HomeProps) => {
  return (
    <div>
        <div className='mt-0 bg-cover bg-center bg-no-repeat min-h-[300px] pt-3 tablet:pt-10 tablet:min-h-[690px]'
      style={{
          backgroundImage:`url(${Green})`,
        }}>
          <Navbar
          toggleMenu={toggleMenu}/>

          <MenuToggle 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          />

          <div className='relative top-25 px-10 pt-5 tablet:px-25 tablet:pt-32 tablet:top-40'>
            <p className='text-white tablet:w-[850px] tablet:text-[22px]'>
             <strong className='text-2xl tablet:text-5xl'>Your Future, Secured.</strong><br/>
            Trust Bank provides secure, convenient, and reliable online banking, putting you in control of your finances 24/7.

            Investment Intelligence
            Tap into real-time market insights. Enter an asset or trend below to receive an instant, grounded analysis.
          </p>
          </div>
      </div>

      <section className='py-10'>
        <h1 className='text-xl text-center text-green-800 font-semibold tablet:text-2xl'>
          What would you like to do today?
        </h1>

        <div className='grid mobile:grid-cols-2 tablet:grid-cols-4 px-7 gap-8 py-10 tablet:px-12'>
          {
            Itenary.map(item => {
              return (
                <Link key={item.id}
                to={item.link}
                className='rounded-xl shadow-md bg-white tablet:hover:transition-transform tablet:hover:translate-y-1 tablet:hover:duration-300 tablet:hover:shadow-2xl
                tablet:relative tablet:hover:z-10'>
                  <img src={item.image} alt=""  className='h-[200px] w-full rounded-t-xl'/>
                  <p className='py-4 pl-2 tablet:hover:text-green-800'>{item.title}</p>
                </Link>
              )
            })
          }
        </div>
      </section>
      
      <section className='py-10 px-5 bg-green-800/10' id='aboutUs'>
        <h1 className='text-xl text-center text-green-800 font-semibold tablet:text-2xl'>
          About Trust Bank: Our Commitment
        </h1>

        <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 gap-8 py-10 tablet:px-12">
          {
            AboutSection.map(item => {
              const Icon = item.logo
              return (
                <div key={item.id} 
                className='p-6 rounded-xl shadow-md bg-white flex flex-col items-center'>
                  <Icon className='w-6 h-15 text-green-700'/>
                  <h1 className='font-bold'>
                    {item.title}
                  </h1>
                  <p className='text-gray-700'>
                    {item.content}
                  </p>
                </div>
              )
            })
          }
        </div>
      </section>

      

      <Footer/>
    </div>
    
  )
}

export default Homepage