"use client";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function SupportForm() {
  const emailRef = useRef<any>();
  const messageRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const serviceId = process.env.SERVICE_ID as string;
  const templateId = process.env.TEMPLATE_ID_SUPPORT as string;
  const publicKey = process.env.PUBLIC_KEY as string;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => emailjs.init(publicKey), []);
  const handleSubmit = async (element: any) => {
    element.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          message: messageRef.current?.value,
          recipient: emailRef.current?.value,
        },
        publicKey
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="card-body rounded-xl" onSubmit={handleSubmit}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Seu endereço de email</span>
        </label>
        <input
          ref={emailRef}
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
          ref={messageRef}
          className="textarea min-h-[150px] textarea-bordered text-base"
          placeholder="Em que podemos te ajudar?"
        ></textarea>
      </div>
      <button className="btn btn-primary w-full mt-3">
        {loading ? <span className="loading loading-spinner"></span> : null}
        Receber atualizações
      </button>
    </form>
  );
}
