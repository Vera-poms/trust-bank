

type BankTransfersProps = {
    viewBankTransfers: boolean;
}

const BankTransfers = ({viewBankTransfers}: BankTransfersProps) => {
  return (
    <div className={`
    ${viewBankTransfers ? 'hidden':'px-5 tablet:flex tablet:flex-col tablet:items-center tablet:py-10 mt-3 transition duration-300'}`}>
        <h1 className="text-green-800 font-bold pt-5 text-2xl tablet:w-fulltablet:pb-8 tablet:text-center tablet:pt-10 tablet:text-4xl">
            Bank Services
        </h1>

        <section className="mt-5 border border-green-400 rounded-xl shadow-xl px-4 py-4 mb-8 tablet:w-[700px] font-light">

            <div className="pt-2 tablet:">
                <label className="pb-1 font-bold">Select Banking Type</label>

                <select className="w-full border pl-2 py-3 rounded-lg outline-green-800">
                    <option> Domestic Banking</option>
                    <option> International Banking</option>
                </select>
            </div>
            
            <div className="py-4 mobile:px-3 items-center mb-3">
                <label className="pb-1 font-bold">
                    Transaction
                </label>
                <select className="w-full border pl-2 py-3 rounded-lg outline-green-800">
                    <option> SWIFT/Global Transfers</option>
                    <option> Deposit</option>
                    <option> Withdrawals</option>
                    <option> Loan Access</option>
                </select>
            </div>
        </section>
    </div>
  )
}

export default BankTransfers