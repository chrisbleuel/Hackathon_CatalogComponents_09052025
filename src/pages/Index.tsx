
import React from 'react';
import { Header } from '@/components/shop/Header';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { Benefits } from '@/components/shop/Benefits';
import { Footer } from '@/components/shop/Footer';

const Index = () => {
  return (
    <div className="flex items-center">
      <div className="self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] bg-white my-auto">
        <Header />
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-col overflow-hidden relative z-0 h-[426px] w-full flex-wrap">
            <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/66222e0108bdb0df614de468215b822f8018264d?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Hero background" />
            
            {/* Decorative rotated elements */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="relative min-w-60 flex-1 shrink basis-[0%]">
                <div className="flex w-full flex-col overflow-hidden items-stretch justify-center h-[426px]">
                  <div className="rotate-[-0.523598777524314rad] flex min-h-[213px] w-full" />
                </div>
                <div className="flex min-h-[213px] w-full" />
              </div>
            ))}

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
        <div className="flex flex-col self-stretch relative min-h-[608px] min-w-[400px] max-w-[635px] text-white flex-1 shrink basis-12 my-auto">
          <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ee4670aabca2424af1540413d6d39e915bea7518?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Quiz background" />
          <div className="relative w-full flex-1 px-8 py-12">
            <h2 className="text-[32px] font-[750] leading-none tracking-[0.48px]">
              Too many frames to choose from?
            </h2>
            <p className="text-2xl font-light leading-[30px] tracking-[0.24px] mt-2">
              Take a quick quiz to find exactly what you're looking for.
            </p>
            <div className="w-full text-base text-white font-medium tracking-[0.32px] mt-2 pt-4">
              <button className="self-stretch border border-[color:var(--Global-Border-subtlest,#E6EBF0)] min-h-12 w-full gap-2 px-8 py-3 rounded-[3px] border-solid">
                Take the quiz
              </button>
            </div>
          </div>
        </div>

        {/* ZEISS Quality Banner */}
        <div className="flex flex-col self-stretch relative min-h-[608px] min-w-[400px] max-w-[635px] text-white flex-1 shrink basis-12 my-auto">
          <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/33ce3515a31861dcc641d092501eeebc32369693?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="ZEISS quality" />
          <div className="relative w-full flex-1 px-8 py-12">
            <h2 className="text-[32px] font-[750] leading-none tracking-[0.48px]">
              ZEISS quality in every pair.
            </h2>
            <p className="text-2xl font-light leading-[30px] tracking-[0.24px] mt-2">
              We offer only our most premium ZEISS lenses – just for you.
            </p>
          </div>
        </div>

        <Benefits />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
