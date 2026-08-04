# Configuração do formulário com SMTP do iCloud no EmailJS

O formulário usa o EmailJS com estes identificadores já existentes:

- Serviço: `service_uf5yx34`
- Modelo: `template_jxtm0up`

O teste técnico retornou `SMTP: Invalid login (535)`. Isso confirma que a senha ou o usuário SMTP salvos no serviço precisam ser atualizados.

## Dados do SMTP do iCloud

- Servidor SMTP: `smtp.mail.me.com`
- Porta: `587`
- Segurança: `STARTTLS` ou `TLS`
- Autenticação: obrigatória
- Usuário: endereço completo do iCloud, normalmente `seuusuario@icloud.com`
- Senha: senha específica de app, não a senha principal da Conta Apple

O remetente pode ser `contato@rogeriojunior.com.br` desde que esse endereço pertença ao domínio personalizado configurado na mesma conta do iCloud.

## 1. Gerar uma senha específica de app

1. Acesse [account.apple.com](https://account.apple.com/) e entre na Conta Apple que administra o e-mail.
2. Abra **Início de sessão e segurança**.
3. Entre em **Senhas específicas de apps**.
4. Clique em **Gerar uma senha específica de app**.
5. Use o nome `EmailJS - Formulário Rogério Júnior`.
6. Copie a senha gerada.

Não envie essa senha por WhatsApp, e-mail ou dentro do código do site.

## 2. Atualizar o serviço no EmailJS

1. Acesse [EmailJS](https://dashboard.emailjs.com/admin).
2. Abra **Email Services**.
3. Selecione o serviço `service_uf5yx34`.
4. Edite ou reconecte o serviço SMTP.
5. Preencha:

| Campo | Valor |
|---|---|
| SMTP host | `smtp.mail.me.com` |
| Porta | `587` |
| Segurança | `STARTTLS` ou `TLS` |
| Usuário | seu endereço completo `@icloud.com` |
| Senha | senha específica de app criada na etapa anterior |
| E-mail remetente | `contato@rogeriojunior.com.br` |
| Nome remetente | `Rogério Júnior` |

6. Salve e use o botão de teste do próprio EmailJS.

Se o EmailJS pedir apenas a conexão e não mostrar todos esses campos, remova e recrie o serviço como SMTP personalizado, mantendo depois o identificador usado pelo site ou atualizando o ID no componente `ContactForm.tsx`.

## 3. Atualizar o modelo do e-mail

Em **Email Templates**, abra `template_jxtm0up` e confira se o corpo possui:

```text
Novo lead recebido pelo site

Nome: {{name}}
E-mail: {{email}}
WhatsApp: {{phone}}
Interesse: {{service}}

Mensagem:
{{message}}
```

Configuração recomendada do modelo:

- **To Email:** `contato@rogeriojunior.com.br`
- **From Name:** `Rogério Júnior - Site`
- **From Email:** o remetente permitido pelo serviço conectado
- **Reply-To:** `{{email}}`
- **Subject:** `Novo lead do site - {{service}}`

## 4. Testar o fluxo completo

1. Abra o site e preencha todos os campos com dados de teste.
2. Envie o formulário.
3. Confirme a mensagem verde de sucesso.
4. Verifique a caixa de entrada e a pasta de spam do iCloud.
5. Responda ao e-mail para confirmar que o `Reply-To` aponta para o endereço do lead.
6. No GTM e no Pixel, confira que o evento de formulário só aparece depois do envio bem-sucedido.

Se a senha principal da Conta Apple for alterada, as senhas específicas de apps são revogadas. Nesse caso, gere outra e atualize o serviço do EmailJS.

## Referências oficiais

- [Ajustes dos servidores de e-mail do iCloud](https://support.apple.com/102525)
- [Usar senhas específicas de apps](https://support.apple.com/102654)
