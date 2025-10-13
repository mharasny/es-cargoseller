import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  company: z.string().trim().min(1, "El nombre de empresa es obligatorio").max(100),
  phone: z.string().trim().min(1, "El teléfono es obligatorio").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000)
});

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      setIsSubmitting(true);

      // Send email via edge function
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error de validación",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Error sending email:', error);
        toast({
          title: "Error",
          description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-60 text-lg text-[#66BC98] font-normal leading-none flex-1 shrink basis-[0%] max-md:max-w-full">
      <h3 className="text-white font-barlow-condensed text-[30px] font-normal leading-6 mb-6">
        Formulario de contacto
      </h3>
      
      <div className="bg-[#5E5E5E] flex w-[861px] items-center gap-2.5 mt-6 px-4 py-2 rounded-lg max-md:max-w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nombre y Apellido"
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
          placeholder="Nombre de empresa"
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
          placeholder="Teléfono"
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
          placeholder="Correo electrónico"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 self-stretch my-auto bg-transparent border-none outline-none placeholder-zielony w-full"
          required
        />
      </div>
      
      <div className="bg-[#5E5E5E] flex min-h-[100px] w-[861px] gap-2.5 whitespace-nowrap mt-6 pt-2 pb-[68px] px-4 rounded-lg max-md:max-w-full">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Mensaje"
          className="text-white font-roboto-condensed text-lg font-normal leading-6 bg-transparent border-none outline-none placeholder-zielony w-full resize-none"
          rows={4}
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="justify-center items-stretch flex min-h-[51px] w-[210px] max-w-full flex-col text-white whitespace-nowrap text-center bg-[#66BC98] mt-6 px-8 py-3.5 rounded-3xl max-md:px-5 hover:bg-[#5aa085] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="text-white">
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
