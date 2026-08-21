# Portfólio musical

Portfólio em React e Vite, publicado no Vercel.

## Formulário de contacto

O endpoint `/api/contact` envia a mensagem para o Gmail configurado e uma confirmação para o visitante. Configure estas variáveis nos ambientes Production, Preview e Development do projeto no Vercel:

```text
GMAIL_USER=seu-email@gmail.com
GMAIL_APP_PASSWORD=sua-palavra-passe-de-aplicacao
```

A palavra-passe de aplicação requer a verificação em dois passos da conta Google. Nunca utilize a palavra-passe normal da conta e não adicione credenciais ao ficheiro `.env.example`.

Para testar a função localmente, copie `.env.example` para `.env.local`, preencha apenas a cópia local e execute `vercel dev`.
