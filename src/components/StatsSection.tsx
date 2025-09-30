import React from 'react';
import carIcon from '@/assets/car-icon.svg';
import carIconNew from '@/assets/car-icon-new.svg';
import timeIconNew from '@/assets/time-icon-new.svg';
import costIcon from '@/assets/cost-icon.svg';
import clickIcon from '@/assets/click-icon.svg';
import implementationIcon from '@/assets/implementation-icon.svg';
import publishIcon from '@/assets/publish-icon.svg';
import findIcon from '@/assets/find-icon.svg';
import priceIcon from '@/assets/price-icon.svg';

interface StatCardProps {
  icon: string | any;
  title: string;
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`flex p-8 flex-col items-center gap-4 flex-1 self-stretch rounded-2xl bg-white ${className}`}>
      <div className="bg-white self-center flex min-h-[88px] w-20 items-center gap-2.5 px-[22px] py-[26px] max-md:px-5 relative">
        <img
          src={icon}
          alt=""
          className="w-20 h-[87.66px] absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="text-zielony text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mt-4">
        {title}
      </div>
      <div className="text-czarny text-center text-lg font-roboto-condensed font-normal leading-6 mt-4">
        {description}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: carIconNew,
      title: "3 giełdy",
      description: "Dodaj ofertę jeden raz, a my opublikujemy ją na giełdach Trans, TIMOCOM, Teleroute"
    },
    {
      icon: timeIconNew,
      title: "70%",
      description: "O tyle zredukujemy czas poświęcany na zarządzanie ofertami na giełdach"
    },
    {
      icon: costIcon,
      title: "50k zł",
      description: "To koszt pracy wpisania 67 000 ofert na kilka giełd, zredukujemy to o min. 50%"
    },
    {
      icon: clickIcon,
      title: "1 x",
      description: "Kliknij raz, aby odświeżyć lub usunąć wiele ofert na 3 giełdach naraz"
    },
    {
      icon: implementationIcon,
      title: "30 min.",
      description: "Tylko tyle zajmie wdrożenie nowego narzędzia w firmie/zespole."
    },
    {
      icon: publishIcon,
      title: "< 1 min.",
      description: "Opublikujesz ofertę na 3 giełdy + wyślesz mailing z listą ładunków"
    },
    {
      icon: findIcon,
      title: "0 min.",
      description: "Nie poświęcisz minuty na szukanie wolnych pojazdów, a zobaczysz wyniki z 2 giełd"
    },
    {
      icon: priceIcon,
      title: "~ 29zł",
      description: "To średnia opłata miesięczna za konto użytkownika w CARGOseller"
    }
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#4D4D4D] text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] uppercase max-md:max-w-full">
        <span style={{fontSize: '38px', lineHeight: '46px', letterSpacing: '1.14px', textTransform: 'uppercase', fontWeight: '600'}}>
          cargo
        </span>
        <span style={{color: '#66BC98', fontSize: '42px', fontWeight: '600', letterSpacing: '1.26px', textTransform: 'lowercase'}}>seller</span>
        <span style={{color: '#4D4D4D', fontSize: '42px', fontWeight: '600', letterSpacing: '1.26px', textTransform: 'lowercase'}}> w liczbach</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-md:mt-10">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
