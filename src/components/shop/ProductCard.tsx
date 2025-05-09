import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
interface ProductCardProps {
  model: string;
  price: string;
  images: string[];
  brandLogo: string;
  sizes: string[];
  colors: Array<{
    name: string;
    color: string;
  }>;
  isWishlisted?: boolean;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  model,
  price,
  images,
  brandLogo,
  sizes,
  colors,
  isWishlisted = false
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(0);
  const isMobile = useIsMobile();
  return <div className="min-w-[280px] sm:min-w-[300px] max-w-[635px] self-stretch flex-1 shrink basis-[0%] bg-white pb-4 px-3 sm:px-6">
      <div className="flex w-full items-center gap-2 pr-2 pt-6 pb-2">
        <img src={isWishlisted ? "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9458ddf2109a56aee60e1afd9c384141ccee629f?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/9ff352f1e2557143aa141430e8b0280f80a962df?placeholderIfAbsent=true"} className="aspect-[1] object-contain w-7 sm:w-8 self-stretch my-auto cursor-pointer" alt="Wishlist" />
      </div>
      
      <div className="w-full pb-2">
        <div className="flex flex-col relative min-h-[260px] sm:min-h-[342px] w-full overflow-hidden">
          <img src={images[currentImageIndex]} alt={`Product ${model}`} className="absolute h-full w-full inset-0 object-contain" />
          <div className="relative rotate-[0.27166683933431357rad] flex min-h-[260px] sm:min-h-[342px] w-full px-0" />
        </div>
        
        <div className="w-full mt-2 px-6 sm:px-16">
          <div className="flex w-full items-stretch gap-[5px] justify-center">
            {images.map((_, index) => <div key={index} className={`flex w-[80px] sm:w-[106px] shrink-0 h-1 ${index === currentImageIndex ? 'bg-[#202327]' : 'bg-[#E6EBF0]'} cursor-pointer`} onClick={() => setCurrentImageIndex(index)} />)}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center overflow-hidden pr-[60px] sm:pr-[120px] pt-2">
        <div className="flex flex-col self-stretch relative aspect-[4] min-w-[240px] sm:min-w-60 w-[336px] overflow-hidden flex-1 shrink basis-[0%] my-auto">
          <img src={brandLogo} className="absolute h-full w-full object-cover inset-0" alt="Brand" />
          <div className="relative rotate-[-0.25268024830141994rad] flex min-h-[60px] sm:min-h-[84px] w-full" />
        </div>
      </div>

      <div className="flex w-full gap-4 whitespace-nowrap flex-wrap">
        <div className="flex min-h-5 gap-1 text-sm text-[#606A76] font-normal tracking-[0.07px] leading-none">
          <div>Model:</div>
          <div>{model}</div>
        </div>
        {sizes.length > 0 && <div className="flex gap-2 text-xl text-white font-bold text-center tracking-[0.1px] justify-center flex-wrap">
            {sizes.map(size => <div key={size} className="flex min-h-[19px] gap-1.5 leading-[1.4] w-[19px] mb-1">
                <div className="flex min-h-[19px] w-[78px] gap-4 rounded-lg">
                  <div className="relative flex w-[78px] items-start gap-2.5">
                    <div className="bg-[#606A76] z-0 flex w-[19px] shrink-0 h-[19px] fill-[#606A76] my-auto rounded-[50%]" />
                    <div className="absolute z-0 -translate-x-2/4 translate-y-[0%] w-[19px] h-[19px] left-2/4 bottom-0">
                      {size}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>}
      </div>

      <div className="flex w-full overflow-x-auto">
        <div className="flex min-w-[240px] sm:min-w-60 w-full gap-2 flex-1 shrink basis-[0%] pr-2 py-6">
          <div className="flex gap-4 overflow-hidden">
            {colors.map((color, index) => <div key={index} className="w-10 sm:w-12 flex-shrink-0" onClick={() => setSelectedColor(index)}>
                <div className={`justify-center items-center border-b-[color:var(--Global-Border-subtle,#C2CDD6)] flex min-h-11 w-full gap-2 pb-1 px-2 sm:px-3 border-b-2 border-solid ${selectedColor === index ? 'border-[#202327]' : ''}`}>
                  <div className="self-stretch flex min-h-6 w-6 h-6 my-auto rounded-[19px] bg-[#8E9196]" style={{
                backgroundColor: color.color
              }} />
                </div>
                <div className="text-[#606A76] self-stretch flex-1 shrink basis-[0%] w-full gap-2.5 text-[9px] sm:text-[10px] font-normal text-center tracking-[0.05px] leading-[14px] pt-1 px-1">
                  {color.name}
                </div>
              </div>)}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-stretch">
        <div className="w-full text-lg sm:text-xl text-[#32373E] font-light whitespace-nowrap text-right tracking-[0.1px] leading-[1.2]">
          <div className="flex w-full gap-2 justify-end">
            <div className="flex items-center gap-1">
              <div className="text-[#32373E] self-stretch my-auto">₹</div>
              <div className="text-[#32373E] self-stretch my-auto">{price}</div>
            </div>
          </div>
        </div>
        <div className="text-[#32373E] gap-1 text-[10px] sm:text-xs font-normal tracking-[0.06px] bg-[#E6EBF0] mt-1 rounded-[3px] p-2">
          Free shipping and returns
        </div>
      </div>
    </div>;
};