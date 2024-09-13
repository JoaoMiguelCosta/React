# Portfólio UI - Web & Mobile

Este projeto é uma aplicação de portfólio desenvolvida em React, com um design responsivo tanto para web quanto para dispositivos móveis. A aplicação foi criada para atender a um desafio que exige a construção de uma aplicação completa em React, utilizando o VITE.

Antes de começar o projeto, analisei todas as páginas para identificar padrões comuns entre elas. Isso me ajudou a planejar como estruturar o projeto em React. Comecei com componentes pequenos e simples, e fui escalando para componentes mais complexos à medida que o projeto avançava. Esse processo me permitiu construir uma aplicação bem organizada e eficiente, seguindo um desenvolvimento gradual.

## 1. Menus e Navegação

- **Menu**: Utiliza menus dinâmicos com Header1 e Header2, controlados por um botão de hambúrguer (Hamburguer) para alternar entre opções.

### Navegação:

- **React Router**: Utiliza `react-router-dom` para gerenciar a navegação entre páginas. As rotas são definidas no componente `App`, que usa `BrowserRouter` e `Routes` para mapear URLs a componentes como `Home`, `Blog`, `Work`, `Contact`, e `WorkDetail`.
- **Navegação Programática**: Em páginas como `Home` e `Work`, `useNavigate` é usado para navegar para páginas de detalhes com base em um ID específico.

## 2. Gerenciamento de Estado e API

- **Formulário de Contato (ContactForm)**:
  - **Estados**: Usa `useState` para gerenciar os valores dos campos do formulário (`name`, `email`, `message`).
  - **Envio**: A função `handleSubmit` envia os dados para a API e limpa os campos após a submissão.
  - **Status**: Exibe o status da requisição com base na resposta da API.

- **Contexto de Contato (ContactContext e ContactProvider)**:
  - **Estado Global**: Utiliza `useState` para gerenciar o status das mensagens de contato.
  - **Função `sendContactMessage`**: Faz uma requisição POST para enviar dados de contato para a API e atualiza o status conforme a resposta.
  - **Provedor**: `ContactProvider` envolve a aplicação e fornece o contexto de contato a todos os componentes.

## 3. Componentes e Páginas

- **Home**: Exibe seções com títulos, imagens e componentes diversos. Utiliza `useNavigate` para redirecionar ao clicar em itens específicos.
- **Work**: Apresenta uma lista de trabalhos com títulos, imagens e detalhes interativos. Redireciona para páginas de detalhes com base em IDs clicados.
- **Contact**: Contém um formulário de contato e textos explicativos. Utiliza `ContactForm` para envio de mensagens e `TextContact` e `TextContactForm` para descrição.
- **Blog**: Mostra uma lista de posts de blog com títulos, imagens e textos. Cada post é apresentado com um layout de título, imagem e descrição.

## 4. Estilização com CSS Modules

- **CSS Modules**: O projeto utiliza CSS Modules para estilizar os componentes. Cada módulo CSS é importado e aplicado diretamente aos componentes correspondentes, garantindo escopo local para estilos e evitando conflitos. Isso é feito através da importação dos arquivos de estilo (como `work.module.css`, `contact.module.css`, etc.) e aplicação das classes CSS como propriedades dos componentes.

## 5. Lógica para Reutilização de Código

- **Componentes Reutilizáveis**:
  - **DescriptiveText**: Exibe uma lista de linhas de texto em parágrafos. Utiliza a prop `text` para renderizar diferentes conjuntos de texto.
  - **Category**: Renderiza categorias em parágrafos, utilizando a prop `category` e um `className` para estilização.
  - **Data**: Mostra informações de data em parágrafos, aplicando um `className` para estilização.

- **Componentes Combinados**:
  - **DataandCategory**: Combina componentes de dados e categorias, permitindo a reutilização em diferentes contextos. Recebe dois componentes (`DataComponent` e `CategoryComponent`) e um `className` para estilização.

- **Componentes Combinados com Lógica Condicional**:
  - **MyComponent1 a MyComponent15**: Utilizam o componente `DataandCategory` para combinar diferentes instâncias de `Data` e `Category`. Aplicam diferentes estilos e lógica condicional, como a alteração de classes com base na URL atual (`useLocation`).

## Dependências Instaladas

- **@fortawesome/free-solid-svg-icons**: Biblioteca de ícones SVG sólidos do FontAwesome.
- **@fortawesome/react-fontawesome**: Integra FontAwesome com React para usar ícones.
- **react**: Biblioteca principal para construir interfaces de usuário.
- **react-dom**: Biblioteca para manipulação do DOM com React.
- **react-icons**: Biblioteca para ícones adicionais no React.
- **react-router-dom**: Biblioteca para roteamento em aplicativos React.