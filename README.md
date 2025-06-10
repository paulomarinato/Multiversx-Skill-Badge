## 🎓 MultiversX Skill Badge

> Uma plataforma descentralizada para emissão de NFTs Soulbound como comprovantes de experiência e aprendizado, construída sobre a testnet da MultiversX.

---

## 📌 Visão Geral

O **MultiversX Skill Badge** é um projeto desenvolvido com o objetivo de reconhecer e registrar, de forma imutável e descentralizada, as conquistas educacionais e profissionais de usuários na Web3. Cada habilidade validada é representada por um **NFT Soulbound**, intransferível, único e associado à carteira do usuário.

Este projeto é uma contribuição para a iniciativa **Lean2Earn da MultiversX**, demonstrando o uso prático de smart contracts, integração via `mxpy`, e autenticação com carteiras Web3.

---

##Como funciona o mint de Skill Badges?

O usuário faz login com sua carteira MultiversX.
O frontend verifica se há conexão ativa.
Ao clicar em "Mintar Badge", é feita uma chamada ao smart contract via dApp Provider.
O contrato registra o NFT Soulbound com os metadados específicos.
O NFT é associado permanentemente ao endereço da carteira.

---

## 🚀 Funcionalidades

- ✅ Login com carteira MultiversX via dApp SDK
- 🏅 Mint de NFTs Soulbound com identificador exclusivo
- 🔒 Validação de usuário logado antes de mintar
- 🧪 Integração completa com a **testnet** da MultiversX
- 🌐 Frontend intuitivo em React com integração via dApp Provider
- 🛠 Contrato inteligente escrito em **Rust**, utilizando o padrão MultiversX para tokens NFT

---

## 🧱 Estrutura do Projeto

multiversx-skill-badge/
├── smart-contract/ # Código do contrato em Rust
│ ├── src/
│ └── Cargo.toml
├── frontend/ # Interface React
│ ├── public/
│ ├── src/
│ └── package.json
├── README.md
└── .env.example # Variáveis de ambiente (frontend)

---

## 🔐 Pré-requisitos

### Ferramentas

- [Node.js](https://nodejs.org) v18+
- [Rust](https://www.rust-lang.org/tools/install)
- [MultiversX CLI (mxpy)](https://docs.multiversx.com/developers/tools/mxpy/)
- [Vite](https://vitejs.dev/) ou Create React App (dependendo da versão do frontend)
- [Vercel CLI (opcional)](https://vercel.com/docs/cli)

### Configuração Inicial

1. Clone o repositório:
   git clone https://github.com/seuusuario/multiversx-skill-badge.git
   cd multiversx-skill-badge

--- 

Instale as dependências do frontend:

cd frontend
npm install

Configure suas variáveis de ambiente com base no arquivo .env.example.

--- 

Compile o smart contract:

cd smart-contract
mxpy contract build

--- 

Executando o Frontend
No diretório frontend/, rode:

npm run dev

--- 

Licença
Este projeto é licenciado sob a MIT License.

--- 

Agradecimentos
MultiversX – pelo ecossistema inovador e suporte à comunidade
Nearx – pela formação e incentivo educacional
Equipe Lean2Earn – por fomentar o aprendizado na Web3
Lucas Oliveira, Caio Matos, Carlos Alberto – por sempre contribuírem com conteúdo e inspiração para nossa jornada descentralizada

--- 

Autor
Paulo Marinato – 
https://www.linkedin.com/in/paulo-marinato/

