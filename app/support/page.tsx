import React from "react";
import animations from "@/animations/animations.module.css";

export default function Support() {
  return (
    <div className="flex flex-col">
      <section className="flex justify-between flex-col md:flex-row items-center gap-12 md:gap-4 p-6 md:px-24 md:py-20 w-full">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <div
            className={
              animations.fade_up + " text-center lg:text-left self-start"
            }
          >
            <h1 className="text-5xl font-bold text-primary">
              Ajuda, dúvidas, sugestão? Esse é o seu momento!
            </h1>
            <p className="py-6 leading-5">
              Devido a Invetu ainda estar em fase de desenvolvimento e ser um
              projeto sem fins lucrativos, feedbacks, sugestões e dúvidas são
              muito importantes para o desenvolvimento do projeto e são muito
              bem vindas, analisadas e encorajadas.
            </p>
          </div>
          <div
            className={
              animations.move_right_fast +
              " card shrink-0 w-full max-w-md shadow-2xl bg-base-100"
            }
          >
            <form className="card-body rounded-xl">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensagem</span>
                </label>
                <textarea
                  className="textarea min-h-[150px] textarea-bordered text-base"
                  placeholder="Em que podemos te ajudar?"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
