import React from 'react';
import { ProductCard } from './ProductCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Filter, Grid3X3 } from 'lucide-react';

export const ProductGrid = () => {
  const [activeFilters, setActiveFilters] = React.useState(['₹ 10000 – ₹ 15000', 'Men', 'Shape: Square', 'Colour: Black', 'Colour: Gunmetal']);
  const isMobile = useIsMobile();
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  return (
    <div className="w-full pt-6 md:pt-12 pb-6 md:pb-10 px-4 md:px-[120px]">
      <div className="w-full bg-white pt-4 pb-6 px-3 md:px-6">
        <div className="text-[#32373E] text-[24px] md:text-[32px] font-[750] leading-none tracking-[0.48px]">
          Browse our collection.
        </div>
        <div className="flex w-full items-center gap-2 text-sm text-[#606A76] font-normal tracking-[0.07px] leading-none flex-wrap mt-1">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/24419829f5ab3389e9a510dde81d6b582d6318a5?placeholderIfAbsent=true" 
            className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto" 
            alt="Info" 
          />
          <div className="text-[#606A76] self-stretch my-auto">
            Frames may not be available instore.
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-2">
        <div className="flex w-full gap-4 md:gap-[40px_100px] text-base text-[#0065D1] font-medium tracking-[0.32px] justify-between flex-wrap">
          <Popover>
            <PopoverTrigger asChild>
              <button className="justify-center items-center flex min-h-12 gap-2 whitespace-nowrap px-4 md:px-5 pt-3 pb-4 md:pb-8 rounded-[3px]">
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 md:w-96 p-4">
              <div className="space-y-4">
                <h4 className="font-medium">Filter Options</h4>
                <div className="space-y-2">
                  <div className="font-medium text-sm">Price</div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-2 py-1 text-xs border rounded">₹ 5000 – ₹ 10000</button>
                    <button className="px-2 py-1 text-xs border rounded bg-[#E6EBF0]">₹ 10000 – ₹ 15000</button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-sm">Gender</div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-2 py-1 text-xs border rounded bg-[#E6EBF0]">Men</button>
                    <button className="px-2 py-1 text-xs border rounded">Women</button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          
          <button className="justify-center items-center flex min-h-12 gap-2 px-4 md:px-5 pt-3 pb-4 md:pb-8 rounded-[3px]">
            <Grid3X3 size={20} />
            <span>Best Sellers</span>
          </button>
        </div>

        <div className="flex w-full flex-col items-stretch text-sm text-[#32373E] font-normal tracking-[0.07px] leading-none justify-center mt-1">
          <div className="flex w-full gap-2 flex-wrap pb-2 px-3 md:px-6">
            {activeFilters.map((filter, index) => (
              <div key={index} className="items-center flex min-h-7 gap-1 bg-[#E6EBF0] rounded-[3px] px-2 my-1">
                <div className="text-[#32373E]">{filter}</div>
                <button onClick={() => removeFilter(filter)}>
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/55f42ef91fd8e6ddfa6f720d63fc3bb07a8a9ab4?placeholderIfAbsent=true" 
                    className="aspect-[1] object-contain w-3" 
                    alt="Remove filter" 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center gap-4 md:gap-[40px_100px] text-xs text-[#606A76] font-normal tracking-[0.06px] justify-between flex-wrap px-3 md:px-6">
        <div className="text-[#606A76] self-stretch my-auto">
          54 Products
        </div>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/5b48c087f7284c86a1b684225ab9685f8dec3bfe?placeholderIfAbsent=true" 
          className="aspect-[1.5] object-contain w-[60px] md:w-[72px] self-stretch min-h-12 shrink-0 my-auto" 
          alt="Grid view" 
        />
      </div>

      <div className="flex w-full items-center gap-4 md:gap-8 justify-center flex-wrap">
        {/* Product cards would be mapped here */}
        <ProductCard model="2239" price="999,00" images={["https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9e4a0bef6beb44ab55f7145a13ae81035bfd788a?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/afec56e8f100fbe85c490fdf1a1fdd659e18cb59?placeholderIfAbsent=true"]} brandLogo="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/afec56e8f100fbe85c490fdf1a1fdd659e18cb59?placeholderIfAbsent=true" sizes={["S", "M", "L"]} colors={[{
        name: "Blue",
        color: "rgba(72,137,195,1)"
      }]} />
        <ProductCard model="2266" price="999,00" images={["https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d9f382b5af644bb9dbeab119c7b9066f637037b7?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d03571348bdb1f52653d242f8f23af138456c77a?placeholderIfAbsent=true"]} brandLogo="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/d03571348bdb1f52653d242f8f23af138456c77a?placeholderIfAbsent=true" sizes={["S", "M", "L"]} colors={[{
        name: "Grey",
        color: "#B4C0CA"
      }, {
        name: "White Gold",
        color: "#FFFFFF"
      }, {
        name: "White Gold",
        color: "#B4C0CA"
      }]} />
        <div className="flex flex-col self-stretch relative min-h-[608px] min-w-[400px] max-w-[635px] text-white flex-1 shrink basis-12 my-auto">
          <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/ee4670aabca2424af1540413d6d39e915bea7518?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Quiz banner" />
          <div className="relative w-full flex-1 px-8 py-12">
            
            
            <div className="w-full text-base text-white font-medium tracking-[0.32px] mt-2 pt-4">
              
            </div>
          </div>
        </div>
        <ProductCard model="2239" price="999,00" images={["https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9143bcb4b9dd1e46d682bef6d89369a9c57bf133?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e1b729c0e8fe7d7843f76b640273075554c73e33?placeholderIfAbsent=true"]} brandLogo="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/e1b729c0e8fe7d7843f76b640273075554c73e33?placeholderIfAbsent=true" sizes={[]} colors={[{
        name: "color name",
        color: "#B4C0CA"
      }]} />
        <ProductCard model="2266" price="999,00" images={["https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9655508ead5e5c21193e155745af06422cacd995?placeholderIfAbsent=true"]} brandLogo="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/afec56e8f100fbe85c490fdf1a1fdd659e18cb59?placeholderIfAbsent=true" sizes={["S", "M", "L"]} colors={[{
        name: "Grey",
        color: "#C2CDD6"
      }, {
        name: "White Gold",
        color: "#FFFFFF"
      }, {
        name: "Red",
        color: "#E71E1E"
      }]} />
        <div className="flex flex-col self-stretch relative min-h-[608px] min-w-[400px] max-w-[635px] text-white flex-1 shrink basis-12 my-auto">
          <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/33ce3515a31861dcc641d092501eeebc32369693?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="ZEISS quality" />
          <div className="relative w-full flex-1 py-12 px-[32px]">
            
            
          </div>
        </div>
        <ProductCard model="SC655A" price="999,00" images={["https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/fb987d38b26e2e215923209867e5917893f39ef0?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/50d9e141705950f0d857d27d415f4e04997a2fd4?placeholderIfAbsent=true"]} brandLogo="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/50d9e141705950f0d857d27d415f4e04997a2fd4?placeholderIfAbsent=true" sizes={[]} colors={[{
        name: "color name",
        color: "#B4C0CA"
      }, {
        name: "White Gold",
        color: "#B4C0CA"
      }, {
        name: "White Gold",
        color: "#B4C0CA"
      }]} />
        <ProductCard model="SC9016" price="999,00" images={["https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/89a4b4df4f6909437ce45eb9e313fcf14b2983b5?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/b185be22f84ac1c733e432db58c86b3b6fdf9518?placeholderIfAbsent=true"]} brandLogo="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/b185be22f84ac1c733e432db58c86b3b6fdf9518?placeholderIfAbsent=true" sizes={[]} colors={[{
        name: "color name",
        color: "#B4C0CA"
      }, {
        name: "White Gold",
        color: "#B4C0CA"
      }, {
        name: "White Gold",
        color: "#B4C0CA"
      }]} />
      </div>
    </div>
  );
};
