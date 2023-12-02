"use client";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ContainerElement from "../shared/ContainerElement";

export default function FormNewsletter() {
  const emailRef = useRef<any>();
  const nameRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);
  // Add these
  const handleSubmit = async (element: any) => {
    element.preventDefault();
    const serviceId = process.env.SERVICE_ID as string;
    const templateId = process.env.TEMPLATE_ID as string;
    const publicKey = process.env.PUBLIC_KEY as string;
    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: nameRef.current?.value,
          recipient: emailRef.current?.value,
        },
        publicKey
      );
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <ContainerElement>
        <p className="leading-5 font-medium">
          Saiba o que haverá nas próximas versões
        </p>
        <form className="form flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="form_group">
            <input
              ref={nameRef}
              placeholder="Seu nome"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form_group">
            <input
              ref={emailRef}
              type="email"
              placeholder="Seu email"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-primary w-full">
            {loading ? <span className="loading loading-spinner"></span> : null}
            Receber atualizações
          </button>
        </form>
      </ContainerElement>
    </section>
  );
}
