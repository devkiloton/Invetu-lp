import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Invetu | Política de privacidade",
  description: "Política de privacidade da Invetu.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-5 p-6 md:px-24">
      <h2 className="text-3xl font-bold">
        <span>Política Privacidade</span>
      </h2>
      <p>
        <span>
          A sua privacidade é importante para nós. É política da Invetu
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no app{" "}
          <a
            className="text-blue-600 underline underline-offset-2"
            href="https://app.invetu.com"
          >
            Invetu
          </a>
          , e outros sites que possuímos e operamos.
        </span>
      </p>
      <p>
        <span>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </span>
      </p>
      <p>
        <span>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis ​​para evitar perdas e
          roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </span>
      </p>
      <p>
        <span>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </span>
      </p>
      <p>
        <span>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas&nbsp;
        </span>
        <Link
          className="text-blue-600 underline underline-offset-2"
          href="https://invetu.com/legal/privacy-policy"
        >
          políticas de privacidade
        </Link>
        <span>.</span>
      </p>
      <p>
        <span>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </span>
      </p>
      <p>
        <span>
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto connosco.
        </span>
      </p>
      <p>
        <span></span>
      </p>
      <h3 className="text-xl font-semibold">
        <span>Compromisso do Usuário</span>
      </h3>
      <p>
        <span>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que a Invetu oferece no site e com caráter enunciativo, mas
          não limitativo:
        </span>
      </p>
      <ul>
        <li>
          <span>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé a à ordem pública;
          </span>
        </li>
        <li>
          <span>
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica,{" "}
          </span>
          <span>
            {" "}
            ou azar, qualquer tipo de pornografia ilegal, de apologia ao
            terrorismo ou contra os direitos humanos;
          </span>
        </li>
        <li>
          <span>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) da Invetu, de seus fornecedores ou terceiros, para
            introduzir ou disseminar vírus informáticos ou quaisquer outros
            sistemas de hardware ou software que sejam capazes de causar danos
            anteriormente mencionados.
          </span>
        </li>
      </ul>
      <h3 className="text-xl font-semibold">
        <span>Mais informações</span>
      </h3>
      <p>
        <span>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </span>
      </p>
      <p>
        <span>
          Esta política é efetiva a partir de&nbsp;13 de dezembro de 2023 as
          22:59
        </span>
      </p>
    </div>
  );
}
