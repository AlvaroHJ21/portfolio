import { ButtonDownloadCv, ButtonLink } from '@/components/ui';
import { ImageBlur } from '@/components/ui/image-blur';
import { FadeUp, FadeDown } from '../animation';

export const About = () => {
  return (
    <section id="about-me">
      <div className="container min-h-[756px] relative border border-transparent">
        <FadeDown>
          <h2 className="my-10 font-black text-center text-gray-600 uppercase text-32 dark:text-white">
            Sobre <span className="text-main">mí</span>
          </h2>
        </FadeDown>

        <div className="flex flex-col h-full gap-12 md:flex-row md:justify-center">
          {/* Imagen */}
          <FadeUp>
            <div className="relative max-w-md m-auto w-60 lg:w-96 group/image">
              <div className="absolute inset-0 z-0 transition-transform rounded-lg bg-opacity-40 bg-primary -rotate-6 group-hover/image:rotate-0"></div>
              <ImageBlur
                className="object-cover max-w-full rounded-lg"
                src="/img/perfil.png"
                alt="perfil"
                width={640}
                height={700}
              />
            </div>
          </FadeUp>

          {/* Texto y cta */}
          <FadeUp>
            <div className="flex flex-col items-center md:items-start">
              <div className="max-w-md mb-6 leading-8 text-center text-black md:text-left dark:text-white">
                <p className="mb-4">
                  ¡Hola! Soy un desarrollador web con experiencia en frontend, backend y desarrollo
                  móvil. Me apasiona crear soluciones tecnológicas innovadoras y eficientes. Mi
                  enfoque es siempre centrado en el usuario y en la calidad del código.
                </p>
                <p>
                  Durante mi carrera, he tenido la oportunidad de trabajar en una variedad de
                  proyectos emocionantes que me han permitido perfeccionar mis habilidades técnicas
                  y aprender a colaborar eficazmente en equipos multidisciplinarios.
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
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

// bg-cyan-200
