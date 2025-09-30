import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ui/ContactForm';
import accountClientIcon from '@/assets/account-client.svg';

const ContactSection = () => {
  return (
    <footer id="kontakt" className="flex w-full max-w-[1520px] flex-col items-center bg-[#4D4D4D] mt-[316px] pt-20 pb-[33px] px-20 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5 scroll-mt-24">
      <div className="flex w-[1200px] max-w-full flex-col items-stretch">
        <div className="flex gap-[40px_77px] flex-wrap max-md:max-w-full">
          <ContactForm />
          
          <div className="min-w-60 w-[262px] pt-10">
            <div className="w-full text-lg text-white font-normal leading-none">
              <div className="flex w-full items-center gap-6 text-xl text-[#66BC98] font-bold leading-[1.2]">
                <img
                  src={accountClientIcon}
                  alt="Customer service"
                  className="w-[54.757px] h-[60px] shrink-0 my-auto"
                  style={{ aspectRatio: '54.76/60.00' }}
                />
                <div className="text-zielony font-roboto-condensed text-[20px] font-bold leading-6 self-stretch my-auto">
                  Obsługa Klienta
                </div>
              </div>
              <div className="flex w-full items-center gap-[30px] mt-2 px-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/4ffd56c63efa1337d242ba3e0b7eae6975e73353?placeholderIfAbsent=true"
                  alt="Phone"
                  className="aspect-[0.93] object-contain w-[37px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
                />
                <div className="text-white self-stretch my-auto">
                  +48 792 003 967
                </div>
              </div>
              <div className="flex w-full items-center gap-[30px] mt-2 px-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/9d324448853a920f94719579e91e0ae8007e0be8?placeholderIfAbsent=true"
                  alt="Phone"
                  className="aspect-[0.93] object-contain w-[37px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
                />
                <div className="text-white self-stretch my-auto">
                  +48 736 359 272
                </div>
              </div>
              <div className="flex w-full items-center gap-[30px] whitespace-nowrap mt-2 px-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/aa3435c5b8c0f2a905f217c9789e73340e929a27?placeholderIfAbsent=true"
                  alt="Email"
                  className="aspect-[0.93] object-contain w-[37px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
                />
                <div className="text-white self-stretch my-auto">
                  kontakt@cargoseller.pl
                </div>
              </div>
            </div>
            <div className="w-full mt-10">
              <div className="flex w-full items-center gap-6 text-xl text-[#66BC98] font-bold leading-[1.2]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/6f7d3686a43e9d0627be3cb78db65263afcf8d1f?placeholderIfAbsent=true"
                  alt="Technical support"
                  className="aspect-[0.92] object-contain w-[55px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
                />
                <div className="text-zielony font-roboto-condensed text-[20px] font-bold leading-6 self-stretch my-auto">
                  Wsparcie techniczne
                </div>
              </div>
              <div className="flex w-full items-center gap-[30px] text-lg text-white font-normal whitespace-nowrap leading-none mt-2 px-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/573edd57d2ef8bb863fa8f396a662fc36f23f6ed?placeholderIfAbsent=true"
                  alt="Email"
                  className="aspect-[0.93] object-contain w-[37px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
                />
                <div className="text-white self-stretch my-auto">
                  support@cargoseller.pl
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="opacity-50 border shrink-0 h-px bg-[#66BC98] mt-[58px] border-[rgba(102,188,152,1)] border-solid max-md:max-w-full max-md:mt-10" />
        
        <div className="flex items-center gap-3 flex-wrap mt-[41px] max-md:max-w-full max-md:mt-10">
          <div className="self-stretch flex min-h-[47px] items-center gap-[5px] text-[26px] text-white font-bold uppercase w-[183px] my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/f4d1657f756163aa1f4d9f16efed3ebac187a116?placeholderIfAbsent=true"
              alt="CARGOseller logo"
              className="aspect-[1] object-contain w-[47px] self-stretch shrink-0 my-auto rounded-lg"
            />
            <div className="self-stretch w-[115px] my-auto">
              <span style={{fontFamily: 'Barlow Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: '#FFF', fontSize: '26px', fontWeight: '700', textTransform: 'uppercase'}}>
                cargo
              </span>
              <span className="text-zielony font-barlow-condensed text-[26px] font-bold lowercase">
                seller
              </span>
            </div>
          </div>
          <div className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch w-[821px] my-auto pl-5 max-md:max-w-full">
            Cyfrowe narzędzia i integracje z giełdami do Twojej
            dyspozycji.Wykorzystaj je, aby sprzedawać ładunki spot szybciej,
            wygodniej, skuteczniej.
          </div>
        </div>
        
        <div className="flex w-[1149px] max-w-full items-stretch gap-5 text-base text-white font-normal flex-wrap justify-between mt-[47px] max-md:mt-10">
          <div className="text-white opacity-50">
            Copyright © 2025 cargoseller.pl
          </div>
          <div className="flex items-stretch gap-[40px_80px] max-md:max-w-full">
            <Link to="/polityka-prywatnosci" className="text-white opacity-50 basis-auto hover:opacity-100 transition-opacity">
              Polityka prywatności i cookies
            </Link>
            <div className="text-white opacity-50 basis-auto">
              CS SOFT, Szydłowo 189, 64-930 Szydłowo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
