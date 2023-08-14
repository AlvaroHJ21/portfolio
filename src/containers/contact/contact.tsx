'use client';
import { FormEvent, useState, useRef } from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
// import 'aos/dist/aos.css';

import { Button, ButtonLink } from '@/components/button';
import { Input } from '@/components/input/input';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const buttonMailto = useRef<HTMLAnchorElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, message });
    if (!buttonMailto.current) return;
    buttonMailto.current.setAttribute(
      'href',
      `mailto:alvarohuaysara@gmail.com?subject=Nombre ${name}, correo ${email}&body=${message}`
    );
    buttonMailto.current.click();
  }

  return (
    <section id="contact" className="">
      <div className="max-w-[1200px] w-[90%] m-auto flex flex-col justify-center py-20 min-h-[756px]">
        <div data-aos="fade-down">
          <h2 className="mb-8 font-black text-center uppercase text-main text-32 dark:text-white">
            Contáctame
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:justify-center md:flex-row md:gap-12">
          {/* Texts */}
          <div
            data-aos="fade-up"
            className="space-y-4 md:flex md:flex-col md:justify-between md:max-w-sm"
          >
            <p className="text-center text-black md:text-left dark:text-white">
              No dudes en contactarme si necesitas un desarrollador con experiencia para llevar tu
              proyecto digital al siguiente nivel.
            </p>
            <div data-aos="fade-up" className="flex flex-col gap-4">
              <a
                href="mailto:alvarohuaysara@gmail.com"
                className="flex gap-2 text-black dark:text-white"
              >
                <HiOutlineMail size={24} className="text-main" />
                alvarohuaysara@gmail.com
              </a>
              <a href="tel:+51926513695" className="flex gap-2 text-black dark:text-white">
                <AiOutlineWhatsApp size={24} className="text-main" />
                +51 926513695
              </a>
              <div>
                <ButtonLink
                  text="Descarga mi CV"
                  href="/pdf/CV-AlvaroHJ.pdf"
                  target="_blank"
                  download="CV-AlvaroHJ.pdf"
                  variant="outline"
                  prefixIcon={<BsDownload size={24} />}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:max-w-lg">
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
              <div data-aos="fade-up">
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Nombre
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div data-aos="fade-up">
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div data-aos="fade-up">
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Mensaje
                </label>
                <Input
                  type="text"
                  placeholder="Me gustaría consultarte..."
                  multiline
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div data-aos="fade-up" className="flex flex-col">
                <Button type="submit" text="Enviar" />
              </div>
            </form>
            <a ref={buttonMailto} href="#" className="hidden"></a>
          </div>
        </div>
      </div>
    </section>
  );
};
