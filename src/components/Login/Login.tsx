import Green from '../../assets/green_banking.webp'

const Login = () => {
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover bg-center"
    style={{
        backgroundImage:`url(${Green})`,

    }}>
        <div className='backdrop-blur-md w-screen h-screen  flex flex-col justify-center items-center'>
            <div>
                <h1 className='flex h-[100px] flex-start'>
                    <span className='text-green-400 font-bold text-[40px] '>TrustBank</span> 
                    <span className='uppercase text-[12px] flex flex-row pt-6 font-bold text-white'>Online</span>
                </h1>
                
            </div>
            
            <form action="/action_page.php" method="post"
            className="border border-white px-5 py-5 flex flex-col text-lg text-white rounded-xl mx-3">
                <label className='text-green'>
                    Username
                </label>
                <input type="email" className="border pl-3 py-2 rounded-sm focus:outline-none" required/>
                <p className="hidden">
                    Please enter a valid email!
                </p>

                <label>
                    Password
                </label>
                <div className="border px-3 py-2 rounded-sm ">
                    <input type="password"  className="focus:outline-none"/>
                    <a href="#show" className="">Show</a>
                </div>
                <p className="hidden">The password is incorrect!</p>
                
                <section className="flex justify-between my-4">
                    <label className="">
                    <input type="checkbox" name="Remember me" id="remember"
                    className='mr-3 appearance-none  w-3 h-3 checked:bg-green-400 border cursor-pointer'/>
                    Remember me
                    </label>
                </section>

                <a href=""
                className='bg-green-400 text-center py-3 rounded-xl text-black active:bg-green-400/50  tablet:hover:bg-green-400/70 tablet:hover:text-white tablet:cursor-pointer'>
                    Login
                </a>


            
                <a href="#" className="text-sm hover:text-green-400">New User? Sign Up here </a>
            </form>
        </div>
    </div>
  )
}

export default Login