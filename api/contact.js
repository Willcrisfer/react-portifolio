/* eslint-env node */
import nodemailer from "nodemailer";

const limits = { name: 80, email: 160, subject: 120, message: 3000 };
const clean = (value, maxLength) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";
const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
})[character]);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Método não permitido." });
  }

  let body;
  try {
    body = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
  } catch {
    return response.status(400).json({ message: "Pedido inválido." });
  }

  const name = clean(body.name, limits.name);
  const email = clean(body.email, limits.email);
  const subject = clean(body.subject, limits.subject).replace(/[\r\n]+/g, " ");
  const message = clean(body.message, limits.message);
  const website = clean(body.website, 200);

  if (website) return response.status(200).json({ message: "Mensagem recebida." });

  if (!name || !isValidEmail(email) || !subject || !message) {
    return response.status(400).json({ message: "Preencha corretamente todos os campos." });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    return response.status(500).json({ message: "O formulário ainda não está configurado." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    await Promise.all([
      transporter.sendMail({
        from: `Portfólio Willian Fernandes <${gmailUser}>`,
        to: gmailUser,
        replyTo: email,
        subject: `Novo contacto: ${subject}`,
        text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\n${message}`,
        html: `<h2>Novo contacto pelo portfólio</h2><p><strong>Nome:</strong> ${safeName}</p><p><strong>E-mail:</strong> ${safeEmail}</p><p><strong>Assunto:</strong> ${safeSubject}</p><p><strong>Mensagem:</strong><br />${safeMessage}</p>`,
      }),
      transporter.sendMail({
        from: `Willian Fernandes <${gmailUser}>`,
        to: email,
        replyTo: gmailUser,
        subject: "Recebi a sua mensagem — Willian Fernandes Music",
        text: `Olá, ${name}!\n\nObrigado pelo contacto. Recebi a sua mensagem sobre “${subject}” e responderei assim que possível.\n\nWillian Fernandes Music`,
        html: `<p>Olá, ${safeName}!</p><p>Obrigado pelo contacto. Recebi a sua mensagem sobre <strong>“${safeSubject}”</strong> e responderei assim que possível.</p><p>Willian Fernandes Music</p>`,
      }),
    ]);
    return response.status(200).json({ message: "Mensagem enviada com sucesso." });
  } catch {
    return response.status(502).json({ message: "Não foi possível enviar agora. Tente novamente em alguns minutos." });
  }
}
