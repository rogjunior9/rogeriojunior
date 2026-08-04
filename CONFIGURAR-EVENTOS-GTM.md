# Configuração dos eventos de lead no Google Tag Manager

Este site já envia um evento para o `dataLayer` sempre que:

- alguém clica em um link que abre o WhatsApp;
- o formulário é enviado e o servidor confirma o recebimento.

O evento enviado é `generate_lead` e possui estes dados:

| Variável | Exemplo | Finalidade |
|---|---|---|
| `event` | `generate_lead` | Nome que ativa o gatilho no GTM |
| `event_name` | `Lead` | Nome padronizado do evento |
| `lead_source` | `whatsapp` ou `formulario` | Origem do lead |
| `lead_location` | `cabecalho_orcamento` ou `formulario_contato` | Local da conversão |
| `lead_service` | `Tráfego pago` | Serviço selecionado no formulário |
| `event_id` | identificador único | Ajuda a evitar duplicidade em integrações futuras |

## 1. Abrir o contêiner

1. Acesse [Google Tag Manager](https://tagmanager.google.com/).
2. Abra o contêiner `GTM-K3H6KMWF`.
3. Entre no espaço de trabalho que será publicado.

## 2. Criar as variáveis da camada de dados

Em **Variáveis > Variáveis definidas pelo usuário > Nova**, crie quatro variáveis do tipo **Variável da camada de dados**. Use a versão 2 e salve com estes nomes:

| Nome no GTM | Nome da variável da camada de dados |
|---|---|
| `DLV - Lead Source` | `lead_source` |
| `DLV - Lead Location` | `lead_location` |
| `DLV - Lead Service` | `lead_service` |
| `DLV - Event ID` | `event_id` |

## 3. Criar o gatilho de lead

1. Acesse **Acionadores > Novo**.
2. Nomeie como `CE - Generate Lead`.
3. Em **Configuração do acionador**, selecione **Evento personalizado**.
4. Em **Nome do evento**, informe exatamente `generate_lead`.
5. Escolha **Todos os eventos personalizados** e salve.

O uso de um evento personalizado é importante porque o formulário é enviado por JavaScript e o evento só ocorre depois da confirmação do servidor.

## 4. Enviar o evento ao GA4

1. Acesse **Tags > Nova**.
2. Nomeie como `GA4 - Generate Lead`.
3. Selecione **Google Analytics: evento do GA4**.
4. Use o ID de métricas `G-P2087D90NL`.
5. Em **Nome do evento**, informe `generate_lead`.
6. Adicione estes parâmetros:

| Parâmetro | Valor |
|---|---|
| `method` | `{{DLV - Lead Source}}` |
| `lead_location` | `{{DLV - Lead Location}}` |
| `lead_service` | `{{DLV - Lead Service}}` |
| `event_id` | `{{DLV - Event ID}}` |

7. Em **Acionamento**, selecione `CE - Generate Lead`.
8. Salve.

## 5. Meta Pixel: cuidado com evento duplicado

O Pixel `457252723504341` e o evento padrão `Lead` já estão instalados diretamente no site. O site também respeita o consentimento: o Pixel só é carregado após o visitante aceitar os cookies.

**Não crie outra tag `fbq('track', 'Lead')` no GTM enquanto essa implementação direta estiver ativa.** Isso faria o Gerenciador de Eventos da Meta contar dois leads para uma única ação.

O evento no `dataLayer` foi mantido para alimentar o GA4, o Google Ads e futuras integrações. Se no futuro o Pixel for migrado totalmente para o GTM, remova primeiro o disparo direto do site e somente depois crie a tag equivalente no contêiner.

## 6. Testar antes de publicar

1. No GTM, clique em **Visualizar**.
2. Informe `https://www.rogeriojunior.com.br/` e conecte o Tag Assistant.
3. Aceite os cookies no site.
4. Teste um clique no botão do WhatsApp.
5. Confirme no Tag Assistant a entrada de `generate_lead` e os valores de `lead_source` e `lead_location`.
6. Faça um envio de teste do formulário.
7. Confirme outro `generate_lead`, agora com `lead_source = formulario` e `lead_service` preenchido.
8. Confira no painel **DebugView** do GA4 se `generate_lead` foi recebido.
9. No Gerenciador de Eventos da Meta, use **Testar eventos** para conferir `PageView` e `Lead`.

## 7. Publicar

Depois que os dois testes funcionarem:

1. Clique em **Enviar** no GTM.
2. Nomeie a versão, por exemplo: `Eventos de lead - WhatsApp e formulário`.
3. Descreva o que foi criado e publique.

## Referências oficiais

- [Acionador de evento personalizado](https://support.google.com/tagmanager/answer/7679219?hl=pt-BR)
- [Configurar eventos do GA4 no Tag Manager](https://support.google.com/tagmanager/answer/13034206?hl=pt-BR)
- [Camada de dados do Tag Manager](https://support.google.com/tagmanager/answer/13352957?hl=pt-BR)
