import Visa from '../../../assets/visa.webp'

type ATMCardProps = {
    viewATMCards: boolean;
}

const ATMCards = ({viewATMCards}: ATMCardProps) => {
  return (
    <div className={`
    ${viewATMCards ? 'hidden':'px-5 py-1 tablet:flex tablet:flex-col tablet:items-center tablet:py-10 mt-3 transition duration-300'}`}>
        <h1 className="text-green-800 font-bold pt-5 text-2xl tablet:w-fulltablet:pb-8 tablet:text-center tablet:pt-10 tablet:text-4xl">
            ATM Card Category
        </h1>

        <section className="mt-5 border border-gray-400 rounded-xl shadow-xl px-4 py-4 mb-8 tablet:w-[700px] font-light">

            <div className="flex justify-between pt-2 tablet:">
                <p className='text-green-700 text-xs mobile:text-sm font-extrabold'>
                ATMCard (...2345)
                </p>

                <img src={Visa} alt=""
                className='w-12' />
            </div>
            
            <div className="flex justify-between px-2 py-4 mobile:px-3 items-center mb-3 uppercase font-bold">
                <h6 className="text-green-800 text-xs mobile:text-sm">
                    Actual Balance:
                </h6>
                <p className="text-lg mobile:text-2xl">
                    GH¢1,000.00
                </p>
            </div>
        </section>
    </div>
  )
}

export default ATMCards