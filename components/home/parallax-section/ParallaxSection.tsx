import * as React from "react";
import Image from "next/image";
import WrapperIcon from "@/components/shared/WrapperIcon";

export default function ParallaxSection() {
  return (
    <div className="relative w-full">
      <div className="flex justify-center gap-8">
        <div className="h-[300vh] hidden lg:flex flex-col justify-between gap-2 items-center">
          <div className="sticky top-[128px]">
            <WrapperIcon>
              <Image
                src="vectors/chart-up.svg"
                width="72"
                height="72"
                alt="Representação de um gráfico subindo"
              />
            </WrapperIcon>
          </div>
          <div className=" sticky top-[246px]">
            <WrapperIcon>
              <Image
                src="vectors/money.svg"
                width="72"
                height="72"
                alt="Representação de dinheiro entrando no cartão de crédito"
              />
            </WrapperIcon>
          </div>
          <div className=" sticky top-[364px]">
            <WrapperIcon>
              <Image
                src="vectors/dollar-sign.svg"
                width="72"
                height="72"
                alt="Representação de um cifrão de dólar"
              />
            </WrapperIcon>
          </div>
          <div className=" sticky top-[482px]">
            <WrapperIcon>
              <Image
                src="vectors/cpu.svg"
                width="72"
                height="72"
                alt="Representação de uma CPU"
              />
            </WrapperIcon>
          </div>
          <div className="sticky top-[544px] flex items-center gap-x-4 bg-base-100 py-6 px-8  rounded-lg shadow-lg">
            <Image src="/logo.svg" width="72" height="72" alt="Investu logo" />
            <span className="font-bold text text-5xl">Invetu</span>
          </div>
        </div>
        <div className="h-[100svh] lg:h-[300vh] flex flex-col justify-between w-fit">
          <div className="lg:h-[118px] top-[246px] flex justify-center flex-col gap-2">
            <span className="font-semibold text-3xl text-primary">
              Ações, BDRs, FIIs, ETFs e muito mais
            </span>
            <span className="leading-5">
              Tenha as cotações, dividendos, rendimentos, bonificações,
              <br />
              desdobramentos, reagrupamentos e muito mais atualiazados <br />
              automaticamente na sua mão.
            </span>
          </div>
          <div className="lg:h-[118px] top-[256px] flex justify-start flex-col gap-2">
            <span className="font-semibold text-3xl text-primary">
              Renda fixa
            </span>
            <span className="leading-5">
              Tem investimentos em renda fixa? Não se preocupe, também <br />
              calculamos o rendimento deles para você.
              <br /> Não importa se o indexador é <b>CDI</b>, <b>IPCA</b>,{" "}
              <b>SELIC</b> ou qualquer outro.
            </span>
          </div>
          <div className="lg:h-[118px] top-[352px] flex justify-start flex-col gap-2">
            <span className="font-semibold text-3xl text-primary">
              Ações americanas
            </span>
            <span className="leading-5">
              Monitore seus investimentos na bolsa de valores americana
              <br /> sem delays absurdos
            </span>
          </div>
          <div className="lg:h-[118px] top-[448px] flex justify-start flex-col gap-2">
            <span className="font-semibold text-3xl text-primary">
              Criptomoedas
            </span>
            <span className="leading-5">
              Tem Bitcoin, Ethereum, USDT ou qualquer outra criptomoeda? <br />
              Aqui você vê os pumps and dumps de perto.
            </span>
          </div>
          <div className="lg:h-[118px] top-[544px] flex justify-center flex-col gap-2">
            <span className="font-semibold text-3xl text-primary">
              Tudo isso em um só lugar
            </span>
            <span>
              Para que você não perda seu patrimônio mais valioso, seu tempo.
            </span>
          </div>
        </div>
      </div>
      <div className="lw-full flex justify-center mt-20">
        <span className="text-center text-xs text-gray-500">
          *Nem todas as funcionalidades citadas acima estão implementadas,
          estando ainda em desenvolvimento
        </span>
      </div>
    </div>
  );
}
