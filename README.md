# atividadelp
<center> <h1>Little Misfortune - Descrição</h1> </center>
<p>Este é um pequeno site criado com HTML, CSS e JavaScript, que descreve um jogo chamado Little Misfortune. O objetivo deste projeto é apresentar o jogo e fornecer informações básicas sobre ele. </p>

<h2>Estrutura do projeto</h2>
<p> O projeto é composto pelos seguintes arquivos e pastas: </p>
<ul>
    <ol>programa.html          - Página inicial do site</ol>
    <ol>css/estyle.css      - Arquivo CSS para estilizar o site</ol>
    <ol>js/index.js         - Arquivo JavaScript para adicionar interatividade ao site</ol>
    <ol>imagem/             - Pasta com imagens utilizadas no site</ol> </ul>
    
 <h2>Desenvolvimento</h2>
 <p>Para criar este site, foram utilizados os seguintes passos:</p>
 <ul>
    <ol>1.Criar a estrutura básica do html:</ol>
    <dd>  Adicionar as tags html, head, title e body.</dd><br>
    <ol>2.Adicionar o conteúdo da página:</ol>
    <dd>Inserir um titulo, e um paragrafo com um breve resumo do jogo Little Misfortune</dd>
    <dd>Adicionar a imagem do jogo</dd><br>
    <ol>3.Estilizar o site com CSS:</ol>
    <dd>Definir as cores da página, cor tamanho e estilo da fonte</dd>
    <dd>Centralização do titulo e do parágrafo</dd><br>
    <ol>4.Adicionar interatividade com JavaScript:</ol>
    <dd>Adicionar o arquivo index.js para adicionar uma interação na imagem do jogo.</dd><br>
</ul>
 <p>Para a interação de fazer a foto mudar no jogo foram seguidos essses passos:</p>
 <ul>
    <ol>Foi selecionada a imagem a partir do seu ID utilizando o getElementById,e armazenou a referência da imagem na variável foto.</ol>
    <ol>Em seguida, foi adicionado um evento de clique na imagem utilizando addEventListener</ol>
    <ol>Dentro da função é gerado um número aleatório utilizando a função Math.random. Esse número é multiplicado por 10 e arredondado para o número inteiro mais próximo utilizando a função Math.round, já que a imagem é nomeada de acordo o padrão de 1 a 10.</ol>
    <ol>a imagem é alterada para exibir uma imagem aleatória dentro da pasta "imagem" utilizando o método setAttribute para atualizar o atributo src da tag img. A imagem é selecionada com o número aleatório gerado com a extensão .jpeg</ol>
 </ul>
    
