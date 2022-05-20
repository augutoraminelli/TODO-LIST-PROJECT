# TODO-LIST-PROJECT


Boas vindas ao repositório do projeto To Do List!

Aqui você vai encontrar os detalhes de como rodar o projeto a partir desse repositório e utilizar a lista de Tarefas. #vqv 🚀

Stack do projeto - MERN
* Mongo
* Express
* React
* Node

O que foi desenvolvido

No projeto To Do List é um projeto de estudos, da Trybe, onde a aplicação é uma lista de tarefas, onde é possível um usuário da aplicação:

* Ler tarefas
* Criar novas tarefas
* Mudar o status de uma tarefa realizada
* Atualizar Tarefas existentes
* Deletar tarefas


Instruções de como rodar o projeto

Requisitos do projeto

FRONTEND
1 - [PAGE LOGIN] Ter página inicial de login com os seguintes campos e características:
    * A rota para esta página deve ser ‘/’.
    * Ter um imput para colocar e-mail.
    * Ter um campo para colocar senha.
    * Ter um botão entrar.
    * Ao clicar no botão entrar redirecionar para "/task"

2 - [PAGE TASK] Ter página de tarefas
    * A rota para esta página deve ser ‘/task’.
    * Deve ter um título com Tag Título "TODO LIST"
  
3 - [PAGE TASK] Ter um componente Form que cria uma nova tarefa 
    * Ter um campo input que recebe valor String.
    * Deve ter um botão "Adicionar"
      
4 - [PAGE TASK] Criar um compontente com "TASKITEM"
    * Recebe a informação das tarefas existentes e renderiza na tela
    * Existe um Button Edit
    * Existe um Button Delete
    * Existe um Span Status
        
5 - [PAGE TASK] Ter um componente "TASKLIST" com as tarefas criadas 
    * Mostrar as respectivas tarefas criadas.

6 - [BOTÃO DE ENTRDA]
    * Quando clicado, salva os dados do usuário no localStorage
    * Redireciona para rota "/task"
    * Caso não tenha informação de e-mail nem password deve permanecer "disable"
    
7 - [BOTÃO DE ADICIONAR TASK]
   * Quando clicado, envia o dado do tipo string para o banco de dados Mongo
   * Zera o valor do campo após o clique.
   * Botão fica desabilitado caso não tenha informação no input.
   
8 - [BOTÃO DE EDIT TASK]
   * Quando clicado, deve abilitar o campo input que receba um valor novo
   * Abrir um modal para edição do content e cancelar ou salvar
   
9 - [BOTÃO DE DELETAR TASK]
   * Quando clicado, deve eliminar a tareka da lista
BACKEND
10 - 

   
BONUS
  - Incluir pagina de Login
  - Incluir um Tosted de erro de retorno para o usuário.
