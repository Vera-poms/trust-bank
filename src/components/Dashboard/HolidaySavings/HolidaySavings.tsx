import { Transactions } from  "../transactions";


const HoliActive = () => {
    const totalGoal = 5000;
    const currentSaved = 1200;
    const progress = Math.min(100, (currentSaved / totalGoal) * 100);
  return (
    <div className="px-4 py-8">
        <div className="bg-white px-5 py-3 border border-green-400 rounded-xl">
            <h1 className="text-green-700">Holiday Savings Goal</h1>
            <div className="text-center py-4">
                <h4 className="text-sm text-gray-500">
                    Goal: <span>GH¢{totalGoal}.00</span>
                </h4>
                <p className="text-3xl minitablet:text-4xl text-green-800 font-bold">GH¢{currentSaved}.00</p>
            </div>
            <div
            className="bg-gray-300 w-full h-3 rounded-full">
                <div className="bg-green-500 h-3 rounded-full"
                style={{width: `${progress}%`}}></div>
            </div>
            <p className="font-extralight text-[12px] text-right pt-1 text-green-500">{progress}% completed</p>
        </div>

        <div className="bg-white py-4 mt-6 px-4 rounded-lg shadow-2xl">
            <h1 className="text-gray-600 text-xl pb-5 font-bold">Recent Transactions</h1>

            <ul className="pb-5">
                {Transactions.map((activity) => {
                    return (
                        <li
                        key={activity.id}
                        className="flex justify-between border-b border-gray-300">
                            <div className="">
                                <h1 className="font-medium">
                                    {activity.description}
                                </h1>
                                <p className="text-gray-400 font-light">{activity.date}</p>
                            </div>

                            <h2 className={`font-bold ${activity.type === "Debit" ? 'text-red-500' : 'text-green-500'}`}>
                                {activity.type === "Debit" ? 
                                `-` :
                                `+`}
                                GH¢{activity.amount}
                            </h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    
  )
}

export default HoliActive