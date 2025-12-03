import React, {useState, useMemo} from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import type {ChartData} from 'chart.js'
import { Radar } from 'react-chartjs-2';
import { loanData, options, radarData } from '../Home/Navbar/data';
import LoanExplorer from './LoanExplorer';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const LOAN_TYPES = ['personal', 'mortgage', 'auto'] as const;
type LoanTypeKey = typeof LOAN_TYPES[number] | 'all';

const BUTTON_COLORS: Record<LoanTypeKey, { bg: string, text: string, hover: string }> = {
    personal: { bg: 'bg-blue-100', text: 'text-blue-700', hover: 'hover:bg-blue-200' },
    mortgage: { bg: 'bg-purple-100', text: 'text-purple-700', hover: 'hover:bg-purple-200' },
    auto: { bg: 'bg-orange-100', text: 'text-orange-700', hover: 'hover:bg-orange-200' },
    all: { bg: 'bg-gray-100', text: 'text-gray-700', hover: 'hover:bg-gray-200' },
};

const Loans:React.FC = () => {
    const [activeLoan, setActiveLoan] = useState<LoanTypeKey>('all');

    const filteredChartData: ChartData<'radar'> = useMemo(() => {
        if (activeLoan === 'all'){
            return radarData;   
        }

        return {
            ...radarData,
            datasets: radarData.datasets.filter(dataset => 
                dataset.label?.toLowerCase() === activeLoan
            ),
        }
    }, [activeLoan])

    const activeLoanContent = activeLoan !== 'all' ? loanData[activeLoan] : null

    const renderButton = (key: LoanTypeKey, label: string) => {
        const { bg, text, hover } = BUTTON_COLORS[key];
        const isActive = activeLoan === key

        return (
            <button
            key={key}
            onClick={() => setActiveLoan(key)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${bg} ${text} ${hover} ${isActive ? 'ring-2 ring-offset-2 ring-current' : ''}`}>
                {label}
            </button>
        )
    }

  return (
    <div className='bg-green-900/10'>
        <header className="bg-green-900 h-[50px] flex items-center px-2 ">
            <a href='/'
            className='flex flex-start'>
                <span className='text-[#f8f9f7] font-bold text-[18px] tablet:text-3xl'>TrustBank</span> 
                <span className='uppercase text-[9px] flex flex-row pt-2 font-bold text-green-300'>Online</span>
            </a>
        </header>

        <div className="px-4 pb-6">
            <h1 className="text-2xl font-bold py-3  text-green-900 tablet:text-center tablet:text-4xl tablet:py-7">
                Comprehensive Guide to Lending Products
            </h1>
            <p>
                Trust Bank offers three core lending products designed to meet your diverse financial needs. Whether you are consolidating debt, buying a dream home, or purchasing a vehicle, our transparent application process ensures clarity at every step.
            </p>
        </div>

        <section className='px-4 py-4'>
            <div className='bg-white px-4 py-4 rounded-2xl'>
                <h4 className='text-green-900  font-bold text-xl pb-1'>
                    Loan Attribute Comparison
                </h4>
                <p className='text-medium tablet:text-lg pb-3'>
                    This visualization compares the qualitative aspects of our loan products based on the guide. Use this to understand the trade-offs between processing speed, documentation requirements, and term lengths.
                </p>

                <div className='border-l-3 border-green-700 px-4 py-3 rounded-lg mb-4 bg-green-500/10'>
                    <h5 className='text-lg font-semibold'>
                        Overview
                    </h5>
                    <p className='text-sm'>
                    Mortgages require the most documentation and have the longest terms. Personal Loans are the fastest to process but have higher rates due to lack of security. Auto Loans offer a balance of speed and security. 
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 pt-4 justify-center">
                    {renderButton('personal', 'Personal')}
                    {renderButton('mortgage', 'Mortgage')}
                    {renderButton('auto', 'Auto')}
                    {renderButton('all', 'All Comparison')}
                </div>

                <div className='flex flex-col  items-center'>
                    <h4>
                        {
                            activeLoan === 'all' ? 'Comparative Overview' : `${activeLoanContent?.title}`
                        }
                    </h4>

                    <div className='h-[300px] tablet:h-[400px]'>
                        <Radar data={filteredChartData} options={options}/>
                    </div>
                </div>
            </div>
        </section>

        <LoanExplorer/>
    </div>
  )
}

export default Loans