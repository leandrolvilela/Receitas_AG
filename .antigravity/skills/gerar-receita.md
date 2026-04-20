# Skill: Gerar Receita

## Descrição
Esta skill ensina o Antigravity a como gerar e formatar novas receitas para o projeto, utilizando o padrão estabelecido no arquivo `src/content/recipes/exemplo-receita.md`.

## Instruções

Sempre que o usuário pedir para "gerar uma receita", "criar uma receita" ou acionar a skill "gerar receita", siga rigorosamente estes passos:

1. **Coleta de Informações:**
   - Verifique se o usuário já forneceu todas as informações necessárias para a receita (Título, Descrição, Categoria, URL da Imagem, Tempo de Preparo, Tempo de Cozimento, Porções, Introdução, Ingredientes e Modo de Preparo).
   - Se faltar alguma informação, crie o conteúdo com base no título/tema da receita fornecida utilizando sua criatividade, ou peça os detalhes, dependendo do contexto.

2. **Criação do Arquivo:**
   - Crie um novo arquivo markdown (`.md`) no diretório `src/content/recipes/`.
   - O nome do arquivo deve ser em formato *kebab-case* (ex: `bolo-de-chocolate.md`), baseado no título da receita.

3. **Estrutura do Modelo:**
   - Utilize a estrutura de Frontmatter e corpo abaixo, que é baseada no `exemplo-receita.md`.

```markdown
---
title: "[Título da Receita]"
description: "[Breve descrição atraente da receita]"
category: "[Categoria, ex: Aves, Sobremesas, Massas]"
tags: ["[tag1]", "[tag2]", "[tag3]"]
image: "[URL de uma imagem do Unsplash ou similar]"
prepTime: "[Tempo de preparo, ex: 20 min]"
cookTime: "[Tempo de cozimento, ex: 1h 10 min]"
servings: "[Rendimento, ex: 4 porções]"
---

[Um ou dois parágrafos introdutórios descrevendo o prato, sua origem ou por que é delicioso.]

## Ingredientes

- [Quantidade] [Ingrediente 1]
- [Quantidade] [Ingrediente 2]
- ...

## Modo de Preparo

1. **[Passo 1]:** [Descrição detalhada do passo 1]
2. **[Passo 2]:** [Descrição detalhada do passo 2]
3. ...

Bom apetite!
```

4. **Validação de Categoria (Schema):**
   - O projeto utiliza validação estrita via Astro Content Collections. Após definir a categoria da receita, verifique o arquivo `src/content.config.ts` (ou `src/content/config.ts`).
   - Se a categoria escolhida não estiver na lista de opções do `z.enum()` para a coleção `recipes`, adicione-a para evitar erros de compilação (como `InvalidContentEntryDataError`).

5. **Regras Adicionais:**
   - Certifique-se de não usar aspas no frontmatter se não for necessário, ou mantenha como o padrão.
   - Sempre adicione uma imagem representativa (use uma imagem estática real do Unsplash ou similar, ex: `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1470&auto=format&fit=crop`). Não use source.unsplash.com pois está descontinuado.
   - Mantenha um tom amigável e apetitoso no texto da receita.
