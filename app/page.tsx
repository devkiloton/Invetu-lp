import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between items-center p-24 py-20">
      <div className="flex self-start flex-col gap-4">
        <span className="text-7xl font-bold max-w-3xl self-start">
          Você controlando seus investimentos
        </span>
        <span className="self-start text-lg max-w-2xl">
          Com a Foxbat você tem acesso a uma plataforma completa para gerenciar
          seus investimentos, com dados em tempo real e de forma simples e
          intuitiva.
        </span>
      </div>
      <div className="relative">
        <div
          className="mockup-phone
        "
        >
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo h-[497px] w-[280px]">
              Hi.
            </div>
          </div>
        </div>
        <div className="mockup-browser border bg-base-100 absolute h-1/2 w-96 left-[-250px] bottom-0">
          <div className="mockup-browser-toolbar">
            <div className="input">foxbat.cloud</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200 h-full">
            Hello!
          </div>
        </div>
      </div>
    </main>
  );
}
