
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';

export const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="justify-center items-stretch flex w-full flex-col bg-white">
      <div className="w-full px-4 md:px-8 py-4 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e6aab7b869ff5c4e836743b86c1581ba00f6eb48?placeholderIfAbsent=true"
            className="aspect-[2.45] object-contain w-[98px] md:w-[120px]"
            alt="Logo"
          />
        </div>
        
        {isMobile ? (
          <button className="p-2">
            <Menu size={24} />
          </button>
        ) : (
          <div className="flex gap-6 items-center">
            <div className="text-base text-[#202327] font-medium tracking-[0.32px] leading-[1.2]">
              Virtual Try-On
            </div>
            <div className="text-base text-[#202327] font-medium tracking-[0.32px] leading-[1.2]">
              Find a store
            </div>
            <div className="text-base text-[#202327] font-medium tracking-[0.32px] leading-[1.2]">
              Help
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ceea875c1943b6a38ffea55414e2606848681de7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5"
              alt="User"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/4c80b407ebdfb5c4cd47b2d45d3a1b993f3d6a5c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5"
              alt="Search"
            />
          </div>
        )}
      </div>
    </div>
  );
};
