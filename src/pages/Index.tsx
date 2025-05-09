import React from 'react';
import { Header } from '@/components/shop/Header';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { Benefits } from '@/components/shop/Benefits';
import { Footer } from '@/components/shop/Footer';
const Index = () => {
  return <div className="flex items-center">
      <div className="self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] bg-white my-auto">
        <Header />
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-col overflow-hidden relative z-0 h-[426px] w-full flex-wrap">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/66222e0108bdb0df614de468215b822f8018264d?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Hero background" />
            
            {/* Decorative rotated elements */}
            {[1, 2, 3].map((_, index) => <div key={index} className="relative min-w-60 flex-1 shrink basis-[0%]">
                <div className="flex w-full flex-col overflow-hidden items-stretch justify-center h-[426px]">
                  <div className="rotate-[-0.523598777524314rad] flex min-h-[213px] w-full" />
                </div>
                <div className="flex min-h-[213px] w-full" />
              </div>)}

            {/* Hero Content */}
            <div className="absolute z-0 flex w-full flex-col items-stretch text-white justify-center px-[120px] py-8 bottom-0 inset-x-0">
              <h1 className="text-white text-[40px] font-[750] leading-[1.1] tracking-[0.6px]">
                Check your fit.
              </h1>
              <p className="text-white text-2xl font-light leading-none tracking-[0.24px]">
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
    </div>;
};
export default Index;