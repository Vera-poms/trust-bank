import React, {useState} from 'react'
import { loanData } from '../Home/Navbar/data';
import type { LoanTypeEntry } from '../Home/Navbar/data';

const LOAN_TYPES = ['personal', 'mortgage', 'auto'] as const;
type LoanTypeKey = typeof LOAN_TYPES[number];

const EXPLORER_COLORS: Record<LoanTypeKey, { primary: string, light: string, text: string }> = {
    personal: { primary: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600' },
    mortgage: { primary: 'bg-purple-600', light: 'bg-purple-50', text: 'text-purple-600' },
    auto: { primary: 'bg-orange-600', light: 'bg-orange-50', text: 'text-orange-600' },
};

const LoanExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LoanTypeKey>('personal');
    
    
    const activeLoanDetails: LoanTypeEntry = loanData[activeTab];
    
    
    const colors = EXPLORER_COLORS[activeTab];

    const renderTabButton = (key: LoanTypeKey, label: string) => {
        const isActive = activeTab === key;
        return (
            <button 
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive 
                        ? 'shadow-sm bg-white text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
                {label}
            </button>
        );
    };

    const renderProcessTimeline = (process: LoanTypeEntry['process']) => (
        <div className="space-y-8 relative pl-6">
            <div className={`absolute left-2 top-0 bottom-0 w-0.5 ${colors.text} opacity-50`}></div> 
            
            {process.map((step, index) => (
                <div key={index} className="relative">
                    <div className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full ${colors.primary} border-4 border-white shadow-md`}></div>
                    
                    <span className="text-xs font-bold text-gray-500 uppercase">STEP {index + 1}</span>
                    <h4 className="font-semibold text-gray-900 mt-0.5">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
            ))}
        </div>
    );
    
    const renderDocumentCard = (doc: LoanTypeEntry['documents'][0]) => (
        <div key={doc.title} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <span className={`text-xs font-bold ${colors.text} uppercase tracking-wide`}>
                {doc.category}
            </span>
            <h5 className="font-semibold text-gray-900 mt-1">{doc.title}</h5>
            <p className="text-sm text-gray-500 mt-1">{doc.detail}</p>
        </div>
    );

    return (
        <section id="explorer" className="px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">Loan Explorer</h3>
                    <p className="text-gray-500">Select a product to view specific requirements and process flows.</p>
                </div>
                
                <div className="bg-gray-200 p-1 rounded-xl inline-flex shadow-inner">
                    {renderTabButton('personal', 'Personal')}
                    {renderTabButton('mortgage', 'Mortgage')}
                    {renderTabButton('auto', 'Auto')}
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                
                <div className={`${colors.light} border-b border-gray-200 p-6 md:p-8`}>
                    <div className="flex items-start gap-4">
                        <div id="loan-icon" className="text-4xl bg-white p-3 rounded-xl shadow-md">{activeLoanDetails.icon}</div>
                        <div>
                            <h2 id="loan-title" className="text-2xl font-bold text-gray-900">{activeLoanDetails.title}</h2>
                            <p id="loan-purpose" className="text-gray-700 mt-2">{activeLoanDetails.purpose}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <div className="bg-white/60 p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <span className={`text-xs font-bold ${colors.text} uppercase tracking-wide`}>Security</span>
                                    <div id="loan-security" className="font-semibold text-gray-900">{activeLoanDetails.security}</div>
                                </div>
                                <div className="bg-white/60 p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <span className={`text-xs font-bold ${colors.text} uppercase tracking-wide`}>Term</span>
                                    <div id="loan-term" className="font-semibold text-gray-900">{activeLoanDetails.term}</div>
                                </div>
                                <div className="bg-white/60 p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <span className={`text-xs font-bold ${colors.text} uppercase tracking-wide`}>Rates</span>
                                    <div id="loan-rate" className="font-semibold text-gray-900">{activeLoanDetails.rate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                    
                    <div className="lg:col-span-5 p-6 md:p-8 bg-white">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-lg">Application Process</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Step-by-Step</span>
                        </div>
                        
                        <div id="process-timeline" className="space-y-8 relative">
                            {renderProcessTimeline(activeLoanDetails.process)}
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-6 md:p-8 bg-gray-50">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 text-lg">Required Documents</h3>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Essentials</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Review the mandatory documents required for funding this loan type.</p>

                        <div id="documents-grid" className="grid sm:grid-cols-2 gap-4">
                            {activeLoanDetails.documents.map(renderDocumentCard)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LoanExplorer

