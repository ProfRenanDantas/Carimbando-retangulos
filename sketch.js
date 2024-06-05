function setup() { //A função setup() é executada quando o programa é iniciado. É usado para definir as propriedades do ambiente inicial, como cor do texto, tamanho da tela, cor de fundo e carregar o arquivo de mídia, como imagens e fontes. O programa contém apenas uma função setup(). 
    createCanvas(400, 400); //A função createCanvas() define o tamanho (em pixels) do sketch e qual o sistema de renderização utilizado. Ela é utilizada, geralmente, dentro da função auto-invocada setup().
    background("white") //backgroundColor é usado em JavaScript para alterar o background (fundo) de um elemento.
  }
  
  function draw() { //como seu próprio nome diz, desenhar na tela. Contudo, ela acaba desempenhando papel muito mais importante: ela é o próprio fio-condutor de toda a execução de um programa.
    stroke("blue"); //Desenha uma borda na camada.
    fill ("Red"); //A função fill() é usada para preencher a cor das formas. 
    
    if(mouseIsPressed) { // se o mouse estiver pressionado.
      rect (mouseX, mouseY, 20, 20); //A função rect() desenha um quadrado ou retângulo em uma coordenada dada como ponto de referência, e com um tamanho especificado. A configuração do ponto de referência é dada pela função rectMode(), espessura e cor da borda pelas funções stroke() e strokeWeight(), e a cor de preenchimento pela função fill().
    }
  }