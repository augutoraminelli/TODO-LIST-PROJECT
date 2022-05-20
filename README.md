# TODO-LIST-PROJECT


## Boas vindas ao repositório do projeto To Do List!

Aqui você vai encontrar os detalhes de como rodar o projeto a partir desse repositório e utilizar a lista de Tarefas. #vqv 🚀

## Stack do projeto - MERN
* Mongo
* Express
* React
* Node

## O que foi desenvolvido

No projeto To Do List é um projeto de estudos, da Trybe, onde a aplicação é uma lista de tarefas, onde é possível um usuário da aplicação:

* Ler tarefas
* Criar novas tarefas
* Mudar o status de uma tarefa realizada
* Atualizar Tarefas existentes
* Deletar tarefas


## Instruções de como rodar o projeto

1. Clone o repositório

- `git clone .
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-014-a-project-car-shop`

1. Instale as dependências

- `npm install`

## Requisitos do projeto

## [FRONTEND]

1 - [PAGE TASK]

    - Ter página de tarefas
    - Deve ter um título com Tag Título "TODO LIST"
  
2 - [PAGE TASK]

    - Ter um componente FormTodo que cria uma nova tarefa 
    - Ter um campo input que recebe valor String.
    - Deve ter um botão "TASK"
      
3 - [PAGE TASK]

    - Criar um compontente com "TASKITEM"
    - Recebe a informação das tarefas existentes e renderiza na tela
    - Existe um Button Edit
    - Existe um Button Delete
    - Existe um SELECT Status
        
4 - [PAGE TASK]

    - Ter um componente "TASKLIST" com as tarefas criadas 
    - Mostrar as respectivas tarefas criadas.
    
5 - [BOTÃO DE ADICIONAR TASK]

    - Quando clicado, envia o dado do tipo string para o banco de dados Mongo
    - Zera o valor do campo após o clique.
    - Botão fica desabilitado caso não tenha informação no input.

6 - [BOTÃO DE EDIT TASK]

    - Quando clicado, deve abilitar o campo input que receba um valor novo
    - Abrir um modal para edição do content e cancelar ou salvar
    - Quando clica em editat abre um Modal TASKEDITMODAL
   
7 - [BOTÃO DE DELETAR TASK]

    - Quando clicado, deve eliminar a tareka da lista

8 - [SELECT PARA MUDAR O STATUS]

    - Ter um component selectStatus que altera o status da Tarefa "Pendente", "Em andamento", "Pronto""

9 - [INTERGAR COM API BACKEND]

    - Ser possível fazer requisições a API do backend com db Mongo. 
   
## [BACKEND]
10 - 


