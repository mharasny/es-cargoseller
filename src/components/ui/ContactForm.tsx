import React, { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Formularz został wysłany!');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-60 text-lg text-[#66BC98] font-normal leading-none flex-1 shrink basis-[0%] max-md:max-w-full">
      <h3 className="text-white font-barlow-condensed text-[30px] font-normal leading-6 mb-6">
        Formularz kontaktowy
      </h3>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Imię Nazwisko"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Nazwa firmy"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 whitespace-nowrap mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Telefon"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 whitespace-nowrap mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex min-h-[100px] w-[861px] gap-2.5 whitespace-nowrap mt-6 pt-2 pb-[68px] px-4 rounded-lg max-md:max-w-full">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Wiadomość"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 bg-transparent border-none outline-none placeholder-zielony w-full resize-none"
          rows={4}
          required
        />
      </div>
      
      <button
        type="submit"
        className="justify-center items-stretch flex min-h-[51px] w-[210px] max-w-full flex-col text-white whitespace-nowrap text-center bg-[#66BC98] mt-6 px-8 py-3.5 rounded-3xl max-md:px-5 hover:bg-[#5aa085] transition-colors"
      >
        <div className="text-white">
          Wyślij
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
