import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
const footerSections = ["Browse shop", "Authorised ZEISS retail partners", "ZEISS premium lenses", "FAQs", "Help & contact", "About"];
export const Footer = () => {
  return <div className="w-full">
      <Accordion.Root type="single" collapsible className="w-full">
        {footerSections.map((section, index) => <Accordion.Item key={index} value={`item-${index}`} className="flex w-full text-base text-[#32373E] font-bold tracking-[0.08px] bg-[#F2F5F8]">
            <Accordion.Trigger className="w-full text-left">
              
            </Accordion.Trigger>
          </Accordion.Item>)}
      </Accordion.Root>

      <div className="flex w-full text-base text-[#32373E] font-light tracking-[0.08px] bg-[#F2F5F8]">
        
      </div>

      

      <div className="w-full">
        <div className="flex min-h-px w-full bg-[#E6EBF0]" />
      </div>

      <div className="items-stretch shadow-[0px_2px_8px_0px_rgba(25,25,25,0.04)] flex w-full text-base text-white font-bold tracking-[0.08px] bg-[#32373E]">
        <Accordion.Root type="single" collapsible className="w-full">
          
        </Accordion.Root>
      </div>
    </div>;
};