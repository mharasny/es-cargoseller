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
          <Link to="/" className="hover:text-primary">Strona główna</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span>Polityka Prywatności</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#4D4D4D] mb-8">Polityka prywatności</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">1. Kim jesteśmy</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem www.cargoseller.pl</li>
              <li>Administrator przykłada wielką wagę do respektowania praw przysługujących użytkownikom korzystającym z usług i funkcjonalności oferowanych w ramach Serwisu, jak i użytkownikom korzystającym z Serwisu bez korzystania z usług i funkcjonalności oferowanych w ramach Serwisu, ze szczególnym uwzględnieniem prawa do ochrony prywatności. W związku z tym gromadzimy jedynie minimum informacji pomagających nam lepiej zrozumieć potrzeby Użytkowników oraz dostosować Serwis, jego funkcjonalności i ergonomię do zmieniających się oczekiwań Użytkowników. Między innymi w tym celu zbieramy i przetwarzamy niezbędne dane Użytkowników, w tym Dane Osobowe oraz inne, nie posiadające takiego przymiotu. Zbieranie odbywa się, w zależności od rodzaju danych, z inicjatywy Użytkownika lub automatycznie.</li>
              <li>Administrator przetwarza Dane Osobowe zgodnie z przepisami Rozporządzania RODO a także innymi właściwymi przepisami obowiązującego prawa, w tym w szczególności krajowymi przepisami dotyczącymi ochrony danych osobowych. Administrator dla skutecznej ochrony Danych stosuje odpowiednie do zagrożeń i kategorii Danych środki bezpieczeństwa przetwarzania Danych, spełniające wymogi określone w obowiązujących przepisach prawa (m.in. hasła dostępu, ograniczenia osób z uprawnieniami dostępu czy umieszczanie serwerów gromadzących dane w przeznaczonych do tego pomieszczeniach bądź oddając je w zarządzanie wyspecjalizowanym podmiotom).</li>
              <li>Operatorem serwisu oraz Administratorem danych osobowych jest:
                <div className="ml-6 mt-2 font-semibold">CS SOFT Monika Janczukowicz z siedzibą Szydłowo 189, 64-930 Szydłowo<br/>NIP: 7651604754 REGON: 302309608</div>
              </li>
              <li>Adres kontaktowy poczty elektronicznej operatora: kontakt@cargoseller.pl</li>
              <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
              <li>Serwis wykorzystuje dane osobowe w następujących celach:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Obsługa zapytań przez formularz</li>
                  <li>Prezentacja oferty lub informacji</li>
                </ul>
              </li>
              <li>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                  <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka").</li>
                </ul>
              </li>
              <li>Serwis cargoseller.pl zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Każdego użytkownika serwisu obowiązuje aktualna Polityka Prywatności znajdująca się na stronie https://cargoseller.pl/polityka-prywatnosci/. Jakiekolwiek wprowadzane zmiany nie wpływają na podstawową zasadę: <strong>Serwis nie sprzedaje i nie udostępnia osobom trzecim danych personalnych czy adresowych klientów/użytkowników swoich serwisów i czasopism do celów marketingowych.</strong></li>
              <li>Jeśli nie zgadzasz się z Polityką Prywatności, proszę nie odwiedzać serwisu, nie nabywać produktów i usług oferowanych przez serwis.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">2. Dane osobowe</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>W czasie korzystania z serwisów należących do Serwisu możesz zostać poproszony o podanie niektórych swoich danych osobowych poprzez wypełnienie formularza kontaktowego. Dane, o które będziesz proszony, to Imię i Nazwisko, Numer telefonu, Adres Email, Nazwa firmy.</li>
              <li>Wymagamy tylko tych danych, które są niezbędne do kontaktu. Brak wypełnienia wymaganych pól formularza uniemożliwia kontakt.</li>
              <li>Dane Użytkowników będą przetwarzane w następujących celach:
                <ol className="ml-6 mt-2 list-decimal list-inside">
                  <li>umożliwienie Użytkownikom korzystania z usług Serwisu (art. 6 ust. 1 lit. a) Rozporządzenia RODO – dobrowolna zgoda i art. 6 ust. 1 lit. b) Rozporządzenia RODO – w zakresie Danych niezbędnych do świadczenia usług/wykonania umowy);</li>
                  <li>odpowiadanie przez Administratora na zapytania, wezwania bądź wnioski Użytkowników (art. 6 ust. 1 lit. a) Rozporządzenia RODO – dobrowolna zgoda i art. 6 ust. 1 lit. b) Rozporządzenia RODO – w zakresie Danych niezbędnych do świadczenia usług/wykonania umowy),</li>
                  <li>wypełnianie prawnie usprawiedliwionych celów Administratora w postaci marketingu produktów i usług Administratora (art. 6 ust. 1 lit. f) Rozporządzenia RODO – uzasadniony interes Administratora);</li>
                </ol>
              </li>
              <li>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>firma hostingowa na zasadzie powierzenia</li>
                  <li>organy publiczne</li>
                  <li>firmy, świadczące usługi na rzecz Administratora (Software house)</li>
                </ul>
              </li>
              <li>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami.</li>
              <li>Przysługuje Ci prawo żądania od Administratora:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                  <li>ich sprostowania,</li>
                  <li>usunięcia,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
              <li>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
              <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
              <li>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
              <li>Dane osobowe nie są przekazywane do krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">3. Istotne techniki marketingowe</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</li>
              <li>Operator stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów reklamowych do zachowania użytkownika na stronie, co może dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych danych osobowych od Operatora do operatorom reklam. Technologicznym warunkiem takich działań jest włączona obsługa plików cookie.</li>
              <li>Operator korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">4. Niezapowiedziane wiadomości</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Serwis zastrzega sobie prawo do wysyłania niezapowiedzianych wiadomości osobom, których dane kontaktowe posiada i które zgodziły się z Polityką Prywatności. Pod pojęciem niezapowiedzianych wiadomości rozumie się informacje odnoszące się bezpośrednio do jego serwisu i produktu.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">5. Cookies (Ciasteczka)</h2>
            <p className="text-gray-700">
              Niektóre obszary serwisu należących do Serwisu mogą wykorzystywać cookies, czyli małe pliki tekstowe wysyłane do komputera internauty identyfikujące go w sposób potrzebny do uproszczenia lub umorzenia danej operacji. Cookies są nieszkodliwe ani dla komputera ani dla jego użytkownika i jego danych. Warunkiem działania cookies jest ich akceptacja przez przeglądarkę i nie usuwanie ich z dysku.
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
