import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'gb', name: 'English', url: 'https://cargoseller.co.uk', flag: '🇬🇧' },
  { code: 'at', name: 'Österreich', url: 'https://cargoseller.at', flag: '🇦🇹' },
  { code: 'nl', name: 'Nederland', url: 'https://cargoseller.nl', flag: '🇳🇱' },
  { code: 'pl', name: 'Polska', url: 'https://cargoseller.pl', flag: '🇵🇱', active: true },
  { code: 'cz', name: 'Česko', url: 'https://cargoseller.cz', flag: '🇨🇿' },
  { code: 'sk', name: 'Slovensko', url: 'https://cargoseller.sk', flag: '🇸🇰' },
  { code: 'es', name: 'Español', url: 'https://cargoseller.es', flag: '🇪🇸' },
  { code: 'lt', name: 'Lietuvių', url: 'https://cargoseller.lt', flag: '🇱🇹' },
  { code: 'be', name: 'Belgique', url: 'https://cargoseller.be', flag: '🇧🇪' },
  { code: 'fr', name: 'Français', url: 'https://cargoseller.fr', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', url: 'https://cargoseller.de', flag: '🇩🇪' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activeLanguage = languages.find(lang => lang.active) || languages[3];
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLink = (section: string) => {
    return isHomePage ? `#${section}` : `/#${section}`;
  };

  return (
    <header className="bg-transparent flex overflow-hidden items-center justify-center py-4 lg:py-[26px] fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center overflow-hidden text-sm lg:text-lg text-white font-normal leading-none flex-nowrap w-full max-w-[1520px] transform scale-75 sm:scale-85 md:scale-95 lg:scale-100 origin-center">
        <Link to="/" className="items-center flex h-[60px] lg:h-[73px] gap-2.5 text-lg sm:text-xl lg:text-2xl text-white font-bold uppercase flex-1 bg-[#4D4D4D] px-4 sm:px-6 lg:px-10 py-2.5 rounded-[16px_0_0_16px] min-w-0 hover:bg-gray-600 transition-colors">
          <div className="self-stretch my-auto whitespace-nowrap overflow-hidden">
            <span className="text-white font-barlow-condensed text-base sm:text-lg lg:text-2xl font-bold uppercase leading-normal">
              cargo
            </span>
            <span className="font-barlow-condensed text-base sm:text-lg lg:text-2xl font-bold leading-normal lowercase" style={{color: '#66BC98'}}>
              seller
            </span>
          </div>
        </Link>
        <img
          src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/f4cf39285a5f4437f931fff00bfa00b707db0178?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1.2] object-contain w-[120px] lg:w-[145px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px] max-lg:mx-auto"
        />
        <div className="self-stretch flex w-[30px] lg:w-[75px] shrink-0 h-[60px] lg:h-[73px] bg-[#4D4D4D] my-auto max-lg:flex-1" />
        
        {/* Desktop Menu Items */}
        <div className="hidden lg:flex flex-nowrap">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="justify-center items-center flex flex-col w-[60px] h-[73px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 cursor-pointer hover:bg-gray-600 transition-colors">
                <span className="text-2xl">{activeLanguage.flag}</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-popover z-50">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} asChild>
                  <a
                    href={lang.url}
                    className={`flex items-center gap-2 ${lang.active ? 'bg-accent' : ''}`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a href={getNavLink('funkcjonalnosci')} className="justify-center items-start flex flex-col w-[122px] h-[73px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 hover:bg-gray-600 transition-colors">
            <div className="flex w-full h-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                O systemie 
              </div>
            </div>
          </a>
          <a href={getNavLink('cennik')} className="justify-center items-start flex flex-col w-[89px] h-[73px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 hover:bg-gray-600 transition-colors">
            <div className="flex w-full h-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                Cennik 
              </div>
            </div>
          </a>
          <a href={getNavLink('kontakt')} className="justify-center items-start flex flex-col w-[95px] h-[73px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 hover:bg-gray-600 transition-colors">
            <div className="flex w-full h-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                Kontakt
              </div>
            </div>
          </a>
          <a href="https://app.cargoseller.pl/register" className="justify-center items-start flex h-[73px] flex-col w-[124px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 hover:bg-gray-600 transition-colors">
            <div className="flex w-full h-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                Załóż konto
              </div>
            </div>
          </a>
          <a href="https://app.cargoseller.pl/login" className="items-start flex flex-col h-[73px] text-[#66BC98] font-bold justify-center w-[122px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 rounded-[0_8px_8px_0] hover:bg-gray-600 transition-colors">
            <div className="flex w-full h-full items-center gap-2.5 justify-center p-2.5">
              <div className="font-roboto-condensed text-lg font-bold leading-6" style={{color: '#66BC98'}}>
                Zaloguj się
              </div>
            </div>
          </a>
        </div>

        {/* Mobile/Tablet Hamburger Button */}
        <div className="lg:hidden flex items-center justify-center w-[60px] h-[60px] bg-[#4D4D4D] rounded-[0_8px_8px_0]">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-full h-full focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-white transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] sm:top-[90px] md:top-[112px] bg-[#4D4D4D] z-40 animate-fade-in">
          <div className="flex flex-col">
            {/* Language Selector Mobile */}
            <div className="flex flex-col border-b border-gray-600">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors cursor-pointer">
                    <span className="text-2xl mr-2">{activeLanguage.flag}</span>
                    <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                      Język / Language
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-popover z-50">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} asChild>
                      <a
                        href={lang.url}
                        className={`flex items-center gap-2 ${lang.active ? 'bg-accent' : ''}`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex flex-col border-b border-gray-600">
              <a href={getNavLink('funkcjonalnosci')} className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  O systemie 
                </div>
              </a>
            </div>
            <div className="flex flex-col border-b border-gray-600">
              <a href={getNavLink('cennik')} className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  Cennik 
                </div>
              </a>
            </div>
            <div className="flex flex-col border-b border-gray-600">
              <a href={getNavLink('kontakt')} className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  Kontakt
                </div>
              </a>
            </div>
            <div className="flex flex-col border-b border-gray-600">
              <a href="https://app.cargoseller.pl/register" className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  Załóż konto
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <a href="https://app.cargoseller.pl/login" className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="font-roboto-condensed text-lg font-bold leading-6" style={{color: '#66BC98'}}>
                  Zaloguj się
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
