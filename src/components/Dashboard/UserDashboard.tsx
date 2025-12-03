import ATMCards from "./ATMCards/ATMCards";
import BankTransfers from "./BankTransfers/BankTransfers";
import Momo from "./Momo/Momo";
import Statements from "./Statements/Statements"
import {useState} from 'react';
import HoliActive from "./HolidaySavings/HolidaySavings";


const UserDashboard = () => {
    const [viewStatements, setViewStatements] = useState(false)
    const [viewATMCards, setViewATMCards] = useState(false)
    const [viewMomo, setViewMomo] = useState(false)
    const [viewBankTransfers, setViewBankTransfers] = useState(false)

    const toggleViewStatement = () => {
        setViewStatements(v => !v)
    }
    const toggleViewATMCards = () => {
        setViewATMCards(v => !v)
    }
    const toggleViewMomo = () => {
        setViewMomo(v => !v)
    }
    const toggleViewBankTransfers = () => {
        setViewBankTransfers(v => !v)
    }
    



  return (
    <div className="bg-[#f5f8f3] w-screen h-screen pb-10 ">
        <header className="bg-green-900 h-[50px] flex items-center px-2 justify-between">
            <a href='/'
            className='flex flex-start'>
                <span className='text-[#f8f9f7] font-bold text-[18px] tablet:text-3xl'>TrustBank</span> 
                <span className='uppercase text-[9px] flex flex-row pt-2 font-bold text-green-300'>Online</span>
            </a>

            <a href="/login"
            className='text-white font-bold text-[18px] '>Logout</a>
        </header>

        <h1 className="text-2xl font-bold py-3 pl-2 text-green-900 tablet:text-center tablet:text-4xl tablet:py-7">
            Welcome back, <span>User</span>!
        </h1>
        <section className="font-bold">
            <div className="flex justify-between bg-white px-2 py-4 mobile:px-3 items-center mb-8 uppercase border-l-6 border-green-600 mx-5 rounded-xl tablet:shadow-md tablet:px-5">
                <h6 className="text-green-800 text-xs mobile:text-sm">
                    Primary Account Balance:
                </h6>
                <p className="text-lg font-bold mobile:text-4xl  tablet:pr-5">
                    GH¢1,000.00
                </p>
            </div>
            <div className="border-b border-gray-200 mx-3">
                <button className={`px-2 py-2 
                ${viewStatements ? 'text-gray-500': 'bg-white rounded-t-lg text-green-700 border-b-4 '}`}
                onClick={toggleViewStatement}>
                    Statements
                </button>
                <button className={`ml-2 px-2 py-2 
                ${viewATMCards ? 'text-gray-500': 'bg-white rounded-t-lg text-green-700 border-b-4'}`}
                onClick={toggleViewATMCards}>
                    ATM Cards
                </button>
                <button className={` ml-2 px-3 py-2 text-[#e1ebdc]
                ${viewMomo ? 'text-gray-500': 'bg-white rounded-t-lg text-green-700 border-b-4 '}`}
                onClick={toggleViewMomo}>
                    Momo
                </button>
                <button className={` ml-2 px-3 py-2 text-[#e1ebdc]
                ${viewBankTransfers ? 'text-gray-500': 'bg-white rounded-t-lg text-green-700 border-b-4'}`}
                onClick={toggleViewBankTransfers}>
                    Bank Transfers
                </button>
            </div>
            

            <section className="pb-2 bg-white">
                <Statements viewStatements={viewStatements}/>
                <ATMCards viewATMCards={viewATMCards}/>
                <Momo viewMomo={viewMomo}/>
                <BankTransfers viewBankTransfers={viewBankTransfers}/>
            </section>

            <HoliActive/>
        </section>
    </div>
  )
}

export default UserDashboard