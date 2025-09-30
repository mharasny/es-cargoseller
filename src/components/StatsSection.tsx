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
      title: "3 bolsas",
      description: "Añade una oferta una vez y la publicaremos en las bolsas Trans, TIMOCOM, Teleroute"
    },
    {
      icon: timeIconNew,
      title: "70%",
      description: "Reduciremos el tiempo dedicado a gestionar ofertas en bolsas"
    },
    {
      icon: costIcon,
      title: "12k €",
      description: "Coste de trabajo de ingresar 67.000 ofertas en varias bolsas, lo reduciremos en mín. 50%"
    },
    {
      icon: clickIcon,
      title: "1 x",
      description: "Haz clic una vez para actualizar o eliminar muchas ofertas en 3 bolsas a la vez"
    },
    {
      icon: implementationIcon,
      title: "30 min.",
      description: "Eso es todo lo que tardará la implementación de la nueva herramienta en la empresa/equipo."
    },
    {
      icon: publishIcon,
      title: "< 1 min.",
      description: "Publicarás una oferta en 3 bolsas + enviarás mailing con lista de cargas"
    },
    {
      icon: findIcon,
      title: "0 min.",
      description: "No dedicarás un minuto a buscar vehículos libres, verás resultados de 2 bolsas"
    },
    {
      icon: priceIcon,
      title: "~ 7€",
      description: "Es la tarifa mensual promedio por cuenta de usuario en CARGOseller"
    }
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#4D4D4D] text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] uppercase max-md:max-w-full">
        <span style={{fontSize: '38px', lineHeight: '46px', letterSpacing: '1.14px', textTransform: 'uppercase', fontWeight: '600'}}>
          cargo
        </span>
        <span style={{color: '#66BC98', fontSize: '42px', fontWeight: '600', letterSpacing: '1.26px', textTransform: 'lowercase'}}>seller</span>
        <span style={{color: '#4D4D4D', fontSize: '42px', fontWeight: '600', letterSpacing: '1.26px', textTransform: 'lowercase'}}> en cifras</span>
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
