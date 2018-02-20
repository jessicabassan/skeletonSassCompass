# Front-End Skeleton
#### Pequeno kickstart para projetos com uso intenso do front-end. Dependencias:

  - Npm
  - Compass

Para iniciar: 
```sh
$ npm install
$ gem install compass
```
Para rodar o projeto style basta usar as tasks: 

- sass 
    
    ```
    $ gulp sass:watch
    ```
    
- js 

    ```
    $ gulp scripts
    ```
    
>Estrutura: 

* /assets:
    * /sass
	    * /style.scss -> onde sera feito os imports de todos os styles pertinentes para gerar um unico style.css
	    * /assets.scss -> variaveis globais, mixins e imports de scss do projeto e de terceiros, como: bootstrap, font-awesome, owl-slider, etc
    * /css
		* *tudo aqui dentro e junkie do gulp, apenas o style.css e usado no projeto.
	* /scripts
		* scripts.js -> arquivo de scripts do projeto
	* /js
		* script.js -> e gerado de forma minificada baseado na task "gulp scripts". Por default contem: jQuery, Bootstrap e suas depencias e o Scripts.js
	* /fonts
		* contem todas as fonts do font-awesome e as fontes usadas no projeto. Sempre bom atualizar os arquivos do font-awesome de acordo com a instalacao via npm, basta acessar "/node_modules/font-awesome/fonts" copiar seus files e colar neste diretorio
	* config.rb -> arquivo de configuracao do compass# skeletonSassCompass
# skeletonSassCompass

Créditos Pedro H C Scursel
