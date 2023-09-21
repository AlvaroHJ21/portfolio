import { BsDownload } from 'react-icons/bs';

import { ButtonDownloadCv, ButtonLink } from '@/components/ui';
import { ImageBlur } from '@/components/ui/image-blur';
import { NetworksLinksVertical } from '@/components/shared/network-links-vertical';

export const About = () => {
  return (
    <section id="about-me">
      <div className="max-w-[1200px] w-[90%] m-auto min-h-[756px] py-20 grid place-content-center relative">
        <div className="flex flex-col h-full gap-16 md:flex-row">
          {/* Imagen */}
          <div data-aos="fade-down" className="">
            <div className="max-w-md m-auto w-60 lg:w-96">
              <ImageBlur
                className="object-cover max-w-full rounded-lg"
                src="/img/perfil.png"
                alt="perfil"
                width={640}
                height={700}
              />
            </div>
          </div>

          {/* Texto y cta */}
          <div data-aos="fade-up" className="flex-1">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="mb-6 font-black text-gray-600 uppercase text-32 dark:text-white">
                Sobre <span className="text-main">mí</span>
              </h2>

              <div className="max-w-lg mb-6 leading-8 text-center text-black md:text-left dark:text-white">
                <p>
                  ¡Hola! Soy un desarrollador web con experiencia en frontend, backend y desarrollo
                  móvil. Me apasiona crear soluciones tecnológicas innovadoras y eficientes. Mi
                  enfoque es siempre centrado en el usuario y en la calidad del código.
                </p>
                <p>
                  Si buscas un desarrollador web confiable, creativo y orientado a resultados, estás
                  en el lugar correcto. ¡Explora mi portafolio y ponte en contacto conmigo!
                </p>
              </div>

              <dl className="grid grid-cols-1 gap-2 px-8 py-6 mb-6 text-gray-600 border border-gray-500 rounded-md dark:text-gray-300 backdrop-blur-md">
                <div className="flex gap-2">
                  <dt className="font-bold">Nombre: </dt>
                  <dd>Alvaro Huaysara Jauregui</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold">País: </dt>
                  <dd>Perú {'🇵🇪'}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold">Email: </dt>
                  <dd>alvarohuaysara@gmail.com</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold">Teléfono: </dt>
                  <dd>+51 926513695</dd>
                </div>
              </dl>

              <div className="flex gap-4">
                <ButtonLink href="/contact">Contáctame</ButtonLink>
                <ButtonDownloadCv />
              </div>
            </div>
          </div>
        </div>
        <NetworksLinksVertical />
      </div>
    </section>
  );
};

// bg-cyan-200
