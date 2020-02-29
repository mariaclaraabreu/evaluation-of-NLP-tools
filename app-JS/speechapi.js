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