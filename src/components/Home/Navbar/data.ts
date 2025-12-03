import type {ChartData, ChartOptions} from 'chart.js';

interface LoanProcessStep {
    title: string;
    desc: string;
}

interface LoanDocument {
    category: string;
    title: string;
    detail: string;
}

export interface LoanTypeEntry {
    title: string;
    icon: string;
    purpose: string;
    security: string;
    term: string;
    rate: string;
    chartData: number[]; 
    process: LoanProcessStep[];
    documents: LoanDocument[];
}

export interface LoanDataMap {
    personal: LoanTypeEntry;
    mortgage: LoanTypeEntry;
    auto: LoanTypeEntry;
    [key: string]: LoanTypeEntry;
}



export const loanData: LoanDataMap = {
    personal: {
        title: "Personal Loans",
        icon: "👤",
        purpose: "Debt consolidation, medical bills, education, weddings, or large purchases.",
        security: "Unsecured (Based on Credit Score)",
        term: "1 to 7 Years",
        rate: "Higher (No Collateral)",
        chartData: [2, 1, 5, 0],
        process: [
            { title: "Online Prequalification", desc: "Submit basic info (amount, purpose, income). Involves a 'soft' credit check (no score impact)." },
            { title: "Formal Application", desc: "Complete full application and provide consent for a 'hard' credit check." },
            { title: "Document Submission", desc: "Upload identity and income verification documents." },
            { title: "Underwriting", desc: "Team reviews credit history, Debt-to-Income (DTI) ratio, and docs." },
            { title: "Approval & Funding", desc: "Sign agreement. Funds deposited in 1-3 business days." }
        ],
        documents: [
            { category: "Identity", title: "Govt. ID", detail: "Passport, Driver's License, or National ID. Must be current." },
            { category: "Address", title: "Proof of Residency", detail: "Utility bill, lease agreement, or bank statement (within 90 days)." },
            { category: "Income", title: "Pay Stubs", detail: "Latest 2-3 months of pay stubs (W-2 employees)." },
            { category: "Income", title: "Bank Statements", detail: "Latest 3 months of primary banking statements showing deposits." },
            { category: "Income", title: "Tax Returns", detail: "Prior 2 years of federal returns (1040/1099) for self-employed." },
            { category: "Credit", title: "Consent Form", detail: "Signed form allowing Trust Bank to pull credit report." }
        ]
    },
    mortgage: {
        title: "Mortgage Loans",
        icon: "🏠",
        purpose: "Financing the purchase of residential or commercial property.",
        security: "Secured (Property Collateral)",
        term: "15 to 30 Years",
        rate: "Lowest Available",
        chartData: [5, 5, 1, 5], // Term, Docs, Speed, Collateral
        process: [
            { title: "Pre-Approval", desc: "Submit initial docs for preliminary limit. Essential for house hunting." },
            { title: "Property Selection", desc: "Find a house and sign Purchase and Sale Agreement." },
            { title: "Formal Application", desc: "Submit final application, property details. Pay appraisal/credit fees." },
            { title: "Appraisal & Inspection", desc: "Bank orders appraisal. Borrower conducts inspection." },
            { title: "Underwriting", desc: "Meticulous review of finances, title, and appraisal." },
            { title: "Closing", desc: "Sign final docs. Funds transferred. Ownership transferred." }
        ],
        documents: [
            { category: "Identity", title: "Govt. ID", detail: "Current ID for all applicants." },
            { category: "Property", title: "Sales Contract", detail: "Signed Purchase and Sale Agreement." },
            { category: "Income", title: "W-2 Forms", detail: "Last 2 years of W-2 forms." },
            { category: "Income", title: "Pay Stubs", detail: "Last 30 days of pay stubs." },
            { category: "Income", title: "Tax Returns", detail: "Last 2 years of complete federal tax returns." },
            { category: "Asset", title: "Asset Statements", detail: "Last 2 months of bank/investment statements for down payment." },
            { category: "Credit", title: "Explanations", detail: "Written letters explaining any credit anomalies or gaps." }
        ]
    },
    auto: {
        title: "Auto Loans",
        icon: "🚗",
        purpose: "Purchasing a new or used car, truck, or vehicle.",
        security: "Secured (Vehicle Lien)",
        term: "3 to 6 Years",
        rate: "Competitive (Medium)",
        chartData: [3, 2, 4, 3], // Term, Docs, Speed, Collateral
        process: [
            { title: "Pre-Approval", desc: "Recommended: Apply first to understand budget/rate." },
            { title: "Formal Application", desc: "Detailing loan amount and repayment term." },
            { title: "Vehicle Specification", desc: "Provide Make, Model, Year, VIN, Price." },
            { title: "Final Docs", desc: "Submit outstanding income docs and proof of insurance." },
            { title: "Funding", desc: "Funds transferred to seller. Bank listed as lienholder." }
        ],
        documents: [
            { category: "Identity", title: "Govt. ID", detail: "Current and valid ID." },
            { category: "Income", title: "Proof of Income", detail: "Last 2 pay stubs or latest tax return." },
            { category: "Vehicle", title: "Purchase Agreement", detail: "Signed Bill of Sale from dealer/seller." },
            { category: "Vehicle", title: "Vehicle Info", detail: "VIN, Odometer reading, Title status." },
            { category: "Insurance", title: "Insurance Binder", detail: "Comprehensive/Collision proof listing Trust Bank as loss payee." }
        ]
    }
};

export const radarData: ChartData<'radar'> = {
    labels: ['Term Length', 'Doc Intensity', 'Processing Speed', 'Collateral Req'],
    datasets: [
        {
            label: 'Personal',
            data: loanData.personal.chartData,
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.2)', 
            borderColor: 'rgb(59, 130, 246)',
            pointBackgroundColor: 'rgb(59, 130, 246)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(59, 130, 246)'
        },
        {
            label: 'Mortgage',
            data: loanData.mortgage.chartData,
            fill: true,
            backgroundColor: 'rgba(147, 51, 234, 0.2)', // Purple
            borderColor: 'rgb(147, 51, 234)',
            pointBackgroundColor: 'rgb(147, 51, 234)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(147, 51, 234)'
        },
        {
            label: 'Auto',
            data: loanData.auto.chartData,
            fill: true,
            backgroundColor: 'rgba(249, 115, 22, 0.2)', // Orange
            borderColor: 'rgb(249, 115, 22)',
            pointBackgroundColor: 'rgb(249, 115, 22)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(249, 115, 22)'
        }
    ]
};

export const options: ChartOptions<'radar'> = {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
        }
    };

export const NavbarMenu = [
 {
  id: 1,
  title: 'Open Account',
  link: '/accountOpeningGuide'
 },
 {
  id: 2,
  title: 'Services',
  link: '/services'
 },
 {
  id: 3,
  title: 'Loans and Mortgages',
  link: '/loans'
 },
 {
  id: 4,
  title: 'Investing & Savings',
  link: '/investing'
 },
 {
  id: 5,
  title: 'About Us',
  link: '#aboutUs'
 }
]