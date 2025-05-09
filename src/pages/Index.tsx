
import React from 'react';
import { Header } from '@/components/shop/Header';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { Benefits } from '@/components/shop/Benefits';
import { Footer } from '@/components/shop/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center flex-col">
      <div className="self-stretch min-w-full w-full overflow-hidden flex-1 shrink basis-[0%] bg-white my-auto">
        <Header />
        
        {/* Hero Section - Responsive */}
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-col overflow-hidden relative z-0 h-[300px] md:h-[426px] w-full flex-wrap">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/66222e0108bdb0df614de468215b822f8018264d?placeholderIfAbsent=true" 
              className="absolute h-full w-full object-cover inset-0" 
              alt="Hero background" 
            />
            
            {/* Decorative rotated elements */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="relative min-w-60 flex-1 shrink basis-[0%]">
                <div className="flex w-full flex-col overflow-hidden items-stretch justify-center h-[300px] md:h-[426px]">
                  <div className="rotate-[-0.523598777524314rad] flex min-h-[150px] md:min-h-[213px] w-full" />
                </div>
                <div className="flex min-h-[150px] md:min-h-[213px] w-full" />
              </div>
            ))}

            {/* Hero Content - Responsive */}
            <div className="absolute z-0 flex w-full flex-col items-stretch text-white justify-center px-6 md:px-[120px] py-4 md:py-8 bottom-0 inset-x-0">
              <h1 className="text-white text-[28px] md:text-[40px] font-[750] leading-[1.1] tracking-[0.6px]">
                Check your fit.
              </h1>
              <p className="text-white text-lg md:text-2xl font-light leading-none tracking-[0.24px]">
                See how our frames look with our virtual try-on.
              </p>
            </div>
          </div>
        </div>

        <ProductGrid />

        {/* Quiz Banner */}
        

        {/* ZEISS Quality Banner */}
        

        <Benefits />
        <Footer />
      </div>
    </div>
  );
};
export default Index;
