"use client";
import Image from "next/image";
import animations from "@/animations/animations.module.css";
import FormNewsletter from "@/components/home/FormNewsletter";
import { setTheme } from "@/helpers/set-theme";
import { localStateManager } from "@/helpers/local-state-manager";

export default function Home() {
  const theme = localStateManager.theme.get();
  if (theme) setTheme(theme);
  return (
    <main className="flex min-h-screen flex-col">
      <section className=" flex justify-between items-center gap-4 p-24 py-20 w-full">
        <div className="self-start flex flex-col gap-20">
          <div className={animations.fade_up + " flex  flex-col gap-4"}>
            <span className="text-6xl font-bold max-w-3xl self-start">
              Você controlando seus investimentos
            </span>
            <span className="self-start text-lg max-w-2xl">
              Com a Foxbat você tem acesso a uma plataforma completa para
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
              " mockup-browser border bg-base-100 absolute h-1/2 w-96 left-[-250px] bottom-5 shadow-2xl "
            }
          >
            <div className="mockup-browser-toolbar">
              <div className="input">foxbat.cloud</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200 h-full">
              Hello!
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 p-24 py-20 w-full h-screen">
        <div
          className={animations.fade_up + " flex flex-col text-center gap-5"}
        >
          <span className="text-base font-bold uppercase text-primary ">
            Funcionalidades
          </span>
          <span className=" text-3xl">
            Monitore seus investimentos sem <b>nenhum custo</b> e <br /> com{" "}
            <b>qualidade</b>, como toda informação deve ser
          </span>
        </div>
      </section>
    </main>
  );
}
