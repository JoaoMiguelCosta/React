# Portfólio UI - Web & Mobile

Este projeto é uma **aplicação de portfólio** desenvolvida com **React** e **Vite**, com design responsivo para **web** e **dispositivos móveis**. Foi criado para atender a um desafio de construir uma aplicação completa utilizando **React**.

---

## Funcionalidades

### 🚀 **Menus e Navegação**
- **Menu Dinâmico**: Utiliza `Header1` e `Header2`, controlados por um **botão de hambúrguer**.
- **React Router**: Gerencia a navegação entre páginas usando `react-router-dom`, com rotas definidas no componente `App`.
- **Navegação Programática**: Uso de `useNavigate` em páginas como Home e Work para navegação para páginas de detalhes com base em IDs específicos.

### ⚙️ **Gerenciamento de Estado e API**
- **Formulário de Contato**:
  - Gerenciamento de estado com `useState` para os campos **name**, **email** e **message**.
  - A função `handleSubmit` envia os dados para a API e limpa os campos após a submissão.
  - Exibe o status da requisição com base na resposta da API.
  
- **Contexto de Contato**:
  - Utiliza `ContactContext` e `ContactProvider` para gerenciamento de estado global.
  - Função `sendContactMessage` faz uma requisição `POST` para enviar dados para a API e atualiza o status conforme a resposta.

### 🖥️ **Componentes e Páginas**
- **Home**: Exibe seções com títulos, imagens e componentes diversos, utilizando `useNavigate` para redirecionamento.
- **Work**: Lista interativa de trabalhos com títulos, imagens e links para páginas de detalhes.
- **Contact**: Formulário de contato para envio de mensagens.
- **Blog**: Lista de posts com título, imagem e descrição.

### 🎨 **Estilização com CSS Modules**
- O projeto utiliza **CSS Modules** para estilizar componentes, garantindo **escopo local** para os estilos e evitando conflitos. Estilos são importados diretamente nos componentes, como `work.module.css` e `contact.module.css`.

### 🔄 **Lógica para Reutilização de Código**
- **Componentes Reutilizáveis**:
  - `DescriptiveText`: Exibe textos em parágrafos com base na prop `text`.
  - `Category`: Renderiza categorias em parágrafos com prop `category` e estilização via `className`.
  - `Data`: Mostra informações de data com estilização condicional.
  
- **Componentes Combinados**:
  - `DataandCategory`: Combina os componentes `Data` e `Category`, permitindo reutilização eficiente.
  
- **Componentes Condicionais**:
  - `MyComponent1` a `MyComponent15`: Utilizam `DataandCategory` para combinações de dados e categorias, aplicando lógica condicional e ajustes dinâmicos de classe com base na URL atual (`useLocation`).

---

## Dependências Instaladas

- `@fortawesome/free-solid-svg-icons`: Biblioteca de ícones SVG sólidos do FontAwesome.
- `@fortawesome/react-fontawesome`: Integra FontAwesome com React para usar ícones.
- `react`: A biblioteca principal para a construção da interface de usuário.
- `react-dom`: Manipulação do DOM no React.
- `react-icons`: Biblioteca para ícones adicionais no React.
- `react-router-dom`: Biblioteca para gerenciamento de rotas em aplicativos React.

---
