import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] min-h-screen flex flex-col items-center py-[26px]">
      <Header />
      
      <main className="w-full max-w-[1200px] px-8 py-16">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">Página principal</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span>Política de Privacidad</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#4D4D4D] mb-8">Política de privacidad</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">1. Quiénes somos</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Esta política se refiere al sitio web, que funciona bajo la dirección www.cargoseller.pl</li>
              <li>El Administrador concede gran importancia al respeto de los derechos de los usuarios que utilizan los servicios y funcionalidades ofrecidos en el marco del Sitio, así como de los usuarios que utilizan el Sitio sin utilizar los servicios y funcionalidades ofrecidos en el marco del Sitio, con especial atención al derecho a la protección de la privacidad. Por lo tanto, recopilamos solo el mínimo de información que nos ayuda a comprender mejor las necesidades de los Usuarios y adaptar el Sitio, su funcionalidad y ergonomía a las expectativas cambiantes de los Usuarios. Entre otras cosas, con este fin recopilamos y procesamos los datos necesarios de los Usuarios, incluidos los Datos Personales y otros que no poseen tal atributo. La recopilación se realiza, dependiendo del tipo de datos, por iniciativa del Usuario o automáticamente.</li>
              <li>El Administrador procesa los Datos Personales de acuerdo con las disposiciones del Reglamento GDPR, así como otras disposiciones pertinentes de la legislación vigente, en particular las disposiciones nacionales sobre protección de datos personales. El Administrador aplica medidas de seguridad apropiadas a las amenazas y categorías de Datos para la protección efectiva de los Datos, cumpliendo con los requisitos especificados en las disposiciones legales vigentes (por ejemplo, contraseñas de acceso, restricciones de personas con permisos de acceso o colocación de servidores que recopilan datos en instalaciones designadas o entregándolos a la gestión de entidades especializadas).</li>
              <li>El operador del sitio y el Administrador de datos personales es:
                <div className="ml-6 mt-2 font-semibold">CS SOFT Monika Janczukowicz z siedzibą Szydłowo 189, 64-930 Szydłowo<br/>NIP: 7651604754 REGON: 302309608</div>
              </li>
              <li>Dirección de contacto de correo electrónico del operador: kontakt@cargoseller.pl</li>
              <li>El Operador es el Administrador de sus datos personales con respecto a los datos proporcionados voluntariamente en el Sitio.</li>
              <li>El Sitio utiliza datos personales para los siguientes fines:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Gestión de consultas a través del formulario</li>
                  <li>Presentación de ofertas o información</li>
                </ul>
              </li>
              <li>El Sitio realiza funciones de obtención de información sobre usuarios y su comportamiento de la siguiente manera:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>A través de datos introducidos voluntariamente en formularios, que se introducen en los sistemas del Operador.</li>
                  <li>A través del almacenamiento de archivos cookie en los dispositivos finales.</li>
                </ul>
              </li>
              <li>El Sitio cargoseller.pl se reserva el derecho de introducir cambios en la Política de Privacidad. Cada usuario del sitio está sujeto a la Política de Privacidad actual que se encuentra en la página https://cargoseller.pl/polityka-prywatnosci/. Cualquier cambio introducido no afecta al principio básico: <strong>El Sitio no vende ni proporciona a terceros datos personales o de dirección de clientes/usuarios de sus sitios y publicaciones con fines de marketing.</strong></li>
              <li>Si no está de acuerdo con la Política de Privacidad, por favor no visite el sitio, no adquiera productos y servicios ofrecidos por el sitio.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">2. Datos personales</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Al utilizar los sitios pertenecientes al Sitio, es posible que se le solicite proporcionar algunos de sus datos personales mediante el llenado de un formulario de contacto. Los datos que se le solicitarán son Nombre y Apellido, Número de teléfono, Dirección de correo electrónico, Nombre de empresa.</li>
              <li>Solo requerimos aquellos datos que son necesarios para el contacto. La falta de llenado de los campos obligatorios del formulario imposibilita el contacto.</li>
              <li>Los datos de los Usuarios se procesarán para los siguientes fines:
                <ol className="ml-6 mt-2 list-decimal list-inside">
                  <li>permitir a los Usuarios utilizar los servicios del Sitio (art. 6 párr. 1 lit. a) Reglamento GDPR – consentimiento voluntario y art. 6 párr. 1 lit. b) Reglamento GDPR – en el alcance de Datos necesarios para la prestación de servicios/ejecución del contrato);</li>
                  <li>responder por el Administrador a consultas, llamadas o solicitudes de Usuarios (art. 6 párr. 1 lit. a) Reglamento GDPR – consentimiento voluntario y art. 6 párr. 1 lit. b) Reglamento GDPR – en el alcance de Datos necesarios para la prestación de servicios/ejecución del contrato),</li>
                  <li>cumplir con los fines legalmente justificados del Administrador en forma de marketing de productos y servicios del Administrador (art. 6 párr. 1 lit. f) Reglamento GDPR – interés legítimo del Administrador);</li>
                </ol>
              </li>
              <li>En algunas situaciones, el Administrador tiene derecho a transferir sus datos personales a otros destinatarios, si es necesario para ejecutar el contrato celebrado con usted o para cumplir con las obligaciones que recaen sobre el Administrador. Esto se refiere a tales grupos de destinatarios:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>empresa de hosting en base a encomienda</li>
                  <li>autoridades públicas</li>
                  <li>empresas que prestan servicios en nombre del Administrador (Software house)</li>
                </ul>
              </li>
              <li>Sus datos personales procesados por el Administrador no más tiempo del necesario para realizar las actividades relacionadas con ellos especificadas por disposiciones separadas.</li>
              <li>Tiene derecho a solicitar al Administrador:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>acceso a los datos personales que le conciernen,</li>
                  <li>su rectificación,</li>
                  <li>eliminación,</li>
                  <li>limitación del procesamiento,</li>
                  <li>y transferencia de datos.</li>
                </ul>
              </li>
              <li>Tiene derecho a presentar una objeción en el alcance del procesamiento indicado en el punto 3.3 c) con respecto al procesamiento de datos personales con el fin de ejecutar intereses legalmente justificados realizados por el Administrador, incluida la elaboración de perfiles, mientras que el derecho de objeción no podrá ser ejercido en caso de existencia de bases legalmente justificadas importantes para el procesamiento, superiores a sus intereses, derechos y libertades, en particular el establecimiento, la persecución o la defensa de reclamaciones.</li>
              <li>Sobre las acciones del Administrador procede una queja ante el Presidente de la Oficina de Protección de Datos Personales, ul. Stawki 2, 00-193 Varsovia.</li>
              <li>Proporcionar datos personales es voluntario, pero necesario para el funcionamiento del Sitio.</li>
              <li>En relación con usted pueden realizarse acciones que consisten en la toma automatizada de decisiones, incluida la elaboración de perfiles con el fin de prestar servicios en el marco del contrato celebrado y con el fin de realizar por el Administrador marketing directo.</li>
              <li>Los datos personales no se transfieren a terceros países en el sentido de las disposiciones sobre protección de datos personales. Esto significa que no los enviamos fuera del territorio de la Unión Europea.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">3. Técnicas de marketing importantes</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>El Operador aplica análisis estadístico del tráfico en el sitio, a través de Google Analytics (Google Inc. con sede en EE. UU.). El Operador no transfiere datos personales al operador de este servicio, solo información anonimizada. El servicio se basa en el uso de cookies en el dispositivo final del usuario. En el alcance de información sobre las preferencias del usuario recopiladas por la red publicitaria de Google, el usuario puede ver y editar información resultante de archivos cookies mediante la herramienta: https://www.google.com/ads/preferences/</li>
              <li>El Operador aplica técnicas de remarketing, que permiten adaptar mensajes publicitarios al comportamiento del usuario en el sitio, lo que puede dar la ilusión de que los datos personales del usuario se utilizan para rastrearlo, pero en la práctica no se transfieren datos personales del Operador a los operadores de publicidad. La condición tecnológica de tales acciones es el soporte habilitado de archivos cookie.</li>
              <li>El Operador utiliza el píxel de Facebook. Esta tecnología hace que el sitio Facebook (Facebook Inc. con sede en EE. UU.) sepa que una persona registrada en él está utilizando el Sitio. En este caso se basa en datos de los cuales él mismo es el administrador, el Operador no transfiere ningún dato personal adicional al servicio de Facebook. El servicio se basa en el uso de cookies en el dispositivo final del usuario</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">4. Mensajes no anunciados</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>El Sitio se reserva el derecho de enviar mensajes no anunciados a personas cuyos datos de contacto posee y que han aceptado la Política de Privacidad. Por mensajes no anunciados se entiende información relacionada directamente con su sitio y producto.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">5. Cookies</h2>
            <p className="text-gray-700">
              Algunas áreas del sitio pertenecientes al Sitio pueden utilizar cookies, es decir, pequeños archivos de texto enviados a la computadora del internauta identificándolo de la manera necesaria para simplificar o amortizar una operación determinada. Las cookies no son dañinas ni para la computadora ni para su usuario y sus datos. La condición para el funcionamiento de las cookies es su aceptación por el navegador y no eliminarlas del disco.
            </p>
          </section>
        </div>
      </main>
      
      <div className="w-full flex justify-center px-4">
        <ContactSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
