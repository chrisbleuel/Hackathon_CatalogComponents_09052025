
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const footerSections = [
  "Browse shop",
  "Authorised ZEISS retail partners",
  "ZEISS premium lenses",
  "FAQs",
  "Help & contact",
  "About"
];

export const Footer = () => {
  return (
    <div className="w-full">
      <Accordion.Root type="single" collapsible className="w-full">
        {footerSections.map((section, index) => (
          <Accordion.Item key={index} value={`item-${index}`} className="flex w-full text-base text-[#32373E] font-bold tracking-[0.08px] bg-[#F2F5F8]">
            <Accordion.Trigger className="w-full text-left">
              <div className="items-center flex min-w-60 w-full gap-6 flex-1 shrink basis-[0%] px-5 py-8">
                <div className="text-[#32373E] self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto text-left">
                  {section}
                </div>
              </div>
            </Accordion.Trigger>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <div className="flex w-full text-base text-[#32373E] font-light tracking-[0.08px] bg-[#F2F5F8]">
        <div className="items-center flex min-w-60 w-full gap-6 flex-1 shrink basis-[0%] px-5 py-8">
          <div className="text-[#32373E] self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto text-left">
            @2024 – 2025 ZEISS. All rights reserved.
          </div>
        </div>
      </div>

      <div className="items-center shadow-[0px_2px_8px_0px_rgba(25,25,25,0.04)] flex w-full text-base text-white font-bold tracking-[0.08px] px-5 bg-[#32373E] py-8">
        <div className="text-white self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto text-left">
          Carl Zeiss India (Bangalore) Pvt. Ltd
        </div>
      </div>

      <div className="w-full">
        <div className="flex min-h-px w-full bg-[#E6EBF0]" />
      </div>

      <div className="items-stretch shadow-[0px_2px_8px_0px_rgba(25,25,25,0.04)] flex w-full text-base text-white font-bold tracking-[0.08px] bg-[#32373E]">
        <Accordion.Root type="single" collapsible className="w-full">
          <Accordion.Item value="legal" className="w-full">
            <Accordion.Trigger className="w-full text-left">
              <div className="items-center flex w-full gap-6 flex-wrap px-5 bg-[#32373E] py-8">
                <div className="text-white self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto text-left">
                  Legal Information
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/dc38d413d4ab35404936d91c980e34d513dfc47d?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto" alt="Expand" />
              </div>
            </Accordion.Trigger>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};
