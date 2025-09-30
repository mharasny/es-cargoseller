import React from 'react';
import heroBackground from '@/assets/hero-background.png';
const HeroSection = () => {
  return <section className="w-full max-w-[1421px] mt-[131px] max-lg:mt-[180px] max-md:max-w-full max-md:mt-[200px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch bg-auto lg:bg-right bg-no-repeat min-h-[80vh] max-md:min-h-[50vh]" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="w-9/12 max-md:w-full max-md:ml-0 max-md:order-2">
          <div className="max-md:max-w-full max-md:mt-10 max-md:bg-[rgba(244,244,244,1)] max-md:p-6 max-md:rounded-t-3xl max-md:-mt-6">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[78%] max-md:w-full max-md:ml-0">
                <div className="mr-[-43px] grow font-semibold mt-12 max-md:max-w-full max-md:mt-0">
                  <h1 className="text-[#4d4d4d] font-barlow-condensed text-[64px] font-[600] leading-normal tracking-[1.28px] max-md:max-w-full max-md:text-[40px]">
                    Spot Freight <br />
                    Management System. <br />
                    <span className="font-barlow-condensed text-[64px] font-[600] leading-normal tracking-[1.28px]" style={{
                    color: '#66BC98'
                  }}>Nie TMS.</span>
                  </h1>
                  <p className="text-[#4D4D4D] font-barlow-condensed text-[42px] font-[600] leading-normal tracking-[1.26px] mt-6 max-md:max-w-full">
                    Integrator systemów do sprzedaży <br />
                    ładunków spotowych.
                  </p>
                  <a href="#funkcjonalnosci" className="flex h-[51px] px-8 py-4 flex-col justify-center items-center gap-12 text-white font-roboto-condensed text-lg font-normal leading-6 text-center bg-[#66BC98] mt-6 rounded-3xl hover:bg-[#5aa085] transition-colors w-[200px]">
                    Zobacz więcej
                  </a>
                </div>
              </div>
              <div className="w-[22%] ml-5 max-md:w-full max-md:ml-0">
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>;
};
export default HeroSection;