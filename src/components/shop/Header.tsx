import React from 'react';

export const Header = () => {
  return (
    <div className="justify-center items-stretch flex w-full flex-col bg-white">
      <div className="w-full">
        <div className="items-stretch flex w-full flex-col justify-center gap-4 bg-white py-6">
          <div className="items-center flex w-full gap-4 flex-wrap px-5">
            <div className="items-center self-stretch flex min-w-60 gap-4 flex-1 shrink basis-[0%] my-auto">
              <div className="self-stretch flex w-12 items-center justify-center my-auto">
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/2773ec51e942fc340be55a1bc6375f19e2ac9c9f?placeholderIfAbsent=true" className="aspect-[1] object-contain w-12 self-stretch my-auto" alt="ZEISS Logo" />
              </div>
            </div>
            <div className="items-center self-stretch flex gap-4 text-[8px] text-white font-normal whitespace-nowrap text-center tracking-[0.04px] leading-none my-auto">
              <div className="items-start self-stretch relative flex gap-2 w-6 my-auto p-0.5">
                <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/cdbd1c77c116aef56b1db1b0194d7dac19d8b28a?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 z-0 shrink-0 my-auto" alt="Cart" />
                <div className="text-white min-w-3 border border-[color:var(--Global-Border-inverse,#FFF)] absolute z-0 min-h-3 overflow-hidden w-3 h-3 bg-[#E71E1E] rounded-[100px] border-solid -right-1 -bottom-1">
                  2
                </div>
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/73bccee759cba3ccbd1601c99a1335389965c8a4?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" alt="Search" />
              <img src="https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/7b4cfa8de1a8ffd448b181eef940b1d7c849dfad?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
