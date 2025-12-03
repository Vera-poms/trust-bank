

const AccountForms = () => {
  return (
    <div className='bg-green-700/10 w-screen'>
        <header className="bg-green-900 h-[50px] flex items-center px-2 justify-between">
            <a href='/'
            className='flex flex-start'>
                <span className='text-[#f8f9f7] font-bold text-[18px] tablet:text-3xl'>TrustBank</span> 
                <span className='uppercase text-[9px] flex flex-row pt-2 font-bold text-green-300'>Online</span>
            </a>

            <a href="/"
            className='text-white font-bold text-[18px] '>Exit</a>
        </header>

        <section className='text-lg pl-4 pt-2'>
            <h1 className='text-2xl font-bold text-green-800'>
                Your information
            </h1>
            <p>
                Let's get to know you.
                Please fill in the form below to create your account.
            </p>

        </section>

        <form action="/action_page.php" method="post"
        className="px-5 py-5 flex flex-col text-lg ">
            <label className='text-green-800'>
                First Name
            </label>
            <input type="text" className="border-b py-2 rounded-sm focus:outline-none mb-6 focus:border-b focus:border-green-700 text-2xl" required/>

            <label className='text-green-800'>
                Other Names
            </label>
            <input type="text" className="border-b py-2 rounded-sm focus:outline-none focus:border-b focus:border-green-700 mb-6 text-2xl"/>

            <label className='text-green-800'>
                Surname
            </label>
            <input type="text" className="border-b py-2 rounded-sm focus:outline-none focus:border-b focus:border-green-700 mb-6 text-2xl" required/>

            <label className='text-green-800'>
                Date of Birth
            </label>
            <input type="date" className="border-b py-2 rounded-sm focus:outline-none focus:border-b focus:border-green-700 mb-6 text-2xl" required/>

            <section className="flex flex-col mb-6">
                <label className="text-green-800">
                Gender
                </label>
                <select className=" border pl-2 py-3 rounded-lg outline-green-800">
                    <option> Male</option>
                    <option> Female</option>
                </select>
            </section>

            <label className='text-green-800'>
                Email
            </label>
            <input type="email" className="border-b  py-2 rounded-sm focus:outline-none focus:border-b focus:border-green-700 mb-6 text-2xl" required/>
            
            <label className='text-green-800'>
                Phone Number
            </label>
            <input type="tel"
             pattern="0[0-9]{9}" className="border-b  py-2 rounded-sm focus:outline-none focus:border-b focus:border-green-700 mb-6 text-2xl" required/>
            

            <label className='text-green-800'>
                Create A Password
            </label>
            
            <input type="password"  className="focus:outline-none focus:border-b focus:border-green-700 border-b py-2 rounded-sm"/>
               

            <section className='py-10'>
                <h1 className='text-md font-semibold uppercase text-green-800'>
                    Upload your documents
                </h1>

                <label className="text-green-800">
                Ghana Card
                </label>
                <input type="file"  className="focus:outline-none focus:border-b focus:border-green-700 border-b py-2 rounded-sm"/>
            </section>

            <a href="/"
            className='bg-green-400 text-center py-3 rounded-xl text-black active:bg-green-400/50  tablet:hover:bg-green-400/70 tablet:hover:text-white tablet:cursor-pointer'>
                Create Account
            </a>
        </form>
    </div>
  )
}

export default AccountForms