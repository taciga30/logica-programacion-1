let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraIntentos = "intento";
let maximoIntentos = 3;
while(numeroUsuario!=numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1  y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);

    if(numeroUsuario===numeroSecreto){
        alert(`Has acertado!, el número es: ${numeroUsuario}. Lo hiciste en ${intentos == 1? "intento":"intentos"} ${palabraIntentos}`);
    }else{
        if(numeroUsuario>numeroSecreto){
            alert("El número secreto es menor")
        }else{
            alert("El número secreto es mayor");
        }
        intentos++;
        // palabraIntentos = "intentos";
        if (intentos > maximoIntentos) {
        alert(`Llegaste al número máximo ${maximoIntentos} de intentos`);
        break;
    }
}
}
// alert("¡Bienvenido y bienvenida a nuestro sitio web!");
// // alert('¡Bienvenido a nuestro sitio web!');
// let nombre = "Luna";
// // let nombre = "Lua";
// let edad = 25;
// // let edad = 25;
// let numeroDeVentas = 50;
// // let numeroDeVentas = 50;
// let saldoDisponible = 1000;
// // let saldoDisponible = 1000;
// alert("¡Error! Completa todos los campos");
// // alert('¡Error! Completa todos los campos');
// let mensajeDeError = "¡Error! Completa todos los campos";
// alert(mensajeDeError);
// // let mensajeDeError = '¡Error! Completa todos los campos';
// // alert(mensajeDeError);
// nombre = prompt("Digite su nombre de usuario:");
// // let nombre = prompt('Digite su nombre');
// edad = prompt("Ingrese su edad:");
// // let edad = prompt('Digite su edad');
// if(edad>=18){
//     alert("¡Puedes obtener tu licencia de conducir!");
// }
// // let edad = prompt('Digite su edad');
// // if (edad >= 18) {
// //     alert('¡Puede obtener su licencia de conducir!');
// // }

// let diaSemana = prompt("Qué día de la semana es?");
// if(diaSemana=="Sábado"||diaSemana=="Domingo"){
// alert("¡Buen fin de semana!");
// }else{
//     alert("¡Buena semana!");
// }

// // let diaDeLaSemana = prompt('¿Qué día de la semana es?');
// // if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') {
// //     alert('¡Buen fin de semana!');
// // } else {
// //     alert('¡Buena semana!');
// // }

// let numero = prompt("Ingresa un número");
// if(numero>=0){
// alert("El número ingresado es positivo");
// }else{
//     alert("El número ingresado es negativo");
// }

// // let numero = prompt('Escribe un número positivo o negativo');
// // if (numero > 0) {
// //     alert('Número positivo');
// // } else if (numero < 0) {
// //     alert('Número negativo');
// // } else {
// //     alert('El número es cero');
// // }

// let juegoP1 = prompt("Si el semáforo está en rojo pasas la calle?,si o no");
// let juegoP2 = prompt("Si el fogón está prendido con una olla coges la olla sin trapo?,si o no");
// let juegoP3 = prompt("Si el se sube una mujer embarazada al bus cedes tu puesto?,si o no");
// let puntuacion = 0
// if(juegoP1=="no"){
//     puntuacion += 50;
// }else if(juegoP1=="si"){
//     puntuacion;
// }
// if(juegoP2=="no"){
//     puntuacion += 50;
// }else if(juegoP2=="si"){
//     puntuacion;
// }
// if(juegoP3=="si"){
//     puntuacion += 50;
// }else if(juegoP3=="no"){
//     puntuacion;
// }
// if(puntuacion>=100){
//     alert("¡Felicidades has ganado!");
// }else{
//     alert("Intenta nuevamente para ganar");
// }

// // let puntuacion = 105;
// // if (puntuacion >= 100) {
// //     console.log('¡Enhorabuena, has ganado!');
// // } else {
// //     console.log('Inténtalo de nuevo para ganar.');
// // }

// let saldoCuenta = 100;
// // template string `${}`
// alert(`El saldo de tu cuenta es ${saldoCuenta}`);

// // let saldoCuenta = 500; // Ejemplo de saldo
// // alert(`Tu saldo es de $${saldoCuenta}.`);

// let nombre = prompt("Ingresa tu nombre:");
// alert(`Hola, ${nombre}, bienvenid@`);

// // let nombre = prompt('Por favor, ingresa tu nombre');
// // alert(`¡Bienvenido, ${nombre}!`);

// let contador = 1;
// while(contador<10){
//     contador++;
//     console.log(contador);
// }

// // let contador = 1;
// // while (contador <= 10) {
// // console.log(contador);
// // contador++;
// // }

// let contador1 = 10;
// while(contador1>0){
//     contador1--;
//     console.log(contador1);
// }

// // let contador = 10;
// // while (contador >= 0) {
// // console.log(contador);
// // contador--;
// // }

// let cuentaProgresiva = prompt("Digita un número");
// let contar = 0;
// while(contar<cuentaProgresiva){
//     let numero = contar++;
//     console.log(numero);
// }

// // let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

// // while (numeroMaximo >= 0) {
// // console.log(numeroMaximo);
// // numeroMaximo--;
// // }

// // let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");
// // let contador2 = 0;

// // while (contador2 <= numeroMaximo) {
// // console.log(contador2);
// // contador2++
// // }

// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

// Resolução dos desafios do curso de lógica de programação
// Praticar a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt), é essencial para sua carreira de desenvolvimento de software. Esses fundamentos fornecem a base para resolver problemas de forma estruturada, tomar decisões no código, criar iterações controladas e interagir eficazmente com os usuários.

// Compreender esses conceitos não apenas facilita o aprendizado de novas linguagens e tecnologias, mas também capacita você a criar soluções inovadoras, depurar eficientemente e manter a qualidade ao longo do ciclo de vida do software. Portanto, investir tempo nesses princípios desde cedo é fundamental para construir uma base sólida e bem-sucedida no campo da programação.

// Aquecendo na programação - Respostas
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// console.log('Boas vindas');
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let nome = 'Gui Lima';
// console.log(`Olá, ${nome}!`);
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
// let nome = 'Gui Lima';
// alert(`Olá, ${nome}!`);
// Utilize o prompt e faça a seguinte pergunta: Qual  a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
// console.log(linguagemPreferida);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 42;
// let valor2 = 8;
// let resultado = valor1 + valor2;

// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 10;
// let valor2 = 8;
// let resultado = valor1 - valor2;

// console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let idade = prompt('Digite a sua idade:');
// if (idade > 17) {
//     console.log('Você é maior de idade.');
// } else {
//     console.log('Você é menor de idade.');
// }
// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// var numero = parseFloat(prompt("Digite um número:"));


// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é zero.");
// }
// Use um loop while para imprimir os números de 1 a 10 no console.
// let numero = 1;
// while (numero <= 10) {
//     console.log(numero);
//     numero++;
// }
// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = 8; // Substitua pelo valor da nota que deseja testar

// if (nota >= 7) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }
// Use o Math.ramdon para gerar qualquer número aleatório e exiba esse número no console.
// let numeroAleatorio = Math.random();
// console.log(numeroAleatorio);
// Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
// console.log(numeroInteiroAleatorio);
// Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
// console.log(numeroInteiroAleatorio);