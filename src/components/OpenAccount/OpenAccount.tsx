
const OpenAccount = () => {
  return (
    <div className="h-screen">
        <div className="h-full">
            <header className="bg-[#e1ebdc] h-[50px] flex items-center px-2 justify-between">
                <a href='/'
                className='flex flex-start'>
                    <span className='text-green-800 font-bold text-[18px] '>TrustBank</span> 
                    <span className='uppercase text-[9px] flex flex-row pt-1 font-bold text-black'>Online</span>
                </a>
            </header>

            <h1 className="text-green-800 font-bold pl-3 pt-5 text-2xl tablet:w-full tablet:pb-8  tablet:text-center tablet:pt-10 tablet:text-4xl">How to Open an Account</h1>

            <section className="px-4 tablet:">
                <div className="pb-5 tablet:pb-10 tablet:flex">
                    <div className="tablet:flex-2 tablet:pl-6">
                        <h3 className="pt-3 font-semibold text-lg tablet:text-2xl tablet:pb-4">Step-by-Step Instructions</h3>
                        <ol className="list-decimal px-4 tablet:text-xl tablet:gap-y-2">
                            <li>
                                Visit our website and click 'Open Account Now'.
                            </li>
                            <li>
                                Fill out the personal information form carefully.
                            </li>
                            <li>
                                Upload clear images of your required **Documents** (e.g., ID, proof of address).
                            </li>
                            <li>
                                Create a strong, unique **Password** following our security guidelines.
                            </li>
                            <li>
                                Complete the **Picture Identity** verification step (e.g., selfie verification).
                            </li>
                            <li>
                                Review the terms and submit your application.
                            </li>
                            <li>
                                Your application will be verified within 24 hours.
                            </li>

                        </ol>
                    </div>
                    <div className="py-5 tablet:flex-1">
                        <h3 className="text-red-500 font-semibold text-lg">Important Disclaimer Section</h3>
                        <p className="border border-red-500 rounded-xl bg-red-100 p-3 text-gray-500">
                            By proceeding, you acknowledge that all information provided is accurate and true. Trust Bank reserves the right to reject any application that fails to meet the KYC (Know Your Customer) or security standards. Accounts are subject to regulatory approval and standard bank terms and conditions.
                        </p>
                    </div>
                </div>
                <a href="/openAccount"
                className='bg-green-700 text-center py-3 px-4 rounded-lg text-white active:bg-green-400/50  tablet:hover:bg-green-400/70 tablet:hover:text-white tablet:cursor-pointer'>
                    Open An Account
                </a>
            </section>

            
        </div>
    </div>
  )
}

export default OpenAccount