# 🧸 Teddy | Teste Técnico - Front-end Pleno

Este repositório contém a solução desenvolvida para o teste técnico de Front-end Pleno da empresa **Teddy**, cujo objetivo foi construir uma aplicação web responsiva, dinâmica e com arquitetura de **micro-frontends**, utilizando **React + Vite + TypeScript**.

---

## ✨ Funcionalidades

A aplicação conta com três telas principais:

### 1. **Tela de Credenciais (`/credentials`)**
- Formulário onde o usuário insere seu **nome** para acessar a plataforma.
- O nome inserido é armazenado e exibido no cabeçalho da aplicação durante a navegação.

### 2. **Tela de Clientes (`/` ou `/clients`)**
- Tabela paginada com todos os **clientes cadastrados**.
- Funcionalidades disponíveis:
  - **Cadastrar** novos clientes
  - **Editar** informações (Nome, Salário, Valor da Empresa)
  - **Remover** clientes
  - **Selecionar** clientes (para visualização futura)
- A tabela é completamente **responsiva** e adaptada para **mobile** e **desktop**.
- Possui **Header** e **Sidebar** para navegação:
  - No **desktop**, ambos são visíveis.
  - No **mobile**, apenas a **sidebar** é exibida.

### 3. **Clientes Selecionados (`/clients/saved`)**
- Exibe apenas os **clientes previamente selecionados**.
- Permite:
  - **Remover individualmente**
  - **Remover todos** os selecionados de uma vez

---

## 🧱 Arquitetura

- Aplicação dividida em **Micro-Frontends** utilizando `vite-plugin-federation`.
- Micro-Frontends:
  - `teddy-shell`: aplicação container (host)
  - `teddy-auth`: responsável pela autenticação/nome do usuário
  - `teddy-dashboard`: exibição, gerenciamento e seleção de clientes

---

## 🧪 Tecnologias e Ferramentas

| Tecnologias | Descrição |
|-------------|-----------|
| **React** + **Vite** | Base do projeto com carregamento rápido |
| **TypeScript** | Tipagem estática para segurança e manutenção |
| **Tailwind CSS** | Estilização responsiva e utilitária |
| **Shadcn/ui** | Componentes reutilizáveis |
| **React Router** | Gerenciamento de rotas |
| **React Hook Form** | Gerenciamento de formulários |
| **Zod** | Validação de formulários |
| **Docker** | Containerização da aplicação |
| **Vercel** | Deploy e hospedagem |
| **npm** | Gerenciador de pacotes eficiente |

---

## 🚀 Como rodar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org)
- [Npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

### Clonando o repositório
```bash
git clone https://github.com/GCandid07/teddy-open-finance.git
cd teddy-teste-tecnico
```
### Instalando dependências
```bash
npm install
```

## Iniciando os micro-frontends
### Abra três terminais:
```bash
# Terminal 1 - Shell (Host)
cd teddy-shell
npm run build
npm run preview

# Terminal 2 - Auth
cd teddy-auth
npm run build
npm run preview

# Terminal 3 - Dashboard
cd teddy-dashboard
npm run build
npm run preview
```

### Acesse: [http://localhost:5000](http://localhost:5000)

---

## 🐳 Usando Docker
### Para rodar a aplicação com Docker:
```bash
docker-compose up --build
```

---

## 🌐 Deploy

### A aplicação foi publicada utilizando Vercel:

#### URL pública: [https://teddy-open-finance-4rr9.vercel.app/](https://teddy-open-finance-4rr9.vercel.app/)

---

## 🧪 Testes

### ✅ Os requisitos obrigatórios foram implementados.

### ❌ Os diferenciais (testes unitários e e2e) não foram implementados, mas a estrutura do projeto permite fácil integração futura.

---

## 📁 Estruturas de Pastas

```bash
teddy-open-finance/
├── teddy-shell          # Aplicação container (navegação e roteamento)
├── teddy-auth           # Tela de autenticação (nome do usuário)
├── teddy-dashboard      # Tela de gerenciamento de clientes
├── docker-compose.yml   # Configuração do Docker Compose
└── README.md            # Documentação do projeto
```

---

## 🧠 Requisitos atendidos

- ### ✅ TypeScript
- ### ✅ React + Vite
- ### ✅ Arquitetura de Micro-Frontends
- ### ✅ Aplicação Responsiva
- ### ✅ Docker
- ### ✅ Deploy na Vercel
- ### ✅ Componentização, organização e padrão de código

---

### Agradeço à equipe da empresa Teddy pela oportunidade de participar do processo e desenvolver esta aplicação!

---

## 📬 Contato
### Gabriel Cândido
### [LinkedIn](https://www.linkedin.com/in/gabriel-c%C3%A2ndido-9998a2219/) • [GitHub](https://github.com/GCandid07)

