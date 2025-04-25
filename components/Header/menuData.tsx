import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    path: "/services",
    submenu: [
      {
        id: 3.1,
        title: "Business Take-off",
        newTab: false,
        path: "/services#business-take-off",
        description: "Launch your business the right way",
      },
      {
        id: 3.2,
        title: "Catch-up Bookkeeping & Record Clean-up",
        newTab: false,
        path: "/services#catch-up-bookkeeping-record-clean-up",
        description: "Behind on books? We've got your back",
      },
      {
        id: 3.3,
        title: "Tax Filing, Compliance & Litigation Support",
        newTab: false,
        path: "/services#tax-filing-compliance-litigation-support",
        description: "Your taxes, handled",
      },
      {
        id: 3.4,
        title: "Smart Bookkeeping",
        newTab: false,
        path: "/services#smart-bookkeeping",
        description: "Books that think like a CFO",
      },
      {
        id: 3.5,
        title: "Forecasting & Budgetary Control",
        newTab: false,
        path: "/services#forecasting-budgetary-control",
        description: "See the future, plan with precision",
      },
      {
        id: 3.6,
        title: "Accounts Payable / Receivable Assistance",
        newTab: false,
        path: "/services#accounts-payable-receivable-assistance",
        description: "Cash flow clarity, without the clutter",
      },
    ],
  },
  {
    id: 4,
    title: "Pricing",
    newTab: false,
    path: "/#pricing",
  },
  {
    id: 5,
    title: "Testimonials",
    newTab: false,
    path: "/#testimonials",
  },
];

export default menuData;