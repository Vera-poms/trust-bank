

type StatementProps = {
    viewStatements: boolean;
}

const Statements = ({viewStatements}: StatementProps) => {
  return (
    <div className={`
    ${viewStatements ? 'hidden':'px-5 py-1 tablet:flex tablet:flex-col tablet:items-center tablet:py-10 mt-3 transition duration-300'}`}>
        <h1 className="text-green-800 font-bold pt-5 text-2xl tablet:w-full tablet:pb-8 tablet:text-center tablet:pt-10 tablet:text-4xl">
            Statement Request Section
        </h1>

        <section className="mt-5 border border-gray-400 rounded-xl shadow-xl px-4 py-4 mb-8 tablet:w-[700px] font-light">
            <p>
                Request your detailed account statements below. Statements can be generated for up to the last 5 years.
            </p>

            <div className="flex flex-col pt-2 tablet:">
                <label className="pb-1 font-bold">Select Period</label>

                <select className="w-full border pl-2 py-3 rounded-lg outline-green-800">
                    <option> Last 3 Months</option>
                    <option> Last 6 Months</option>
                    <option> Last 1 Year</option>
                    <option> Custom Date Range</option>
                </select>
                <a href="#OpenAccount"
                className="mt-3 w-full bg-green-800 text-white text-center font-semibold py-4 rounded-lg hover:bg-green-700">
                    Request Statement
                </a>
            </div>
        </section>
    </div>
  )
}

export default Statements