import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Nada encontrado",
  description: "Não encontramos o que você está procurando.",
};

export default function NotFound() {
  return (
    <div className="h-[60vh] flex justify-center items-center">
      <div className="text-center hero-content text-3xl font-bold">
        <div>
          <h1>Página não encontrada.</h1>
          <div className="mt-4">
            <Link href="/" className="link-primary">
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
