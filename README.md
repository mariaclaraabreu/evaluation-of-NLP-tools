# Testes de ferramentas de Processamento de Linguagem Natural
Aqui, serão apresentados os testes de ferramentas que utilizam Processamento de Linguagem Natural quando aplicadas 
ao reconhecimento de voz e texto de palavras escritas e faladas erroneamente, conforme a norma culta da língua portuguesa

<b color="#ffffff">Resumo: </b>Este meta-artigo descreve testes e avaliações a partir destes nas
ferramentas <b>API da google em Python (voz)</b>, <b>biblioteca NLTK do python
(texto)</b>, <b>serviço Text to Speech da IBM Watson (voz)</b> e um software
desenvolvido com o <b>Framework Quasar Speech (voz)</b>. Ainda, uma aplicação
foi desenvolvida para reconhecimento de fala, cuja implementação foi feita em
linguagem Javascript, usando a <b>API Speech</b>. Com base nos resultados, foi
identificado que a API da google possui mais eficiência na identificação de
palavras pronunciadas erradas, conforme a norma culta da língua
portuguesa.</br>

<h2>1. Metodologia</h2>
<p>Tosas as ferramentas de reconhecimento de voz foram testadas com as mesmas frases, nas quais as
seguintes palavras foram abordadas: “Pranto” (planto), “Mi” (milho), “Cuié” (colher),
“Prártico” (plástico), “Bicicreta” (Bicicleta), “Biciqueta” (Bicicleta), “Fofi” (fósforo) e
“Fórfuro” (fósforo). A de análise de texto (NLTK) foi testada com apenas uma frase ( 'Sr. Verde matou o Coronel. Mas o Sr. Verde gosta de caju.').</p>
<p>Cada experimento com os reconhecedores de voz foi feito com a repetição das frases três vezes consecutivas, com tonalidade e velocidade semelhantes de voz e no mesmo ambiente, evitando sons externos ao teste. As frases estão listadas abaixo:</p>


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

<h3>1.1. Teste da API da google em Python</h3>

<p>Para a realização do seu teste foi utilizada a biblioteca <i>Speech Recognition</i> e a <i>PyAudio</i> , da qual a primeira possui dependência. No código, é possível utilizar as funções que são responsáveis por ouvir e reconhecer a fala (Recogonizer()), habilitar o
microfone do dispositivo que está sendo utilizado (Microphone()), reduzir o ruído
(adjust_for_ambient_noise()), escolher o idioma a ser reconhecido, dentre outras.
O resultado dos testes para as frases pré-definidas são listados abaixo e o
algoritmo é mostrado em seguida. </p></br>

<table>
  <tr>
    <td><b>Frase 1:</b> Saídas - T1: “eu planto me” T2: “ eu planto me.” T3: “eu planto me”</td>
  </tr>
  <tr>
    <td><b>Frase 2:</b> Saídas - T1: “ a minha colher de plástico ” T2: “ a minha colher de
plástico.” T3: “a minha colher de plástico” </td>
  </tr>
  <tr>
    <td><b>Frase 3:</b>  Saídas - T1: “ Eu ando de bicicleta. ” T2: “ Eu ando de bicicleta.” T3:
“Eu ando de bicicleta.”</td>
  </tr>
  <tr>
    <td><b>Frase 4:</b> Saídas - T1: “ Eu ando de bicicleta. ” T2: “ Eu ando de bicicleta” T3:
“Eu ando de bicicleta.”</td>
  </tr>
  <tr>
    <td><b>Frase 5:</b> Saídas - T1: “ eu acendi o fogo com um palito de fósforo ” T2: “ eu
acendi o fogo com um palito de fósforo” T3: “eu acendi o fogo com um palito de
fósforo”</td>
  </tr>
  <tr>
    <td><b>Frase 6:</b> Saídas - T1: “ eu acendi o fogo com palito de fósforo ” T2: “ eu acendi o
fogo com um palito de fósforo” T3: “eu acendi o fogo com palito de fósforo.”</td>
  </tr>
</table>
</br>

<h4>1.1.1. Algoritmo da API da Google em python</h4>


```
import speech_recognition as sr
r = sr.Recognizer()
with sr.Microphone() as s:
  r.adjust_for_ambient_noise(s)
  while True:
    audio = r.listen(s)
    print('Você disse: ', r.recognize_google(audio, language='pt'))

```

<p>Como resultado, é possível observar que todas as palavras erradas, conforme o
idioma, inseridas nas frases foram reconhecidas da forma devida. Em contrapartida, a
palavra que deveria ser identificada como milho, foi reconhecida como o pronome
“Me”, haja visto que “Mi” e “Me” possuem a mesma pronúncia e este último é validado
como existente na língua portuguesa.</p>

<h3>1.2. Teste da biblioteca NLTK do python</h3>


<p>A Natural Language Toolkit - NLTK - é uma biblioteca da linguagem Python para
Processamento de Linguagem Natural e Text Analytics, cuja utilidade diz respeito a, dentre
outros, separar as sentenças em um parágrafo, separar as palavras dentro de cada
sentença, reconhecer padrões no texto e criar modelos de classificação que permitam,
por exemplo, realizar análise de sentimentos em um conjunto de dados.
<b>Para realizar os testes com essa biblioteca:</p></b></br>
<ul>
  <li>1º Baixar a biblioteca NLTK</li>
  <li>2º Baixar o pacote numpy (para trabalhar com computação científica)</li>
</ul></br>

<h4>1.2.1. Algoritmo NLTK (exemplo)</h4>

```
import nltk
texto = 'Sr. Verde matou o Coronel. Mas o Sr. Verde gosta de caju.'
frases = nltk.tokenize.sent_tokenize(texto, language='portuguese')
print(frases)

tokens = nltk.word_tokenize(texto, langage='portuguese')
print(tokens)

classes = nltk.pos_tag(tokens)
print(classes)

```

<b>sent_tokenize: </b> reconhece o término de frases;</br>
<b>pos_tag: </b> identifica a qual classe a palavra pertence (verbo, substantivo, adjetivo, etc)</br>
<b>chunk: </b> identifica as entidades, como uma empresa e uma pessoa, por exemplo.</br>

<p>A impressão da variável “frases” obteve como resultado:</p>

```

[‘Sr. Verde matou o Coronel.’] [‘Mas o Sr. Verde gosta de caju’]

```
<p>Isso demonstra que o algoritmo foi capaz de reconhecer “Sr.” como uma
abreviação, em vez do término da primeira frase, que poderia ter ocorrido devido ao
ponto (.).</p>
<p>A <b>word.tokenize</b> separa o texto em palava, cada palavra é um token. A impressão
da variável “tokens” obteve como resultado:</p>

```

[‘Sr.’, ‘Verde’, ‘matou’, ‘o’, ‘Coronel.’, ‘Mas’, ‘o’, ‘Sr.’, ‘Verde’, ‘gosta’, ‘de’, ‘caju’]

```

<p>Por último, com a impressão da variável “classes”, pôde ser visto o acerto na
definição de todas as classes das palavras identificadas, como demonstrado abaixo:</p>

```

[(‘Sr.’, NNP), (‘Verde’, NNP), (‘matou’, VBD ), (‘Coronel.’, NNP), (‘Mas’, CC), (‘Sr.’, NNP),
(‘Verde’, JJ), (‘gosta’, MD ), (‘de’, EM), (‘caju’, NNS)]

```

<p>Os significados de cada abreviação podem ser verificados neste link
https://www.clips.uantwerpen.be/pages/mbsp-tags.</p>
<p>Um ponto negativo que se observou ao utilizar essa ferramenta é o fato de,
caso seja transcrita uma palavra com inicial maiúscula, ele reconhece como
substantivo próprio, mesmo que não seja. Um exemplo disso é a classificação da
palavra “Coronel”, que foi considerada NNP (substantivo próprio), em vez de
NN (substantivo).</p></br>


<h3>1.3. Avaliação serviço Text to Speech da IBM Watson</h3>

<p>O teste desta ferramenta foi realizado utilizando a DEMO disponível no site da
empresa IBM ( https://www.ibm.com/watson/br-pt/ ). Lá, não houve acesso a
códigos-fonte, apenas à interface gráfica. Os resultados podem ser visualizados abaixo:</p>

<table>
  <tr>
    <td><b>Frase 1:</b> Saídas - T1: “Eu prole” T2: “ Eu planto me.” T3: “E o pranto me.”</td>
  </tr>
  <tr>
    <td><b>Frase 2:</b> Saídas - T1: “ A minha um colher de prático. ” T2: “ A minha é de
prática” T3: “Minha mãe é é de prático” </td>
  </tr>
  <tr>
    <td><b>Frase 3:</b>  Saídas - T1: “ Eu ando de bicicleta. ” T2: “ Eu ando de bicicleta.” T3:
“Eu ando de bicicleta.”</td>
  </tr>
  <tr>
    <td><b>Frase 4:</b> Saídas - T1: “ Eu ando de bicicleta. ” T2: “ Eu ando de bicicleta” T3:
“Eu ando de bicicleta.”</td>
  </tr>
  <tr>
    <td><b>Frase 5:</b> Saídas - T1: “ Eu acende o fogo com um palito de fósforo. ” T2: “ Erro
acende o fogo conta palito diz fox.” T3: “Os e o assédio fogo com um palito de
forças”</td>
  </tr>
  <tr>
    <td><b>Frase 6:</b> Saídas - T1: “ Eu acendi o fogo com um palito de fósforo. ” T2: “ Eu
acende o fogo conta alito disposto.” T3: “Os e o assédio fogo com um palito de
forças.”</td>
  </tr>
</table>
</br>

<p>Ao realizar a análise, é possível observar que na frase 1 , apenas um teste obteve
o resultado esperado - interpretação de “Pranto” como “Planto” -, além de que, no T3
nem mesmo a palavra “Eu” foi reconhecida, considerada como “E o”. Na frase 2 , o
reconhecedor considerou “Prártico” como sendo a palavra existente no idioma,
“Prático”; além de não reconhecer em dois dos testes a palavra “cuié” como nenhuma
existente na língua portuguesa. Em contrapartida, os substantivos “Plástico” e
“Bicicleta” foram reconhecidos, apesar de, na estrutura das frases que continham essas
palavras, outras terem sido interpretadas da forma errada.</p>

<h3>1.4. Avaliação do software desenvolvido com o Framework Quasar Speech</
<p>O teste desta ferramenta foi realizado utilizando a DEMO disponível no site
https://quasarspeechapi.surge.sh/#/ . Lá, não houve acesso a códigos-fonte, apenas à
interface gráfica. No entanto, a própria plataforma do Quasar disponibiliza tutoriais de
como implementar os métodos de reconhecimento de voz. Os resultados podem ser
visualizados abaixo:</p>

<table>
  <tr>
    <td><b>Frase 1:</b> Saídas - T1: “ eu planto me” T2: “ eu planto me” T3: “ eu planto me”</td>
  </tr>
  <tr>
    <td><b>Frase 2:</b> Saídas - T1: “ a minha colher é de plástico ” T2: “a minha colher de
plástico” T3: “a minha colher é de plástico” </td>
  </tr>
  <tr>
    <td><b>Frase 3:</b>  Saídas - T1: “ eu ando de bicicleta ” T2: “ eu ando de bicicleta.” T3: “Eu
ando de bicicleta.”</td>
  </tr>
  <tr>
    <td><b>Frase 4:</b> Saídas - T1: “ eu ando de bicicleta. ” T2: “ eu ando de bicicleta” T3: “eu
ando de bicicleta.”</td>
  </tr>
  <tr>
    <td><b>Frase 5:</b> Saídas - T1: “ eu acendi o fogo com palito de fósforo. ” T2: “ eu acendi
o fogo com palito de fósforo” T3: “ eu acendi o fogo com palito de fósforo”</td>
  </tr>
  <tr>
    <td><b>Frase 6:</b> Saídas - T1: “ eu acendi o fogo com palito de fósforo ” T2: “ eu acendi
o fogo com palito de fósforo” T3: “ eu acendi o fogo com palito de fósforo”</td>
  </tr>
</table>
</br>

<p>Ao realizar a análise, é possível observar que para todas as frases foram obtidas
boas saídas, com exceção do fato de que a palavra que deveria ser identificada como
milho, foi reconhecida como o pronome “Me”, haja visto que “Mi” e “Me” possuem a
mesma pronúncia e este último é validado como existente na língua portuguesa. Além
disso, foram ocultadas, em alguns resultados, a monossílaba “um”, o que, apesar de
deixar a comunicação melhor em diálogos humanos reais, não são tão relevantes na
interpretação de um contexto.</p>

<h3>1.5. Aplicação em Javascript e usando a API Speech</h3>
<p>A API Speech permite que os desenvolvedores forneçam a entrada de voz e recursos de
saída de texto-para-voz em um navegador web. A própria API é independente da
implementação de reconhecimento e síntese de fala subjacente e pode suportar
reconhecimento e síntese baseados em servidor e em cliente / incorporado.
O código dessa aplicação encontra-se nesse repositório (e os códigos das outras ferramentas também)  e abaixo com alguns comentários.</p>


```

window.addEventListener('DOMContentLoaded', function(){

	var btn_gravacao = document.querySelector('#btn_gravar_audio'); //habilita o microfone
	//resp por receber a transcrição do audio
	var transcricao_audio = '';
	//controle se esta gravando ou n
	var esta_gravando = false;

	//verificar se o navegador dá suporte a API
	if(window.SpeechRecognition || window.webkitSpeechRecognition){
		var speech_api = window.SpeechRecognition || window.webkitSpeechRecognition;
		var recebe_audio = new speech_api();
		// definição de parâmetros de controle para o uso da api
		recebe_audio.continuous = true; //continua ou nao
		recebe_audio.interimResults = true; // o resultado pode ser alterado ou n
		recebe_audio.lang = "pt-BR"; //linguagem a ser usada

		//métodos de controle  (garante a mudança de texto do botao)
		recebe_audio.onstart = function(){
			esta_gravando = true;
			btn_gravacao.innerHTML = 'Gravando/Parar gravação';
		};
		recebe_audio.onend = function(){
			esta_gravando = false;
			btn_gravacao.innerHTML = 'Iniciar gravação';
		};
		//método para capturar o resultado do audio
		recebe_audio.onresult = function(event){
			var interim_transcript = '';
			for(var i = event.resultIndex; i < event.results.length; i++){
				if(event.results[i].isFinal){
					transcricao_audio += event.results[i][0].transcript;
				}else{
					interim_transcript += event.results[i][0].transcript;
				}
				var resultado = transcricao_audio || interim_transcript;
				document.getElementById('campo_texto').innerHTML = resultado;
			}
		};

		btn_gravacao.addEventListener('click', function(e){
			if(esta_gravando){
				recebe_audio.stop();
				return;
			}
			recebe_audio.start();
		}, false);

	}else{
		console.log('Navegador não apresenta suporte a api');
	}

}, false);


```

<h3>2. Conclusão </h3>
<p>Os estudos foram úteis para o conhecimento de diferentes tipos de ferramentas e poderá
direcionar o estudo para a análise profunda dos algoritmos utilizados nos recursos e,
com isso, poderão ser encontradas meios de melhorá-los de forma a atender ao
reconhecimento de padrões relacionados a palavras pronunciadas de forma incorreta,
conforme a norma culta.</p>
<p>Dentre as ferramentas testadas, a que demonstrou os melhores resultados foi a
API da google em Python . Outros recursos também foram encontrados, como a API
Houndify e a Microsoft Bing Voice Recognition , no entanto não foram testadas pelo fato
de a primeira não reconhecer a língua portuguesa e a segunda ser paga.</>


