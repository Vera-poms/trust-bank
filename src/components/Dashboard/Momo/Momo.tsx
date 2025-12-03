import Networks from '../../../assets/momologo.png'

type MomoProps = {
    viewMomo: boolean;
}

const Momo = ({viewMomo}: MomoProps) => {
  return (
    <div className={`
    ${viewMomo ? 'hidden':'px-5 py-1 tablet:flex tablet:flex-col tablet:items-center tablet:py-10 mt-3 transition duration-300'}`}>
        <h1 className="text-green-800 font-bold pt-5 text-2xl tablet:w-fulltablet:pb-8 tablet:text-center tablet:pt-10 tablet:text-4xl">
            Momo Transactions
        </h1>

        <section className="mt-5 border border-gray-400 rounded-xl shadow-xl px-4 py-4 mb-8 tablet:w-[700px] font-light">

            <div className="flex justify-between pt-2 tablet:">
                <div>
                    <label className="pb-1 font-bold">Select Network</label>

                    <select className="w-full border pl-2 py-3 rounded-lg outline-green-800">
                        <option> atMoney</option>
                        <option> TeleCash</option>
                        <option> MTNMomo</option>
                    </select>
                </div>

                <img src={Networks} alt=""
                className='w-22' />
            </div>
            
            <div className="py-4 items-center mb-3">
                <label className="pb-1 font-bold">
                    Transaction
                </label>
                <select className="w-full border pl-2 py-3 rounded-lg outline-green-800">
                    <option> Account to Wallet</option>
                    <option> Wallet to Account</option>
                </select>
            </div>
        </section>
    </div>
  )
}

export default Momo