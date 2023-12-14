import Link from "next/link";
import React from "react";

export default function Legal() {
  return (
    <div className="min-h-[65vh] p-6 md:px-24">
      <ul className="flex flex-col md:flex-row gap-5 w-full">
        <li>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Política de privacidade</h2>
              <p>
                Documento que explica as obrigações da Invetu no que tange o
                manuseio dos dados do usuário e os direitos daqueles que
                utilizam a plataforma.
              </p>
              <div className="card-actions justify-end">
                <Link href="/legal/privacy-policy" className="btn btn-primary">
                  Acessar
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Termos de serviço</h2>
              <p>
                Documento que contêm as provisões que todos usuários devem
                concordar para utilizar a plataforma da Invetu e suas
                ferramentas.
              </p>
              <div className="card-actions justify-end">
                <Link href="/legal/terms-of-use" className="btn btn-primary">
                  Acessar
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
