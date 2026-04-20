# Guia de Estilo e Design

Este documento define as diretrizes visuais para o nosso aplicativo, baseadas na análise de design moderno, vibrante e limpo, inspirado no portal "Seara Minha Receita".

## 1. Identidade Visual e Estilo Geral
O design deve ser **moderno, vibrante e limpo**, com forte ênfase em fotografia (como imagens de receitas).
*   **Espaçamento:** Utilize espaços em branco (whitespace) amplos para equilibrar a saturação das cores e destacar o conteúdo.
*   **Sensação:** A interface deve proporcionar uma experiência amigável, energética e fácil de navegar.

## 2. Paleta de Cores
A paleta de cores foca em tons quentes para abrir o apetite, com cores específicas para categorização.

*   **Cor Primária:** Laranja Vibrante (`#FF5B0D` ou `rgb(255, 91, 13)`).
    *   *Uso:* Cabeçalhos, elementos de destaque principal, ícones importantes e chamadas para ação primárias.
*   **Cor de Ação Secundária (Confirmação/Sucesso):** Verde Escuro (`#346E4A`).
    *   *Uso:* Botões de confirmação, interações positivas em modais.
*   **Cores de Categorias (Tags/Filtros):**
    *   **Aves/Frango:** Laranja-avermelhado (`#E35D3B`)
    *   **Peixes/Frutos do Mar:** Azul Oceano (`#347DA0`)
    *   **Carne Suína:** Magenta (`#D52B6A`)
    *   **Carnes Bovinas:** Vermelho Vivo (`#D52B2B`)
    *   **Vegetariano / 100% Vegetal:** Verde Alface (`#8DB53B`)
    *   **Pães e Massas:** Ocre/Dourado (`#8D7A3B`)
*   **Fundo e Texto:** Fundos predominantemente claros (branco ou off-white) para maximizar o contraste com as cores vibrantes. Texto em cinza escuro para melhor legibilidade.

## 3. Tipografia
*   **Fonte Principal:** Sugerimos fontes modernas, geométricas e amigáveis, como **Lufga**, **Inter**, **Outfit** ou **Poppins** (sem serifa).
*   **Hierarquia e Pesos:**
    *   **Títulos (H1 e H2):** Peso `600` (Semi-bold) ou `700` (Bold). Tamanhos generosos, variando entre `30px` e `42px`.
    *   **Corpo de Texto (Body):** Tamanho legível (ex: `16px`), com peso regular (`400`).

## 4. Componentes de Interface (UI)

### Botões
*   **Botão Primário (Estilo "Pill"):**
    *   Formato de "pílula" com arredondamento total (`border-radius: 100px` ou `9999px` no Tailwind).
    *   *Uso:* Barra de busca, botões de ação principal (CTA), enviar formulários.
*   **Botão Secundário:**
    *   Formato retangular com cantos levemente arredondados (`border-radius: 2px` a `4px`).
    *   *Uso:* Ações secundárias, banners de consentimento (cookies), cancelamentos.
*   **Efeitos (Hover):** Adicionar transições suaves de opacidade ou ligeiro escurecimento da cor de fundo ao passar o mouse.

### Campos de Entrada (Inputs)
*   **Design:** Fundos brancos com bordas suaves e arredondamento médio (`border-radius: 12px` ou `9999px` para barra de busca principal).
*   **Elementos Visuais:** Utilizar ícones internos (à esquerda ou direita) para facilitar a identificação do tipo de dado (ex: ícone de usuário, e-mail, lupa para busca).
*   **Barra de Busca:** Para busca geral de receitas (por título, descrição, categoria, tags), usar estilo "pill" (`border-radius: 9999px`) com ícone de lupa à esquerda e *padding* generoso.

### Tags Secundárias (Filtros e Atributos)
*   Além das "Cores de Categorias" principais, as receitas podem ter tags secundárias (ex: "fácil", "forno", "doce").
*   **Design:** Fundo cinza claro (`#F3F4F6`), texto em cinza escuro (`var(--color-text-muted)`), cantos arredondados (estilo "pill" ou `4px`) e fonte pequena (`12px` a `14px`). No estado ativo/selecionado, devem inverter para a **Cor Primária** (fundo laranja, texto branco).

### Cards (Receitas/Itens)
*   **Bordas:** Arredondamento médio (`border-radius: 8px` a `16px`).
*   **Elementos Internos:** Uso de *tags* ou *badges* coloridos sobre a imagem ou no topo do card utilizando as "Cores de Categorias" definidas acima.
*   **Sombras:** Sombras leves e difusas para destacar o card do fundo (efeito "elevado").

## 5. Modais, Popups e Notificações (Toasts)

### Modais e Popups
*   **Estrutura:** Fundo branco, cantos arredondados (mesmo padrão dos cards, ex: `16px`).
*   **Overlay (Fundo):** Utilizar uma sobreposição escura semi-transparente (ex: preto com 40-50% de opacidade) para isolar o modal do restante do conteúdo.

### Notificações e Validação (Feedback)
*   **Validação de Formulários (Inline):** Os erros não usam necessariamente "toasts" separados. O feedback é dado diretamente no campo de entrada, alterando a cor da borda do input para **Vermelho Vivo** quando há um erro de validação.
*   **Toasts de Sucesso/Informação:** Se aplicável, devem seguir o formato de pílula (ou arredondamento médio), aparecendo na parte superior ou inferior da tela, utilizando as cores primárias ou de sucesso.
