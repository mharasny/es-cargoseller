import React from 'react';

interface PricingCardProps {
  planName: string;
  price: string;
  usersIncluded: string;
  additionalUserPrice: string;
  features: string[];
  iconSrc: string;
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  price,
  usersIncluded,
  additionalUserPrice,
  features,
  iconSrc,
  isHighlighted = false
}) => {
  return (
    <div className="bg-[rgba(248,248,248,1)] shadow-[0px_0px_20px_rgba(0,0,0,0.12)] flex min-w-60 items-stretch gap-6 justify-center flex-1 shrink basis-[0%] p-6 rounded-2xl max-md:px-5">
      <div className="min-w-60 w-full flex-1 shrink basis-[0%]">
        <div className={`items-center bg-[#F8F8F8] flex w-full gap-9 text-[32px] ${isHighlighted ? 'text-[#66BC98]' : 'text-[#4D4D4D]'} font-semibold ${planName === 'Start' ? 'uppercase' : 'whitespace-nowrap'} tracking-[0.96px] px-3 py-4 border-b-[#66BC98] border-b border-solid`}>
          <div className={`${isHighlighted ? 'text-[#66BC98]' : 'text-[#4D4D4D]'} self-stretch flex-1 shrink basis-[0%] my-auto`}>
            {planName === 'Start' ? (
              <>
                <span style={{fontFamily: 'Barlow Condensed, -apple-system, Roboto, Helvetica, sans-serif'}}>
                  S
                </span>
                <span style={{fontFamily: 'Barlow Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(102,188,152,1)'}}>
                  tart
                </span>
              </>
            ) : (
              planName
            )}
          </div>
        </div>
        <div className="flex w-full flex-col text-[40px] text-[#4D4D4D] font-light text-center tracking-[0.8px] justify-center px-3 py-4">
          <div className="text-[#4D4D4D]">
            {price}
          </div>
        </div>
        <div className="bg-[rgba(248,248,248,1)] flex w-full items-center gap-4 text-lg text-[#4D4D4D] font-normal leading-none p-3">
          <div className="text-[#4D4D4D] self-stretch my-auto">
            <span style={{fontWeight: '700'}}>{usersIncluded.split(' ')[0]}</span> {usersIncluded.split(' ').slice(1).join(' ')}
          </div>
        </div>
        <div className="items-center bg-[#F8F8F8] flex w-full gap-4 text-lg text-[#4D4D4D] font-normal leading-6 p-3 border-b-[#66BC98] border-b border-solid">
          <div className="text-[#4D4D4D] self-stretch flex-1 shrink basis-[0%] my-auto">
            <span style={{fontWeight: '700'}}>{additionalUserPrice.split(' ')[0]} {additionalUserPrice.split(' ')[1]}</span> {additionalUserPrice.split(' ').slice(2).join(' ')}
          </div>
        </div>
        <div className="w-full max-w-[325px] py-6">
          {features.map((feature, index) => (
            <div key={index} className="flex w-full gap-3 mt-6">
              <div className="flex gap-4 w-6">
                <img
                  src={iconSrc}
                  alt=""
                  className="aspect-[1] object-contain w-6"
                />
              </div>
              <div className="text-[#4E4D4D] text-base font-normal leading-6 flex-1 shrink basis-[0%]">
                {feature}
              </div>
            </div>
          ))}
        </div>
        <a href="https://app.cargoseller.pl/register" className="bg-[rgba(235,235,235,1)] flex max-w-full w-[325px] flex-col text-lg text-[#4D4D4D] font-normal text-center leading-none justify-center px-8 py-4 rounded-3xl max-md:px-5 hover:bg-[#66BC98] hover:text-white transition-colors">
          <div>
            Wybierz plan
          </div>
        </a>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const features = [
    "Publikowanie ładunków na TRANS, TIMOCOM, TELEROUTE",
    "AI do tworzenia ofert z obrazu",
    "Mailing 4.0",
    "WhatsApp",
    "Autom. odświeżanie ofert ładunków na giełdach",
    "Integracja ze skrzynką email, branding mailingu list ładunków (tytuł maila, logo w mailu)",
    "Automatyczne szukanie wolnych pojazdów w TIMOCOM w promieniu 100km od miejsca załadunku",
    "Statystyki dla spedytora i managera"
  ];

  const plans = [
    {
      planName: "Start",
      price: "229 PLN / mc",
      usersIncluded: "3 użytkowników w cenie",
      additionalUserPrice: "65 PLN (netto) opłata za dodatkowego użytkownika",
      iconSrc: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/cf28d705fe3ee1489b108e35dd077b12b7932836?placeholderIfAbsent=true",
      isHighlighted: true
    },
    {
      planName: "Standard",
      price: "429 PLN / mc",
      usersIncluded: "6 użytkowników w cenie",
      additionalUserPrice: "40 PLN (netto) opłata za dodatkowego użytkownika",
      iconSrc: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/033824076e2cc3875e32c4ffdeab590917d588cd?placeholderIfAbsent=true"
    },
    {
      planName: "Corporate",
      price: "899 PLN / mc",
      usersIncluded: "30 użytkowników w cenie",
      additionalUserPrice: "40 PLN (netto) opłata za dodatkowego użytkownika",
      iconSrc: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/5c468d4585227c5ae72da303a995662feeb037de?placeholderIfAbsent=true"
    }
  ];

  return (
    <section id="cennik" className="w-[1200px] max-w-full mt-60 max-md:mt-10 scroll-mt-24">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Wybierz plan i stanowiska dla siebie
      </h2>
      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-10 flex-wrap max-md:max-w-full">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              features={features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
