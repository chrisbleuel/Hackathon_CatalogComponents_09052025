import React from 'react';

const benefits = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/df11cdda489c879d8143dcf3057b6f9bf0893010?placeholderIfAbsent=true",
    text: "Premium frame brands"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/a18793c98eb63158562a2357d4d99ecf6a6b016f?placeholderIfAbsent=true",
    text: "Partners give one-year free warranty"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/fdaf6a173d839c6875b2223928b71545666b5dd4?placeholderIfAbsent=true",
    text: "Free shipping"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/3b4a46d4141480072de7075f25c712ddbf4e1630?placeholderIfAbsent=true",
    text: "Free returns"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/18220e938f8a1d400b0bb83d06658470595d5482?placeholderIfAbsent=true",
    text: "Free services instore"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/473d424b1c61442992c0c3820764778e/52006c0cccc620dadc42b5b9d00d5712d9138210?placeholderIfAbsent=true",
    text: "Free case and cleaning cloth"
  }
];

export const Benefits = () => {
  return (
    <div className="flex w-full gap-8 text-base text-[#32373E] font-normal text-center tracking-[0.08px] justify-center flex-wrap px-6 py-16">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex min-w-[100px] flex-col items-stretch leading-6 flex-1 shrink basis-[0%] max-w-[140px] p-2 rounded-[56px]"
        >
          <img
            src={benefit.icon}
            className="aspect-[1] object-contain w-12 self-center"
            alt={benefit.text}
          />
          <div className="text-[#32373E] mt-3">
            {benefit.text}
          </div>
        </div>
      ))}
    </div>
  );
};
