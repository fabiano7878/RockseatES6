/**
 * Aula Instalando node e yarn, Aula configurando Babel.
 * Configuramos o NodeJS, o Yarn e o Babel.
 * Assim como executamos o ambiente de desenvolvimento e instalamos alguymas dependencias que o Babel precisa.
 * criamos o código abaixo, demostrando como o babel consegue interpretar o ES6 com a sintaxe de orientação a objetos.
 * veja a sintaxe, chamando uma classe e um metodo, o babel criou um arquivo chamado bundle e converte o código para 
 * uma sintaxe que todos os browsers conseguem entender. o alert foi de teste, ele mostra que algumas coisas em java script
 * continuarão funcionando.
 */
alert("Teste!");

class Teste{

    metodo(){
        
    }
}


/** 
 * Aula Classes, exemplifica um pouco mais sobre o conceito de orientação objeto na implementação com o ES6
*/





/**
 * Aula Short Sintaxe, aprendemos configurar o ambiente com o webpack e trocar o babel de execução pelo web pack.
 * depois escrevemos o código abaixo mais inxuto, criamos o arquivo funcoes.js com a função soma() e
 * importamos aqui no mani.js passando os parametros e xecutamos.
 */
import {soma} from './funcoes';
console.log(soma(3,2));
