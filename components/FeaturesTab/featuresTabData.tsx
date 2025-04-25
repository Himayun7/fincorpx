import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Connect Your Business",
    desc1: `Securely link your accounting tools, bank accounts, and platforms like Tally, zoho, or xero. This allows FincorpX to fetch and sync financial data in real-time without manual uploads.`,
    desc2: `Whether you're using multiple payment systems or accounting software, FincorpX integrates them all into one powerful dashboard. Our encrypted API connections ensure your data remains safe while giving you complete control over your financial ecosystem.`,
    image: "/images/about/about-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Automate Your Books",
    desc1: `Our intelligent bookkeeping engine processes your synced data and automatically classifies income, expenses, taxes, and receivables. It learns from your transactions and improves over time backed by human accountants who review and verify everything for compliance and accuracy.`,
    desc2: `Forget about tedious data entry or hunting down receipts. FincorpX’s smart engine does all the heavy lifting cleaning, categorizing, and reconciling your books so you can focus on scaling your business, not spreadsheets`,
    image: "/images/hero/hero-light.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Track & File Confidently",
    desc1: `Access a visual dashboard with real-time financial insights: cash flow, tax liability, pending invoices, and more. When it’s time to file GST or prepare for audits, your data is already organized and ready. Our team ensures timely filings, so you never miss a deadline or face penalties.`,
    desc2: `Your entire financial picture is now in your hands clean, up-to-date, and accessible anytime. Whether it's reviewing reports, filing taxes, or preparing for investors, FincorpX makes sure you're always a step ahead.`,
    image: "/images/about/about-light-03.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
