import { useState } from "react";

const initialForm = { name: "", email: "", subject: "", message: "", website: "" };

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "A enviar a sua mensagem..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Não foi possível enviar a mensagem.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Mensagem enviada. Enviámos também uma confirmação para o seu e-mail — verifique a pasta de spam caso não a encontre na caixa de entrada.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Ocorreu um erro. Por favor, tente novamente." });
    }
  };

  const isSending = status.type === "loading";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          Nome
          <input type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" maxLength="80" required />
        </label>
        <label>
          E-mail
          <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" maxLength="160" required />
        </label>
      </div>
      <label>
        Assunto
        <input type="text" name="subject" value={form.subject} onChange={handleChange} maxLength="120" required />
      </label>
      <label>
        Mensagem
        <textarea name="message" value={form.message} onChange={handleChange} rows="6" maxLength="3000" required />
      </label>
      <label className="contact-form__website" aria-hidden="true">
        Website
        <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
      </label>
      <button className="contact-form__submit" type="submit" disabled={isSending}>
        {isSending ? "A enviar..." : "Enviar mensagem"}
      </button>
      <p className={`contact-form__status contact-form__status--${status.type}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
};

export default ContactForm;
