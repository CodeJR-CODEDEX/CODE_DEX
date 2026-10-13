---
icon: comment-question
---

# Dúvidas Frequentes

## Dúvidas Frequentes

### Básicos da Programação

**Qual a diferença entre Front-End e Back-End?** O Front-End é a parte visual e interativa com a qual o usuário interage diretamente. O Back-End é a camada interna responsável por processar dados, aplicar regras de negócio e se comunicar com o banco de dados.

**Qual a diferença entre compilador e interpretador?** O compilador traduz o código-fonte para outra representação (como código de máquina ou bytecode) antes da execução. O interpretador executa o código-fonte, ou uma representação intermediária, seguindo as regras da linguagem.

### HTML e CSS

**Quando usar Flexbox e quando usar Grid?** O Flexbox é mais indicado para organizar elementos em uma única direção (linha ou coluna), como menus e grupos de botões. O Grid é mais indicado para layouts em duas dimensões, com linhas e colunas ao mesmo tempo, como a estrutura geral de uma página.

**Por que usar `rem` e `%` em vez de `px`?** Unidades relativas se adaptam ao tamanho da fonte, do contêiner ou da janela, o que facilita a responsividade. Já o `px` mantém um tamanho fixo.

**Como escolher os breakpoints de um projeto?** Uma boa prática é definir os breakpoints pelos pontos em que o layout começa a quebrar, e não por modelos específicos de aparelhos. Use o DevTools para redimensionar a página e observar onde ajustar.

### JavaScript

**Qual a diferença entre `var`, `let` e `const`?** `let` e `const` têm escopo de bloco e são as mais recomendadas. `const` não permite reatribuição. `var` tem escopo de função e comportamentos que podem causar erros inesperados.

**Qual a diferença entre `==` e `===`?** O `==` compara valores convertendo os tipos quando necessário. O `===` compara valor e tipo, sem conversão, e por isso é o mais recomendado.

**Por que o JavaScript não encontra meu elemento no DOM?** Um motivo comum é o script ser executado antes de o HTML ser carregado. Coloque o `<script>` no final do `body` ou use o atributo `defer`. Confira também se o seletor ou o `id` está escrito corretamente.

### Controle de Versão (Git e GitHub)

**Qual a diferença entre Git e GitHub?** O Git é o sistema de controle de versão que registra o histórico de alterações. O GitHub é uma plataforma que hospeda repositórios Git e oferece colaboração, revisão de código e automação.

**Qual a diferença entre `fetch` e `pull`?** O `fetch` busca as atualizações do repositório remoto sem integrá-las à sua branch. O `pull` busca e integra as alterações em seguida.

**O que fazer quando acontece um conflito de merge?** Abra os arquivos marcados pelo Git, escolha ou combine as versões corretas, salve, adicione os arquivos à staging area e finalize com um commit. Em caso de dúvida, converse com quem fez a outra alteração.

**O que colocar no `.gitignore`?** Arquivos que não devem ser versionados, como dependências instaladas (por exemplo, `node_modules`), arquivos temporários e arquivos com informações sensíveis, como o `.env`.

### Back-End e PHP

**Quando usar GET e quando usar POST?** O GET é usado principalmente para consultar informações. O POST é comumente usado para enviar dados e solicitar a criação de recursos ou outras operações.

**Qual a diferença entre autenticação e autorização?** Autenticação verifica quem é a pessoa ou o sistema (por exemplo, com e-mail e senha). Autorização define o que essa pessoa ou sistema já autenticado pode acessar ou executar.

**Por que não colocar senhas e chaves diretamente no código?** Esses dados podem vazar caso o código seja compartilhado ou enviado ao repositório. O recomendado é guardá-los em variáveis de ambiente.

### Banco de Dados, SQL e CRUD

**Como o CRUD se relaciona com os comandos SQL?** Create corresponde ao `INSERT`, Read ao `SELECT`, Update ao `UPDATE` e Delete ao `DELETE`.

**Por que é perigoso esquecer o `WHERE` em um `UPDATE` ou `DELETE`?** Sem o `WHERE`, o comando é aplicado a todos os registros da tabela, podendo alterar ou apagar dados que não deveriam ser afetados.

**Qual a diferença entre chave primária e chave estrangeira?** A chave primária identifica unicamente cada registro de uma tabela. A chave estrangeira referencia a chave de outra tabela, permitindo relacionar registros e manter a integridade dos dados.

### Metodologia e Boas Práticas

**Qual a diferença entre teste unitário e teste de integração?** O teste unitário verifica uma pequena unidade de código, como uma função, de forma isolada. O teste de integração verifica se diferentes componentes funcionam corretamente em conjunto.

**Qual a diferença entre requisito funcional e não funcional?** O requisito funcional descreve uma funcionalidade que o sistema deve oferecer. O não funcional descreve características de qualidade ou restrições, como desempenho, segurança e acessibilidade.

**Refatorar muda o comportamento do sistema?** Não. A refatoração melhora a estrutura interna do código sem alterar o comportamento externo esperado.

### Termos e Práticas Internas da Code

**Qual a diferença entre LiveCode e LivePrototype?** O LiveCode é uma sessão prática ao vivo de programação, em que um membro da equipe demonstra a implementação de uma funcionalidade. O LivePrototype é uma sessão ao vivo em que se constrói ou apresenta um protótipo no Figma, explicando fluxo e escolhas visuais.

**Como funciona o padrão de commits da Code?** \[PREENCHER: tipos de commit adotados pela equipe e um exemplo.]

**Como e quando devo enviar meu feedback de capacitação?** \[PREENCHER: periodicidade, onde o formulário é enviado e quem recebe.]

**Quem devo procurar quando tiver uma dúvida técnica?** \[PREENCHER: canal ou pessoa responsável.]
