"use client";
import Image from "next/image";
import animations from "@/animations/animations.module.css";
import FormNewsletter from "@/components/home/FormNewsletter";
import { setTheme } from "@/helpers/set-theme";
import { localStateManager } from "@/helpers/local-state-manager";
import { useEffect } from "react";
import ParallaxSection from "@/components/home/parallax-section/ParallaxSection";

export default function Home() {
  const theme = localStateManager.theme.get();
  if (theme) setTheme(theme);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add(animations.fade_up);
        }
      });
    });

    observer.observe(document.querySelector("#features")!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex justify-between flex-col md:flex-row items-center gap-12 md:gap-4 p-6 md:px-24 md:py-20 w-full">
        <div className="self-start flex flex-col items-center md:items-start gap-12 md:gap-16">
          <div className={animations.fade_up + " flex  flex-col gap-4"}>
            <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary max-w-3xl self-start">
              Você controlando seus investimentos
            </span>
            <span className="self-start text-lg max-w-2xl">
              Com a Invetu você tem acesso a uma plataforma completa para
              gerenciar seus investimentos, com dados em tempo real e de forma
              simples e intuitiva.
            </span>
          </div>
          <div className={animations.move_right_fast}>
            <FormNewsletter />
          </div>
        </div>
        <div className="relative">
          <div
            className={
              animations.move_left_fast +
              " mockup-phone shadow-2xl border-primary"
            }
          >
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo h-[497px] w-[280px]">
                Hi.
              </div>
            </div>
          </div>
          <div
            className={
              animations.move_up_fast +
              " mockup-browser bg-base-100 absolute h-1/2 w-96 left-[-250px] bottom-5 shadow-2xl hidden min-[1024px]:block"
            }
          >
            <div className="mockup-browser-toolbar">
              <div className="input">invetu.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200 h-full">
              Hello!
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="flex flex-col items-center justify-center gap-4 p-6 md:p-24 md:py-20 w-full h-[50vh]"
      >
        <div className=" flex flex-col text-center gap-5">
          <span className="text-base font-bold uppercase text-primary ">
            Funcionalidades
          </span>
          <span className=" text-3xl">
            Monitore seus investimentos sem <b>nenhum custo</b> e <br /> com{" "}
            <b>qualidade</b>, como toda informação deve ser
          </span>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 p-6 md:px-24 md:py-20 w-full min-h-screen">
        <ParallaxSection />
      </section>
      <section
        id="about"
        className="flex flex-col items-center justify-center gap-4 p-6 md:px-24 md:py-20 w-full "
      >
        <div className=" flex flex-col text-center gap-5">
          <span className="text-base font-bold uppercase text-primary ">
            Sobre o projeto
          </span>
        </div>
        <div className="hero h-full bg-base-200 rounded-2xl">
          <div className="hero-content flex-col gap-5 lg:flex-row">
            <Image
              src="/logo.svg"
              width={356}
              height={356}
              alt="Investu logo"
            />
            <div>
              <h1 className="text-3xl font-bold">Invetu</h1>
              <p className="py-2 leading-5">
                A Invetu é um projeto (em breve open source), que visa fornecer
                dados de investimentos de forma gratuita e de fácil acesso para
                todos. Isso é feito através de dados públicos como B3, Banco
                Central e algumas APIs de terceiros, que são tratados e
                mostrados para os utilizadores do sistema.
              </p>
              <p className="py-2 leading-5">
                No momento a plataforma encontra-se em desenvolvimento e no
                estágio alpha, onde funcionalidades estão sendo adicionadas e
                testadas. Ainda não há uma data de lançamento para a versão beta
                mas você pode se <b>cadastrar</b> para receber atualizações
                sobre o projeto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
