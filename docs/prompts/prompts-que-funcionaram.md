# Prompts que funcionaram bem

A regra `.github/ai-usage-rules.md` pede para guardar 1 ou 2 prompts que funcionaram bem, para mostrar na apresentação.

> ⚠️ **A equipe precisa confirmar a escolha.** Estes dois foram sugeridos pela IA na Fase 1, com base no histórico em `docs/logs-de-mudanca/`.

---

## 1. Auditoria das regras

**Data:** 16/11/2026

**Prompt:**

> Verifique se o site obedece todas as rules de nosso site e mostre os que falta.

**Por que funcionou:**
- O pedido é curto e aponta para regras que já estavam escritas na pasta `.github/`.
- A IA conferiu o site contra as 7 regras e devolveu duas listas: o que já estava certo e 16 itens que faltavam.
- Essa lista virou o prompt de correções, em [prompt-aplicar-correcoes-regras.md](prompt-aplicar-correcoes-regras.md).

**Lição:** regras escritas antes deixam os pedidos à IA mais simples e as respostas mais fáceis de conferir.

---

## 2. Correção de um pedido ambíguo sobre as fontes

**Data:** 15/11/2026

**Primeiro prompt (ambíguo):**

> Preencha as partes que estão pendentes nas fontes ou as retire.

**Prompt de correção (funcionou):**

> Quero que você mantenha as fontes, e coloque as informações faltantes das páginas que são requisitadas e não as retire.

**Por que funcionou:**
- O primeiro pedido deixava a IA apagar fontes incompletas, o que a equipe não queria.
- O segundo diz o que fazer ("coloque as informações faltantes") e o que não fazer ("não as retire").
- Com isso, a IA completou as referências conferindo cada fonte. Só ficaram pendentes os autores de um material da USP que exige login.

**Lição:** diga também o que a IA **não** deve fazer. Um "ou" no pedido deixa a escolha para a IA.
