# Documentação do Aplicativo de Receitas

Este documento serve como guia detalhado sobre o funcionamento, arquitetura e funcionalidades do aplicativo de receitas. Ele deve ser utilizado como contexto para qualquer nova implementação ou manutenção.

## 1. Visão Geral
O projeto é uma aplicação web moderna de receitas culinárias construída com o framework **Astro**. A aplicação não utiliza um banco de dados tradicional; em vez disso, baseia-se em um sistema de gerenciamento de conteúdo baseado em arquivos Markdown (`.md`), gerenciados pelas **Content Collections** do Astro.

O objetivo do aplicativo é fornecer um catálogo de receitas visualmente atraente, rápido e fácil de navegar, com forte ênfase em um design premium (inspirado no site "Seara Minha Receita").

## 2. Arquitetura e Tecnologias
- **Framework:** Astro (versão 6+)
- **Armazenamento de Dados:** Markdown (`.md`) via Content Collections
- **Estilização:** CSS Vanilla e variáveis CSS nativas (seguindo um Design System customizado)
- **Validação de Esquema:** Zod (integrado ao Astro Content Collections)

## 3. Estrutura do Projeto
Os principais diretórios da aplicação estão organizados da seguinte forma:
- `src/content/recipes/`: Onde todas as receitas (`.md`) são armazenadas.
- `src/pages/`: Define as rotas da aplicação.
  - `index.astro`: Página inicial (listagem de receitas).
  - `receitas/[id].astro`: Página dinâmica de detalhes de uma receita.
- `src/components/`: Componentes visuais reutilizáveis (ex: `RecipeCard.astro`, `CategoryBadge.astro`, `Header.astro`, `Layout.astro`).
- `src/content.config.ts`: Define o esquema (schema) e a configuração da coleção de receitas.
- `.antigravity/skills/`: Contém automações/skills do assistente IA (ex: `gerar-receita.md`).
- `guia_de_design.md`: Documento fundamental que define a identidade visual do projeto (cores, tipografia, componentes).

## 4. Funcionalidades (Features)

### 4.1. Listagem de Receitas (Home - `/`)
- Exibe um grid responsivo com os cartões de todas as receitas disponíveis.
- Utiliza o componente `RecipeCard.astro` para mostrar a imagem, título, descrição curta e o selo da categoria da receita.

### 4.2. Página de Detalhes da Receita (`/receitas/[id]`)
- Renderiza o conteúdo do arquivo Markdown de forma estilizada.
- Exibe um cabeçalho rico com:
  - Imagem de capa grande.
  - Título e descrição.
  - Categoria (badge colorido).
  - Informações de preparo em destaque: Tempo de Preparo, Tempo de Cozimento e Rendimento.
- Estiliza automaticamente listas de ingredientes (bullets customizados) e instruções passo-a-passo no corpo do Markdown.

### 4.3. Design System Premium
- A aplicação segue estritamente o `guia_de_design.md`.
- Cores predefinidas (Primária, Superfície, Fundo, Texto) gerenciadas por variáveis CSS.
- Efeitos visuais modernos: Sombras suaves (`box-shadow`), bordas arredondadas, hover states interativos, garantindo um visual *wow* e imersivo.

## 5. Estrutura de Dados (Modelo da Receita)
Cada receita é um arquivo `.md` que obrigatoriamente contém um bloco de meta-dados (Frontmatter) YAML no início, validado pelo Zod no `content.config.ts`.

### Esquema do Frontmatter:
- `title` (string, obrigatório): Título da receita.
- `description` (string, obrigatório): Breve resumo do prato.
- `category` (enum, obrigatório): Deve ser uma de: `'Aves'`, `'Peixes e Frutos do Mar'`, `'Carne Suína'`, `'Carne Bovina'`, `'Vegetariano'`, `'Pães e Massas'`, `'Sobremesas'`.
- `image` (string, opcional): URL para a imagem da receita.
- `prepTime` (string, opcional): Ex: "15 min".
- `cookTime` (string, opcional): Ex: "30 min".
- `servings` (string, opcional): Ex: "4 porções".

### Corpo do Conteúdo:
O corpo do arquivo `.md` contém a narrativa da receita, tipicamente dividida em sessões como `## Ingredientes` e `## Modo de Preparo`, que são convertidas em HTML na renderização.

## 6. Automação e "Skills" (Criação de Novas Receitas)
A aplicação conta com uma ferramenta customizada para facilitar a criação de novos conteúdos através de IA.

Existe uma skill definida em `.antigravity/skills/gerar-receita.md`.
Sempre que for necessário adicionar uma nova receita, o desenvolvedor pode invocar esta skill. A skill instrui o assistente a:
1. Gerar um novo prato ou seguir o pedido específico do usuário.
2. Criar um arquivo `.md` na pasta `src/content/recipes/`.
3. Preencher corretamente o Frontmatter e garantir que a categoria pertença ao esquema aceito.
4. Redigir os ingredientes e instruções num tom de voz apetitoso.

## 7. Fluxo para Novas Implementações
Ao adicionar novas funcionalidades ou páginas, observe as seguintes diretrizes:
1. **Design First:** Qualquer novo componente deve seguir as cores e espaçamentos do `guia_de_design.md`.
2. **Sem Banco de Dados:** Se a nova feature exigir armazenamento de dados estáticos (ex: autores, dicas), utilize **Content Collections** adicionais ao invés de introduzir um banco de dados externo.
3. **Páginas Estáticas:** Por padrão, o Astro pré-renderiza páginas de conteúdo estático para máxima performance. Mantenha essa premissa.
