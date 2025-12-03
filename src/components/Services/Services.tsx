

const Services = () => {
  return (
    <div className="pb-10 ">
        <header className="bg-[#e1ebdc] h-[50px] flex items-center px-2 justify-between">
            <a href='/'
            className='flex flex-start'>
                <span className='text-green-800 font-bold text-[18px] '>TrustBank</span> 
                <span className='uppercase text-[9px] flex flex-row pt-1 font-bold text-black'>Online</span>
            </a>
        </header>

        <section className="px-3">
            <h1 className="text-green-800 font-bold pt-5 text-2xl tablet:w-full tablet: tablet:text-center tablet:pt-10 tablet:text-4xl">Comprehensive Bank Services</h1>

        <section className="tablet:flex">
            <div className="tablet:flex-2 tablet:pl-6">
                <h3 className="pt-3 font-semibold text-lg tablet:text-2xl tablet:pb-4">Banking & Transfers</h3>
                    <ol className="list-disc px-4 tablet:text-xl tablet:gap-y-2">
                        <li>
                            <strong>Domestic Banking</strong> (Local transfers)
                        </li>
                        <li>
                            <strong className="text-green-800">International Banking</strong> (SWIFT/Global transfers)
                        </li>
                        <li>
                            <strong className="text-green-800">Account to Account</strong> (Internal transfers)
                        </li>
                        <li>
                            <strong className="text-green-800">Deposits & Withdrawals</strong> (Branch/ATM locations)
                        </li>
                        <li>
                            <strong className="text-green-800">Loan Access</strong> (Application and management)
                        </li>
                    </ol>
                </div>
                <div className="pt-5 tablet:flex-1">
                    <h3 className="pt-3 font-semibold text-lg tablet:text-2xl tablet:pb-4">Mobile Money & Wallet</h3>
                    <ol className="list-disc px-4 tablet:text-xl tablet:gap-y-2">
                        <li>
                        <strong className="text-green-800">Mobile Money</strong> (Direct mobile wallet integration)
                        </li>
                        <li>
                        <strong className="text-green-800">Wallet to Account</strong> (Funding bank from wallet)
                        </li>
                        <li>
                            <strong className="text-green-800">Account to Wallet</strong> (Sending funds from bank to wallet)
                        </li>
        
                    </ol>
                </div>
            </section>

            <div className="mt-4 border-l-3 border-green-700 bg-green-100 rounded-r-lg pl-4 py-3 tablet:w-[400px]">
                <h1 className="text-green-700 font-bold text-xl">Why Mobile Banking?</h1>
                <ol className="list-disc px-4 tablet:text-xl tablet:gap-y-2">
                    <li>
                        <strong>Saving of Time:</strong> Instant transactions.
                    </li>
                    <li>
                        <strong>Convenience:</strong> Banking at the comfort of home.
                    </li>
                    <li>
                        <strong>Less Stress:</strong> Manage finances instantly.
                    </li>
                    <li>
                        <strong>Reliability:</strong> 24/7 service access.
                    </li>

                </ol>
            </div>
        </section>
        
    </div>
  )
}

export default Services