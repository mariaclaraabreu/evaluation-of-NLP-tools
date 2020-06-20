# Testes de ferramentas que utilizam PLN
Aqui, serão apresentados os testes de ferramentas que utilizam Processamento de Linguagem Natural quando aplicadas 
ao reconhecimento de voz e texto de palavras escritas e faladas erroneamente, conforme a norma culta da língua portuguesa

<b>Resumo: </b>Este meta-artigo descreve testes e avaliações a partir destes nas
ferramentas <b>API da google em Python (voz)</b>, <b>biblioteca NLTK do python
(texto)</b>, <b>serviço Text to Speech da IBM Watson (voz)</b> e um software
desenvolvido com o <b>Framework Quasar Speech (voz)</b>. Ainda, uma aplicação
foi desenvolvida para reconhecimento de fala, cuja implementação foi feita em
linguagem Javascript, usando a <b>API Speech</b>. Com base nos resultados, foi
identificado que a API da google possui mais eficiência na identificação de
palavras pronunciadas erradas, conforme a norma culta da língua
portuguesa.</br>

<h2>Metodologia</h2>
<p>Todos os recursos de voz foram testados com as mesmas frases, nas quais as
seguintes palavras foram abordadas: “Pranto” (planto), “Mi” (milho), “Cuié” (colher),
“Prártico” (plástico), “Bicicreta” (Bicicleta), “Biciqueta” (Bicicleta), “Fofi” (fósforo) e
“Fórfuro” (fósforo). </p>
<p>Cada experimento foi feito com a repetição três vezes consecutivas
de cada frase, com tonalidade e velocidade semelhante de voz e no mesmo ambiente,
evitando sons externos ao teste. As frases estão listadas abaixo:</p>

<table>
  <tr>
    <td><b>Frase 1:</b> “ Eu pranto mi.”</td>
  </tr>
  <tr>
    <td><b>Frase 2:</b> “ A minha cuié é de prártico.”</td>
  </tr>
  <tr>
    <td><b>Frase 3:</b>  “ Eu ando de bibicreta.”</td>
  </tr>
  <tr>
    <td><b>Frase 4:</b>“ Eu ando de biciqueta.”</td>
  </tr>
  <tr>
    <td><b>Frase 5:</b> “ Eu acendi o fogo com um palito
de fofi.”</td>
  </tr>
  <tr>
    <td><b>Frase 6:</b> “ Eu acendi o fogo com um palito
de fórfuro.”</td>
  </tr>
</table>
</br>

<h3>Teste da API da google em Python</h3

<p>Para a realização do seu teste foi utilizada a biblioteca <i>Speech Recognition</i> e a <i>PyAudio</i> , da qual a primeira possui dependência. No código, é possível utilizar as funções que são responsáveis por ouvir e reconhecer a fala (Recogonizer()), habilitar o
microfone do dispositivo que está sendo utilizado (Microphone()), reduzir o ruído
(adjust_for_ambient_noise()), escolher o idioma a ser reconhecido, dentre outras.
O resultado dos testes para as frases pré-definidas são listados abaixo e o
algoritmo é mostrado em seguida. </p>
Frase 1: Saídas - T1: “eu planto me” T2: “ eu planto me.” T3: “eu planto me”
Frase 2: Saídas - T1: “ a minha colher de plástico ” T2: “ a minha colher de
plástico.” T3: “a minha colher de plástico”
Frase 3: Saídas - T1: “ Eu ando de bicicleta. ” T2: “ Eu ando de bicicleta.” T3:
“Eu ando de bicicleta.”
Frase 4: Saídas - T1: “ Eu ando de bicicleta. ” T2: “ Eu ando de bicicleta” T3:
“Eu ando de bicicleta.”
Frase 5: Saídas - T1: “ eu acendi o fogo com um palito de fósforo ” T2: “ eu
acendi o fogo com um palito de fósforo” T3: “eu acendi o fogo com um palito de
fósforo”
Frase 6: Saídas - T1: “ eu acendi o fogo com palito de fósforo ” T2: “ eu acendi o
fogo com um palito de fósforo” T3: “eu acendi o fogo com palito de fósforo.”

```
function testando(){
}
```

<center>Centered text</center>

