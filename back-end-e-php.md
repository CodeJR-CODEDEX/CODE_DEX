---
icon: php
---

# Back-End e PHP

* **PHP:** Linguagem de programação Server-Side amplamente utilizada para desenvolvimento web e integração com bancos de dados.
* **Server-Side Scripting:** Execução do código no servidor web antes de enviar o resultado final em HTML para o navegador do cliente.
* **Cliente:** Aplicação ou dispositivo que solicita informações ou serviços a outro sistema, geralmente um servidor. Em uma aplicação web, o navegador pode atuar como cliente.
* **Servidor:** Sistema que recebe solicitações e disponibiliza recursos ou serviços aos clientes, podendo executar regras de negócio e acessar bancos de dados.
* **Requisição (Request):** Mensagem enviada por um cliente a um servidor para solicitar informações ou executar uma operação.
* **Resposta (Response):** Mensagem retornada pelo servidor após processar uma requisição, podendo conter dados, resultado ou informações sobre uma falha.
* **API (Application Programming Interface):** Conjunto de regras e mecanismos que permite a comunicação entre sistemas ou componentes de software.
* **Endpoint:** Endereço específico de uma API por meio do qual uma operação pode ser acessada, geralmente associado a uma rota e a um método HTTP.
* **HTTP (Hypertext Transfer Protocol):** Protocolo utilizado para comunicação entre clientes e servidores na web.
* **GET e POST:** Métodos HTTP; GET é usado principalmente para consultar informações, enquanto POST é comumente usado para enviar dados e solicitar a criação de recursos ou outras operações.
* **Autenticação:** Processo utilizado para verificar a identidade de uma pessoa ou sistema, por exemplo, por e-mail e senha.
* **Autorização:** Processo que determina quais recursos ou operações uma pessoa ou sistema autenticado pode acessar ou executar.
* **Variável de Ambiente:** Configuração disponibilizada ao programa pelo ambiente em que é executado, como endereços de serviços e opções de execução.
* **Servidor Web (Apache e Nginx):** Software que recebe requisições HTTP e entrega as respostas ao cliente, seja servindo arquivos estáticos ou repassando a requisição para uma aplicação, como um script PHP.
* **Servidor Local de Desenvolvimento:** Servidor executado na própria máquina do desenvolvedor para testar a aplicação antes de publicá-la, como o servidor embutido do PHP (`php -S`) ou pacotes como o XAMPP.
* **Tags do PHP (`<?php ... ?>`):** Delimitadores que indicam ao servidor onde começa e termina o código PHP dentro de um arquivo, que pode misturar PHP e HTML.
* **Variáveis em PHP:** Espaços nomeados para guardar valores, sempre iniciados pelo símbolo `$`, como `$nome`. O tipo é definido pelo valor atribuído.
* **`include` e `require`:** Comandos que inserem o conteúdo de outro arquivo PHP no atual, permitindo reaproveitar código. Se o arquivo não for encontrado, `require` interrompe a execução, enquanto `include` apenas emite um aviso.
* **Superglobais (`$_GET`, `$_POST`, `$_SERVER`...):** Variáveis nativas do PHP, acessíveis em qualquer parte do código, que guardam dados da requisição e do ambiente, como parâmetros da URL, dados de formulário e informações do servidor.
* **Query String:** Trecho da URL após o `?`, formado por pares chave=valor separados por `&`, usado para enviar parâmetros em requisições GET. Em PHP, é lido por meio de `$_GET`.
* **Corpo da Requisição (Body):** Parte da requisição que carrega os dados enviados ao servidor, como os campos de um formulário ou um JSON, comum em métodos como POST, PUT e PATCH.
* **Cabeçalhos HTTP (Headers):** Metadados enviados junto com requisições e respostas, como o tipo do conteúdo (`Content-Type`), informações de autenticação e regras de cache.
* **PUT, PATCH e DELETE:** Outros métodos HTTP. PUT é usado para substituir um recurso por completo, PATCH para atualizá-lo parcialmente e DELETE para removê-lo.
* **Código de Status HTTP:** Número retornado na resposta que indica o resultado da requisição, agrupado por centena: 2xx (sucesso, como 200 OK e 201 Created), 3xx (redirecionamento), 4xx (erro do cliente, como 400, 401, 403 e 404) e 5xx (erro do servidor, como 500).
* **Rota (Route):** Associação entre um caminho de URL, combinado a um método HTTP, e o trecho de código responsável por tratar aquela requisição.
* **REST (API RESTful):** Estilo de arquitetura para APIs que representa os dados como recursos identificados por URLs e usa os métodos HTTP para operar sobre eles, geralmente trocando dados em formato JSON.
* **Redirecionamento:** Resposta do servidor que orienta o navegador a acessar outra URL, geralmente com status 301 ou 302. Em PHP, é feito com `header("Location: ...")`.
* **Upload de Arquivos:** Envio de um arquivo do cliente para o servidor, feito em formulários com `enctype="multipart/form-data"`. Em PHP, os dados do arquivo ficam disponíveis em `$_FILES`.
* **Sessão (Session):** Mecanismo que guarda no servidor informações sobre um usuário entre várias requisições, como o fato de ele estar logado. Em PHP, é iniciada com `session_start()` e acessada por `$_SESSION`.
* **Cookie:** Pequeno dado armazenado no navegador e enviado automaticamente ao servidor a cada requisição, usado, por exemplo, para identificar a sessão do usuário.
* **Token de Acesso:** Código que o cliente envia ao servidor para comprovar que já foi autenticado, muito usado em APIs em vez de sessões. O JWT (JSON Web Token) é um formato comum de token.
* **Hash de Senha:** Transformação irreversível de uma senha em uma sequência de caracteres, de modo que a senha original nunca seja armazenada. Em PHP, usam-se `password_hash()` para gerar e `password_verify()` para conferir.
* **Middleware:** Camada que intercepta a requisição antes de ela chegar ao código principal da rota, usada para tarefas como verificar autenticação, registrar logs ou validar dados.
* **Framework:** Conjunto estruturado de ferramentas e convenções que fornece a base da aplicação, como roteamento, acesso ao banco de dados e organização do código, para que o desenvolvedor não precise construí-la do zero.
* **Composer:** Gerenciador de dependências do PHP. As bibliotecas do projeto são declaradas no arquivo `composer.json` e instaladas na pasta `vendor`.
* **PDO (PHP Data Objects):** Interface nativa do PHP para acessar bancos de dados de forma padronizada, com suporte a consultas preparadas.
* **Consulta Preparada (Prepared Statement):** Consulta SQL enviada ao banco com marcadores no lugar dos valores, que são fornecidos separadamente. Evita que dados do usuário sejam interpretados como parte do comando SQL.
* **SQL Injection:** Ataque em que um usuário malicioso insere comandos SQL em um campo de entrada para alterar ou acessar dados indevidamente. A principal defesa é usar consultas preparadas.
* **XSS (Cross-Site Scripting):** Ataque em que scripts maliciosos são inseridos em uma página exibida a outros usuários. Para evitá-lo, escapa-se o conteúdo antes de exibi-lo, em PHP com `htmlspecialchars()`.
* **CSRF (Cross-Site Request Forgery):** Ataque que faz o navegador de um usuário autenticado enviar uma requisição indesejada ao servidor. É mitigado com tokens CSRF, que confirmam que a requisição partiu do próprio site.
* **CORS (Cross-Origin Resource Sharing):** Mecanismo do navegador que controla se uma página de uma origem pode acessar recursos de outra. O servidor indica quais origens são permitidas por meio de cabeçalhos HTTP.
* **Log:** Registro de eventos e erros da aplicação, usado para acompanhar o funcionamento do sistema e investigar falhas.
* **Arquivo `.env`:** Arquivo local que guarda as variáveis de ambiente de um projeto, como credenciais do banco e chaves de serviços. Não deve ser enviado ao repositório e costuma ser listado no `.gitignore`.
