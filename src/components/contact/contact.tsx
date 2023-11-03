'use client';
import { FormEvent, useState, useRef } from 'react';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
// import 'aos/dist/aos.css';

import { Button, ButtonDownloadCv, InputText } from '@/components/ui';
import { FadeUp } from '@/components/animation/fade-up';
import { FadeDown } from '@/components/animation/fade-down';

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
    <section id="contact" className="texture">
      <div className="container flex flex-col justify-center py-20 min-h-[756px]">
        <FadeDown>
          <h2 className="mb-8 font-black text-center uppercase text-main text-32 dark:text-white">
            Contáctame
          </h2>
        </FadeDown>

        <div className="flex flex-col gap-12 md:justify-center md:flex-row md:gap-12">
          {/* Texts */}
          <div className="space-y-4 md:flex md:flex-col md:justify-between md:max-w-sm">
            <FadeUp>
              <p className="text-center text-black md:text-left dark:text-white">
                No dudes en contactarme si necesitas un desarrollador con experiencia para llevar tu
                proyecto digital al siguiente nivel.
              </p>
            </FadeUp>
            <FadeUp className="flex flex-col gap-4">
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
                <ButtonDownloadCv />
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <div className="w-full md:max-w-lg">
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
              <FadeUp>
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="name">
                  Nombre
                </label>
                <InputText
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FadeUp>
              <FadeUp>
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="email">
                  Email
                </label>
                <InputText
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FadeUp>
              <FadeUp>
                <label className="block mb-2 ml-2 text-black dark:text-white" htmlFor="message">
                  Mensaje
                </label>
                <InputText
                  id="message"
                  type="text"
                  placeholder="Me gustaría consultarte..."
                  multiline
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FadeUp>

              <FadeUp className="flex flex-col">
                <Button>Enviar</Button>
              </FadeUp>
            </form>
            <a ref={buttonMailto} href="#" className="hidden"></a>
          </div>
        </div>
      </div>
    </section>
  );
};
