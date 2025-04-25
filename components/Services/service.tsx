"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Utility to create section IDs for anchor linking
const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove special chars
    .replace(/\s+/g, "-"); // Replace spaces with hyphens

const services = [
  {
    title: "Business Take-off",
    description: "Launch your business the right way.",
    content:
      "From choosing the ideal business structure to handling government registrations, we help you hit the ground running. Our tech-enabled incorporation services simplify the process—PAN, TAN, GST, and everything in between—so you can focus on building your dream. Think fast, think compliant, think future-ready.",
    imageLight: "/images/about/about-light-01.png",
    imageDark: "/images/about/about-dark-01.png",
  },
  {
    title: "Catch-up Bookkeeping & Record Clean-up",
    description: "Behind on books? We've got your back.",
    content:
      "Whether you're months or years behind, our clean-up crew ensures your financial records are up-to-date, audit-ready, and 100% compliant. We dig into the details, fix inconsistencies, and streamline your accounting—so you're never flying blind again. Let's bring order to the chaos.",
    imageLight: "/images/hero/hero-light.png",
    imageDark: "/images/about/about-dark-01.png",
  },
  {
    title: "Tax Filing, Compliance & Litigation Support",
    description: "Your taxes, handled.",
    content:
      "From routine tax filings to complex litigations, we take care of everything accurately, on time, and fully compliant. Our experts navigate the ever-changing tax landscape so you don't have to. Stay ahead of deadlines, not behind bars.",
    imageLight: "/images/services/tax-filling.png",
    imageDark: "/images/about/about-dark-01.png",
  },
  {
    title: "Smart Bookkeeping",
    description: "Books that think like a CFO.",
    content:
      "We combine automation with expert review to deliver real-time, intelligent bookkeeping that gives you visibility and control. No delays. No surprises. Just crystal-clear financials at your fingertips. Because modern businesses deserve modern books.",
    imageLight: "/images/about/about-light-03.png",
    imageDark: "/images/about/about-dark-01.png",
  },
  {
    title: "Forecasting & Budgetary Control",
    description: "See the future, plan with precision.",
    content:
      "We build dynamic financial forecasts tailored to your business goals. From scenario modeling to budget tracking, we help you make informed decisions and stay agile in a fast-moving world. Data-driven decisions start here.",
    imageLight: "/images/about/about-light-01.png",
    imageDark: "/images/about/about-dark-01.png",
  },
  {
    title: "Accounts Payable / Receivable Assistance",
    description: "Cash flow clarity, without the clutter.",
    content:
      "We help manage your payables and receivables to optimize working capital, reduce delays, and eliminate errors. From vendor reconciliations to automated follow-ups, our system keeps your cash flowing in the right direction.",
    imageLight: "/images/about/about-light-01.png",
    imageDark: "/images/about/about-dark-01.png",
  },
  {
    title: "Accounting Digital Transformation",
    description: "Modernize your finance function, end-to-end.",
    content:
      "We don't just do accounting—we reinvent it. Using cutting-edge tools and machine learning, we automate your finance workflows, eliminate manual errors, and give you real-time insights with zero lag. From data entry to dashboard reporting, your finance ops evolve into a smart, scalable, future-ready engine.",
    imageLight: "/images/about/about-light-01.png",
    imageDark: "/images/about/about-dark-01.png",
  },
];

const Service = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small timeout to ensure DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [pathname, searchParams]);

  return (
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 pt-[200px]">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-20">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const sectionId = slugify(service.title);

          return (
            <div
              key={index}
              id={sectionId}
              className={`flex flex-col-reverse items-center gap-8 lg:gap-32.5 md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } animate-fadeIn`} // Added CSS animation class
            >
              <div className="md:w-1/2">
                <h4 className="font-medium uppercase text-black dark:text-white">
                  {service.title}
                </h4>
                <p className="mt-2 text-lg text-black dark:text-white font-semibold">
                  {service.description}
                </p>
                <p className="mt-4 text-black dark:text-white">
                  {service.content}
                </p>
              </div>

              <div className="relative hidden md:block md:w-1/2 aspect-[588/526.5] overflow-hidden rounded-2xl">
  <Image
    src={service.imageLight}
    alt={service.title}
    fill
    className="dark:hidden object-contain"
  />
</div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;