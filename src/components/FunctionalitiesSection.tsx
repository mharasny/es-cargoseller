import React, { useState } from 'react';
import addLoadingImg from '@/assets/add-loading.png';
import getPropositionImg from '@/assets/get-proposition.jpg';
import loadingListImg from '@/assets/loading-list.png';
import refreshDeleteImg from '@/assets/refresh-delete.png';
import automailingImg from '@/assets/automailing.jpg';
import myloadingsImg from '@/assets/myloadings.png';
import integrationsImg from '@/assets/integrations.jpg';
import statisticsImg from '@/assets/new-statistics.png';

const FunctionalitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Añadir carga",
    "Recoger propuestas de precio",
    "Lista de cargas",
    "Actualizar y eliminar cargas",
    "Mailing automático de lista de cargas",
    "Cargas en mi empresa",
    "Integraciones",
    "Estadísticas"
  ];

  const tabImages = [
    addLoadingImg,
    getPropositionImg,
    loadingListImg,
    refreshDeleteImg,
    automailingImg,
    myloadingsImg,
    integrationsImg,
    statisticsImg
  ];

  const tabDescriptions = [
    "Añade la carga más rápido gracias a opciones de selección rápida, archivo o plantillas, publica hasta en 3 bolsas, activa actualización automática de ofertas y búsqueda de vehículos en TIMOCOM, opcionalmente envía mailing con tu lista de cargas a tus transportistas de confianza - todo en una ventana.",
    "El sistema recoge propuestas de precio de la bolsa TIMOCOM y canal de mailing de tus transportistas de confianza, adicionalmente recoge de TIMOCOM ofertas de vehículos libres en un radio de 100km del lugar de carga.",
    "Ventana principal con lista de cargas, te permitirá ahorrar del 50-70% de tiempo. Desde aquí puedes eliminar, actualizar, añadir, editar ofertas, revisar propuestas de precio y propuestas de vehículos libres, finalizar transacciones con efecto en 3 bolsas.",
    "La actualización cíclica de carga es una práctica muy frecuente entre transitarios que efectúa la venta. En nuestro sistema el proceso de actualización ocurre automáticamente cada 35 min. Opcionalmente puedes actualizar manualmente. Similar con eliminación de ofertas - eliminas muchas ofertas o ofertas individuales con efecto en bolsas.",
    "Práctica común, es decir envío de correo con lista de cargas a tus transportistas de confianza. Actualmente acción separada a realizar además de ingresar en bolsas. Nuestro integrador hace que esta acción la hagas al publicar en bolsas ahorrando tiempo y haciéndolo cómodamente como nunca antes. El sistema generará automáticamente correo personalizado con lista de cargas.",
    "Revisa fácilmente qué en tu empresa (en todas las sucursales) está actualmente expuesto para venta y por qué canales de venta. Puedes contactar fácilmente con compañero sobre la carga y apoyar a colegas exponiendo la carga como tuya sin reescribirla.",
    "La integración de tu cuenta de usuario con bolsas te tomará menos de 3 minutos y estás listo para optimizar el proceso de trabajo y lograr mejores efectos en venta. También puedes integrar tu sistema TMS con nuestro sistema - es una integración simple y rápida en lugar de integraciones extensas y separadas con cada bolsa. Nos convertiremos en tu HUB de integración - es un enfoque moderno en el mundo de soluciones digitales, que acelera integraciones y reduce mucho su coste.",
    "Revisa estadísticas mostrando cuál fue el volumen total de cargas que fueron añadidas para venta. Descubre cuántas cargas no vendidas hay y optimiza esta área. Compara meses, años, revisa datos sobre margen e ingresos desglosados por sucursales, toda la empresa."
  ];

  return (
    <section id="funcionalidades" className="w-full max-w-[1520px] mt-[131px] max-md:max-w-full max-md:mt-10 scroll-mt-24">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Funcionalidades
      </h2>
      <div className="flex w-full flex-col items-stretch text-lg text-[#4E4D4D] font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-stretch gap-[40px_60px] flex-wrap rounded-2xl max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-full items-center gap-3 leading-none flex-wrap max-md:max-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl transition-colors hover:bg-[#5aa085] hover:text-white ${
                    activeTab === index
                      ? 'text-white bg-[#66BC98]'
                      : 'bg-white text-[#4E4D4D]'
                  }`}
                >
                  <div className="flex justify-center items-center">
                    {tab}
                  </div>
                
                </button>
              ))}
            </div>
            <div className="text-czarny font-roboto-condensed text-lg font-normal leading-6 mt-6 max-md:max-w-full">
              {tabDescriptions[activeTab]}
            </div>
          </div>
          <img
            src={tabImages[activeTab]}
            alt={`Screenshot for ${tabs[activeTab]}`}
            className="aspect-[1.8] object-contain w-[897px] shadow-[0px_0px_12px_rgba(0,0,0,0.25)] min-w-60 my-auto rounded-lg max-md:max-w-full"
          />
        </div>
        <div className="self-center flex min-h-[17px] gap-4 mt-10" />
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
