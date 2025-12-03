import React, { useState, useEffect, useRef, useCallback } from 'react';


declare global {
    interface Window {
        Chart: any;
    }
}


interface AccountType {
    id: 'basic' | 'premium' | 'retirement';
    name: string;
    icon: string;
    description: string;
    annualYield: number; 
    riskLevel?: number; 
}

// Data Source: Mock data
const ACCOUNTS_DATA: AccountType[] = [
    {
        id: 'basic',
        name: 'Basic Savings',
        icon: '💰',
        description: 'Low-risk, high liquidity for emergency funds (1.8% APY).',
        annualYield: 1.8,
    },
    {
        id: 'premium',
        name: 'High-Yield Savings',
        icon: '💎',
        description: 'Higher interest rates for medium-term goals (4.2% APY).',
        annualYield: 4.2,
    },
    {
        id: 'retirement',
        name: 'Managed IRA',
        icon: '📈',
        description: 'Long-term, tax-advantaged wealth building (8.0% estimated growth).',
        annualYield: 8.0, 
        riskLevel: 3,
    },
];


const loadChartJS = () => new Promise<void>(resolve => {
    if (window.Chart) {
        resolve();
        return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js';
    script.onload = () => {
        resolve();
    };
    document.head.appendChild(script);
});


// --- Chart.js Setup and Utility Functions ---

interface ChartInstance {
    destroy: () => void;
    update: () => void;
}

// Utility to create a Line Chart for projection
const createLineChart = (canvasRef: HTMLCanvasElement, initialInvestment: number, years: number, yieldRate: number): ChartInstance => {
    const labels = Array.from({ length: years + 1 }, (_, i) => `Year ${i}`);
    const dataPoints: number[] = [initialInvestment];
    
    let currentAmount = initialInvestment;
    for (let i = 1; i <= years; i++) {
        currentAmount *= (1 + yieldRate / 100);
        dataPoints.push(parseFloat(currentAmount.toFixed(2)));
    }

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'Projected Value',
            data: dataPoints,
            fill: false,
            borderColor: '#059669',
            tension: 0.1,
            pointRadius: 3,
            pointBackgroundColor: '#059669',
        }]
    };

    const config = {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context: any) {
                            return `Value: $${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Value ($)',
                        color: '#6b7280'
                    },
                    ticks: {
                        callback: (value: any) => `$${(value / 1000).toFixed(0)}k`
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        color: '#6b7280'
                    }
                }
            }
        },
    };

    return new window.Chart(canvasRef, config) as ChartInstance;
};


// --- React Component ---
const Investment: React.FC = () => {
    const [selectedAccount, setSelectedAccount] = useState<AccountType>(ACCOUNTS_DATA[0]);
    const [initialAmount, setInitialAmount] = useState(5000);
    const [years, setYears] = useState(10);
    const lineChartRef = useRef<HTMLCanvasElement>(null);
    const lineChartInstance = useRef<ChartInstance | null>(null);
    const [isChartReady, setIsChartReady] = useState(false);

    // Dynamic Line Chart Update
    const updateLineChart = useCallback(() => {
        if (!lineChartRef.current || typeof window.Chart === 'undefined') return;

        if (lineChartInstance.current) {
            lineChartInstance.current.destroy();
        }

        lineChartInstance.current = createLineChart(
            lineChartRef.current,
            initialAmount,
            years,
            selectedAccount.annualYield
        );
        setIsChartReady(true);
    }, [initialAmount, years, selectedAccount]);

    // Initial Chart Rendering and Cleanup
    useEffect(() => {
        // 1. Load Chart.js asynchronously
        loadChartJS().then(() => {
            // 2. Initialize Line Chart after script is guaranteed to be loaded
            if (typeof window.Chart === 'undefined') {
                console.error("Chart.js failed to load.");
                return;
            }
            updateLineChart();
        });

        // Cleanup chart instance on component unmount
        return () => {
            if (lineChartInstance.current) lineChartInstance.current.destroy();
        };
    }, [updateLineChart]);


    const handleAccountChange = (id: AccountType['id']) => {
        const newAccount = ACCOUNTS_DATA.find(a => a.id === id);
        if (newAccount) {
            setSelectedAccount(newAccount);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInitialAmount(Math.max(1, Number(e.target.value)));
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYears(Math.max(1, Math.min(50, Number(e.target.value))));
    };

    // Update chart when inputs or account selection changes
    useEffect(() => {
        if (isChartReady) {
            updateLineChart();
        }
    }, [initialAmount, years, selectedAccount, isChartReady, updateLineChart]);


    // Calculate final projected value (Compound Interest Formula)
    const finalValue = parseFloat((initialAmount * Math.pow(1 + selectedAccount.annualYield / 100, years)).toFixed(2));
    const totalEarnings = parseFloat((finalValue - initialAmount).toFixed(2));


    // Function to render risk level indicators
    const renderRiskIndicators = (level: number) => {
        if (!level) return null;
        return (
            <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                    <div
                        key={i}
                        className={`w-4 h-2 rounded-sm transition-colors ${
                            i < level ? (level <= 2 ? 'bg-green-500' : level <= 4 ? 'bg-yellow-500' : 'bg-red-500') : 'bg-gray-200'
                        }`}
                        title={`Risk Level ${level} out of 5`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
            <style>
                {`
                /* Chart Container Styling Requirements */
                .chart-container {
                    position: relative;
                    width: 100%;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                    height: 350px;
                    max-height: 400px;
                }
                @media (max-width: 640px) {
                    .chart-container {
                        height: 300px;
                    }
                }
                /* Custom styles for the range input track color */
                input[type='range']::-webkit-slider-runnable-track {
                    background: #6b7280;
                    border-radius: 9999px;
                    height: 8px;
                }
                input[type='range']::-webkit-slider-thumb {
                    background: #059669;
                    border-radius: 9999px;
                    height: 20px;
                    width: 20px;
                    margin-top: -6px;
                    -webkit-appearance: none;
                    appearance: none;
                    cursor: pointer;
                }
                `}
            </style>
            
            <header className="max-w-7xl mx-auto mb-6 flex items-center gap-2 border-b pb-4">
                <span className="text-3xl">💹</span>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Savings & Investment Projector
                </h1>
                <p className="text-sm text-gray-500 hidden sm:block ml-4">
                    Estimate the future growth of your funds.
                </p>
            </header>

            <main className="max-w-7xl mx-auto space-y-8">

                {/* Main Content Area: Inputs and Projection Visualization */}
                <section className="grid lg:grid-cols-3 gap-6">
                    
                    {/* Column 1: Account Selection & Inputs */}
                    <div className="lg:col-span-1 bg-white rounded-xl shadow-lg border border-gray-200 p-5 h-fit space-y-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Select Product ({selectedAccount.annualYield.toFixed(1)}% APY)
                        </h2>
                        
                        {/* Account Selection Cards */}
                        <div className="space-y-3">
                            {ACCOUNTS_DATA.map((account) => (
                                <div
                                    key={account.id}
                                    onClick={() => handleAccountChange(account.id)}
                                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                        selectedAccount.id === account.id
                                            ? 'border-emerald-600 bg-emerald-50 shadow-md'
                                            : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-base font-bold text-gray-900 flex items-center">
                                            <span className="text-xl mr-2">{account.icon}</span>
                                            {account.name}
                                        </h3>
                                        <div className="text-sm font-extrabold text-emerald-600">
                                            {account.annualYield.toFixed(1)}%
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{account.description}</p>
                                    
                                    {account.riskLevel && (
                                        <div className="mt-2 flex items-center justify-between text-xs font-medium text-gray-500 pt-2 border-t border-gray-100">
                                            Risk: {renderRiskIndicators(account.riskLevel)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Projection Inputs */}
                        <div className="pt-4 border-t border-gray-200 space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Set Parameters
                            </h3>
                            
                            {/* Input: Initial Amount */}
                            <div className="space-y-1">
                                <label htmlFor="initialAmount" className="text-sm font-medium text-gray-700">
                                    Initial Deposit ($)
                                </label>
                                <input
                                    type="number"
                                    id="initialAmount"
                                    value={initialAmount}
                                    onChange={handleAmountChange}
                                    min="1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-sm shadow-sm"
                                />
                            </div>

                            {/* Input: Time Horizon */}
                            <div className="space-y-1">
                                <label htmlFor="years" className="text-sm font-medium text-gray-700">
                                    Investment Horizon: {years} Years
                                </label>
                                <input
                                    type="range"
                                    id="years"
                                    min="1"
                                    max="50"
                                    step="1"
                                    value={years}
                                    onChange={handleYearChange}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Column 2 & 3: Projection Visualization */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            Projected Growth
                        </h2>
                        
                        {/* Results Display */}
                        <div className="flex items-end justify-between mb-4 border-b pb-4">
                            <div>
                                <div className="text-sm font-medium text-gray-600">Final Value Estimate ({years} years)</div>
                                <div className="text-3xl font-extrabold text-emerald-700">
                                    ${finalValue.toLocaleString()}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-600">Total Earnings</div>
                                <span className="font-bold text-lg text-green-700">${totalEarnings.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="chart-container shadow-inner bg-white p-2 rounded-lg">
                            <canvas ref={lineChartRef} id="projectionChart"></canvas>
                            {/* Display loading message if chart is not yet ready */}
                            {!isChartReady && <div className="absolute inset-0 flex items-center justify-center bg-white/70">Loading Chart...</div>}
                        </div>
                        
                        {/* Tax/Risk Disclaimer */}
                        {selectedAccount.riskLevel && (
                            <div className="mt-4 text-sm p-3 border border-dashed border-amber-300 bg-amber-50 rounded-lg">
                                **Risk Note:** This product has an estimated risk level of {selectedAccount.riskLevel}/5. Growth is not guaranteed.
                            </div>
                        )}
                    </div>

                </section>
            </main>

            <footer className="max-w-7xl mx-auto mt-8 text-center text-xs text-gray-400 py-4">
                Projections are hypothetical and based on compound interest. Consult a financial advisor.
            </footer>
        </div>
    );
};

export default Investment;