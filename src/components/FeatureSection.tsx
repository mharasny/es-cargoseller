import React from 'react';
import statsImage from '@/assets/loading.png';
import searchVehicleImage from '@/assets/find-free.png';
import statisticsImage from '@/assets/ai.png';
import aiFeatureImage from '@/assets/stats.png';
import dotIcon from '@/assets/dot.svg';
interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  features,
  imageSrc,
  reversed = false
}) => {
  return <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className="flex items-center justify-center px-8 lg:px-20 py-16 lg:py-[66px] h-full min-h-[300px] lg:min-h-[400px]">
          <img src={imageSrc} alt={title} className="w-[400px] h-[400px] object-contain rounded-lg" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className={`flex flex-col justify-center h-full min-h-[300px] lg:min-h-[400px] px-6 lg:px-12 xl:px-20 py-16 lg:py-[110px] ${reversed ? 'lg:pr-6 xl:pr-12' : 'lg:pl-6 xl:pl-12'}`}>
          <h3 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-6 leading-normal">
            {title}
          </h3>
          <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 mb-6">
            {description}
          </p>
          <div className="space-y-4 mb-6">
            {features.map((feature, index) => <div key={index} className="flex items-start gap-3 text-czarny text-lg font-roboto-condensed font-normal leading-6">
                <img src={dotIcon} alt="" className="w-[19px] h-[21px] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>)}
          </div>
          
        </div>
      </div>
    </div>;
};
const FeaturesContainer = () => {
  const features = [{
    title: "Publicación de cargas spot para venta",
    description: "En CARGOseller añades la carga una vez e indicas qué herramientas y canales de venta activas.",
    features: ["envío hasta 3 bolsas de transporte - publicas cargas en bolsas donde tienes cuenta", "Mailing 4.0 - generación automática de correo con lista de cargas para grupos seleccionados de subcontratistas de confianza"],
    imageSrc: statsImage
  }, {
    title: "Búsqueda automática de vehículo libre",
    description: "La integración de CARGOseller con TIMOCOM permite búsqueda automática de vehículos libres en un radio de 100km desde el lugar de carga añadida a CARGOseller.",
    features: ["desde ahora no buscas vehículos libres manualmente, el algoritmo lo hace por ti", "los resultados encontrados se muestran en la columna \"Propuestas\" junto con propuestas de precio de otros sistemas"],
    imageSrc: searchVehicleImage
  }, {
    title: "IA - más rápido, más, más eficaz",
    description: "Pega el TEXTO de la consulta y el sistema usando IA creará ofertas listas. Añade IMAGEN con ofertas y el sistema también creará ofertas listas en tiempo más rápido que una persona.",
    features: ["Trabajar con IA es una forma de mejorar la eficiencia y resultados financieros porque ganas tiempo", "Comodidad de trabajo - no reescribes ofertas manualmente"],
    imageSrc: statisticsImage
  }, {
    title: "Estadísticas",
    description: "La dispersión del volumen de cargas spot para venta en correos de muchos empleados imposibilita realizar análisis. Agregar todas las cargas spot para venta en el sistema CARGOseller permite entregar estadísticas completas.",
    features: ["estadísticas en perspectiva temporal", "número de cargas ingresadas, vendidas"],
    imageSrc: aiFeatureImage
  }];
  return <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16">
      

      <div className="space-y-0">
        {features.map((feature, index) => <FeatureItem key={index} title={feature.title} description={feature.description} features={feature.features} imageSrc={feature.imageSrc} reversed={index % 2 !== 0} />)}
      </div>
    </section>;
};
export default FeaturesContainer;