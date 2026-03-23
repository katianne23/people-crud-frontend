# 📇 People CRUD - Frontend
![site](https://github.com/katianne23/people-crud-frontend/blob/main/public/preeview.png)

> 💻Aplicação frontend moderna para gerenciamento de pessoas, desenvolvida com React + Vite, consumindo uma API RESTful.

O projeto foi desenvolvido como parte de um desafio técnico para demonstrar habilidades com React, consumo de APIs e boas práticas de desenvolvimento.

[Clique aqui para acessar](https://people-crud-frontend.vercel.app/)

### ✨ Funcionalidades

#### CRUD Completo
- Listar: Visualização de todas as pessoas cadastradas em cards
- Cadastrar: Adição de novas pessoas com validação de campos
- Editar: Alteração de dados de uma pessoa específica
- Excluir: Remoção de pessoas com confirmação

#### Experiência do Usuário
- 🎨 Interface moderna com gradientes e animações suaves
- 📱 Layout totalmente responsivo (Desktop, Tablet, Mobile)
- 💬 Feedback visual para todas as ações (loading, sucesso, erro)
- 🔍 Validação de campos em tempo real
- ⌨️ Atalhos de teclado (ESC para fechar modal)
- ♿ Acessibilidade com labels e foco visível

#### Funcionalidades Técnicas
- 🔄 Gerenciamento de estado com Context API
- 🌐 Integração com API RESTful
- 📦 Componentização e reutilização de código
- 🎯 Custom hooks para separação de lógica

### 🛠️ Tecnologias

#### Frontend
- React 18 - Biblioteca para construção de interfaces
- Vite - Build tool rápida e moderna
- Axios - Cliente HTTP para requisições à API
- CSS3 - Estilização com animações e design responsivo

#### Ferramentas de Desenvolvimento
- ESLint - Linting de código
- Prettier - Formatação de código
- Git - Controle de versão

#### Testes
- Testes Manuais - Validação visual e funcional no navegador
- Insomnia/Postman - Testes da API e integração

### 📋 Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:
- Node.js (versão 18 ou superior)
- npm (geralmente vem com o Node.js)
- Git (opcional, para clonar o repositório)
- Insomnia ou Postman (para testes de API)

### 🚀 Instalação
Clone o repositório
```
# Clone este repositório
git clone https://github.com/katianne23/people-crud-frontend

# Acesse a pasta do projeto
cd people-crud-frontend
```

Instale as dependências
```
npm install
```

### Configuração da API
O projeto já está configurado para usar a API em produção:
```
https://people-crud-api.onrender.com/api
```

### 🎮 Executando o Projeto

#### Modo Desenvolvimento
```
npm run dev
```
A aplicação estará disponível em: http://localhost:3000

#### Build para Produção
```
# Gera os arquivos otimizados para produção
npm run build
# Visualiza o build localmente
npm run preview
```

### 🧪 Testes
Os testes foram realizados de forma manual e com o Insomnia para garantir o funcionamento correto da aplicação e da integração com a API.

#### Testes Manuais
Os testes manuais foram realizados diretamente no navegador, verificando:

1. Teste de Cadastro de Pessoa
 - Abrir o modal de cadastro
 - Preencher todos os campos obrigatórios
 - Verificar validações de campos (nome mínimo, email válido, etc.)
 - Submeter o formulário e verificar se a pessoa aparece na lista
 -  Verificar mensagens de erro para campos inválidos

2. Teste de Listagem
 - Verificar se todas as pessoas cadastradas são exibidas
 - Verificar se as informações estão corretas (nome, email, telefone, etc.)
 - Verificar responsividade da lista em diferentes tamanhos de tela

3. Teste de Edição
 - Clicar no botão de editar de uma pessoa
 - Verificar se o modal abre com os dados preenchidos
 - Alterar os dados e salvar
 - Verificar se as alterações são refletidas na lista

4. Teste de Exclusão
 - Clicar no botão de excluir de uma pessoa
 - Verificar se o modal de confirmação aparece
 - Confirmar a exclusão
 - Verificar se a pessoa é removida da lista

5. Teste de Validações
 - Tentar cadastrar com nome muito curto (menos de 3 caracteres)
 - Tentar cadastrar com email inválido
 - Tentar cadastrar com data de nascimento futura
 - Tentar cadastrar com telefone incompleto
 - Tentar cadastrar com campos obrigatórios vazios

6. Teste de Experiência do Usuário
 - Verificar animações de entrada e saída
 - Verificar loading states durante requisições
 - Verificar feedback visual de sucesso e erro
 - Testar responsividade em diferentes dispositivos
 - Testar fechamento do modal com ESC

### 🌐 API
Esta aplicação consome a API RESTful disponível em:

```
https://people-crud-api.onrender.com/api
``` 
#### Endpoints Utilizados
- GET	/pessoas	Lista todas as pessoas
- GET	/pessoa/{id}	Busca uma pessoa específica
- POST	/pessoa	Cria uma nova pessoa
- PUT	/pessoa/{id}	Atualiza uma pessoa
- DELETE	/pessoa/{id}	Remove uma pessoa
- GET	/health	Verifica status da API

#### Validações da API
Campo -	Validação
- nome -	Mínimo 3 caracteres, máximo 100
- email -	Formato válido, único no sistema
- data_nascimento -	Formato ISO, não pode ser futura
- telefone - Mínimo 10 caracteres
- endereco - Mínimo 5 caracteres, máximo 255

Para mais detalhes sobre a API, consulte a documentação completa.


Esse projeto está sob a licença MIT.

📝 Observações Finais
Este projeto foi desenvolvido como parte de um desafio técnico e demonstra:
- Boas práticas de desenvolvimento frontend com React
- Componentização e reutilização de código
- Integração com API RESTful
- Layout responsivo e acessível
- Validações de formulário
- Feedback visual para o usuário
- Código limpo e organizado
- Documentação completa

Feito com ♥ por Katianne Araújo

---
