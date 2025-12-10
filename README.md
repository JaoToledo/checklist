## 📌 Sobre o projeto

Um aplicativo simples e eficiente para gerenciar suas tarefas diárias.  
Feito com **React**, testado com **Vitest**, e documentado com **JSDoc**.

## 🚀 Funcionalidades

- ✅ Criar tarefas com título e checklists  
- 🗂️ Adicionar, editar e remover tarefas  
- ☑️ Marcar itens do checklist como concluídos  
- 💾 Salvamento automático no Local Storage 
- 🧪 Testes unitários com **Vitest**  
- 📘 Código documentado com **JSDoc**

  
## ⚙️ Tecnologias utilizadas

React 

TypeScript

Vite

Vitest + Testing Library (testes unitários e de integração)

TailwindCSS (estilização)

 
## 🧠 Arquitetura

O projeto é dividido em componentes funcionais reutilizáveis.
Cada componente possui documentação interna (JSDoc) e testes unitários.

Principais componentes:

App.tsx → Componente raiz, gerencia o estado global das tarefas.

TaskBar/ → Exibe a lista de tarefas criadas.

TaskModal/ → Modal responsável por criar e editar tarefas.

TaskModal/ModalButtons/ → Botões de ação: Add, Save, Cancel.

SideBarTasks/ → Lista lateral com opções de editar e deletar cada task.

## 🧪 Testes

Os testes foram criados com Vitest e React Testing Library.
Eles verificam o comportamento real do usuário, incluindo:

Renderização de componentes;

Abertura e fechamento de modais;

Criação, edição e exclusão de tarefas;

Chamadas de callbacks (onAdd, onSave, onDelete, etc.);

Atualização do DOM após interações.

 
## 📂 Exemplos de testes:

src/
 └── components/
      ├── TaskBar/tests/
      ├── TaskModal/tests/
      ├── ModalButtons/tests/


## 🚀 Como executar

Clone o repositório:

git clone https://github.com/seu-usuario/task-list-app.git


Instale as dependências:

npm install


Execute o servidor de desenvolvimento:

npm run dev


Rode os testes:

npm run test

## 📸 Demonstração

**Tasks criadas**

<img width="1920" height="1080" alt="{1C7B922C-8984-4E5B-9088-B534C39DD962}" src="https://github.com/user-attachments/assets/c2ed2c34-67ca-4264-acda-9e6720e7f328" />
<img width="1920" height="1080" alt="{C3B8EFE1-AA77-4269-ABD5-CF7D964EAB49}" src="https://github.com/user-attachments/assets/0fbf2ef7-a1f7-4af7-8e9d-f238fc87f400" />

 **Modal para ciração de tasks**

<img width="1919" height="1080" alt="{E46290FB-64DF-440F-9028-FDC4DB36FAC7}" src="https://github.com/user-attachments/assets/df66775e-de87-4ef4-91d5-83bb98b47b7a" />

## 📚 Documentação interna

O código segue o padrão JSDoc, o que facilita manutenção e leitura.
Exemplo:

/**
 * @fileoverview Componente principal da aplicação que gerencia tarefas e estado da UI
 * @module App
 */

/**
 * Componente App principal
 * @component
 * @returns {JSX.Element} O componente App renderizado
 */
function App() { ... }


## 💬 Observações finais

Esse projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de React, organização de código, testes unitários e documentação técnica.
Mesmo sendo uma aplicação simples, a estrutura reflete boas práticas de desenvolvimento front-end.
