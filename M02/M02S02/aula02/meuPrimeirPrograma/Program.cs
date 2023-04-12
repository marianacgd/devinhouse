
internal class Program
{
    private static void Main(string[] args)
    {
        //Variaveis
        // String nome; //tipo de dado texto
        // int idade;
        //int numero1, numero2; //Declaração de duas variaveis do tipo inteiro
        //bool variavelBoolean = true;

        //Mensagem instrucionais ao usuário
        // Console.WriteLine("Olá Mundo! Digite o seu nome: ");

        //Entradas: inserção de dados
        // nome = Console.ReadLine(); //Aguardando o usuário digitar

        // Console.WriteLine("Olá " + nome + ", digite a sua idade: ");
        // idade = int.Parse(Console.ReadLine());

        // Console.WriteLine("Olá " + nome + ", digite um número: ");
        // numero1 = Console.Read();

        // Console.WriteLine("Olá " + nome + ", digite outro número: ");
        // numero2 = Console.Read();

        //Processamentos: calculos, regras de negócios...

        //Saída: mostrar resultados em tela
        //Console.WriteLine("Olá " + nome + "! Seja bem-vindo ao C#!");
        // Console.WriteLine("Olá " + nome + ", a sua idade é " + idade + " anos.");



        //EXEMPLO 02, operadores

        // int num1 = 10;
        // int num2 = 15;

        // int soma = num1 + num2; //25
        // int subtracao = num1 - num2; //-5
        // int multiplicacao = num1 * num2; //150
        // double divisao = num1 / num2; //0 
        // int restoDaDivisao = num1 % num2; //10

        // Console.WriteLine(soma);
        // Console.WriteLine(subtracao);
        // Console.WriteLine(multiplicacao);
        // Console.WriteLine(divisao);
        // Console.WriteLine(restoDaDivisao);


        //EXEMPLO 03

        //Entradas
        // Console.WriteLine("Digite o primeiro número: ");
        // int numero1 = int.Parse(Console.ReadLine());

        // Console.WriteLine("Digite o primeiro número: ");
        // int numero2 = int.Parse(Console.ReadLine());

        // //Processamentos
        // int soma = numero1 + numero2;

        //Saída
        // Console.WriteLine("A soma dos números é: " + soma);

        //EXEMPLO 04

        //Console.WriteLine((2 + 2) * 2);

        //EXEMPLO 05
        
        // Console.WriteLine("Digite o primeiro número: ");
        // int num1 = int.Parse(Console.ReadLine());

        // Console.WriteLine("Digite o segundo número: ");
        // int num2 = int.Parse(Console.ReadLine());

        // if (num1 > num2) {
        //     Console.WriteLine("O primeiro número é MAIOR!");
        // } else {
        //     Console.WriteLine("O segundo número é MAIOR!");
        // }

        // Console.WriteLine(1 == 1);
        // Console.WriteLine(1 >= 1);


        //EXEMPLO 06

        // Console.WriteLine("Digite um número para verificar se ele é impar ou par: ");
        // int numero = int.Parse(Console.ReadLine());

        // if (numero % 2 == 0 ) {
        //     Console.WriteLine("O número é par!");
        // } else {
        //     Console.WriteLine("O número é impar!");
        // }

        // Console.WriteLine(((2 * 4) + 10) >= 10); 


        //DESAFIO CALCULADORA

        //Variaveis
        double numero1, numero2;
        char operacao;

        Console.WriteLine("Olá! Seja bem-vinda(o) a Calculadora!\n");

        Console.WriteLine("Agora, escolha uma operação: \n");

        Console.WriteLine("+ : SOMAR");
        Console.WriteLine("- : SUBTRAIR");
        Console.WriteLine("* : MULTIPLICAR");
        Console.WriteLine("/ : DIVIDIR");
        Console.WriteLine("? : PARA SAIR");

        //Entradas
        Console.Write("\nDigite a operação escolhida: ");
        operacao = char.Parse(Console.ReadLine());

        Console.WriteLine("Digite o primeiro número: ");
        numero1 = int.Parse(Console.ReadLine());

        Console.WriteLine("Digite o segundo número: ");
        numero2 = int.Parse(Console.ReadLine());

        //Processametnos/Operaçoes
        // if (operacao == '+') {
        //     Console.WriteLine("soma");
        // } else if (operacao == '-') {
        //     Console.WriteLine("subtracao");
        // } else if (operacao == '*') {
        //     Console.WriteLine("multiplicacao");
        // } else if (operacao == '/') {
        //     Console.WriteLine("divisao");
        // } else if (operacao == '?') {
        //     Console.WriteLine("sair");
        // } else {
        //     Console.WriteLine("Opção Inválida! Digite uma opção disponível no menu.");
        // }
        
        //Menu com Switch Case
        switch (operacao) 
        {
            case '+': 
                Console.WriteLine("Soma: " + (numero1 + numero2));
                break; 
            case '-': 
                Console.WriteLine("Subtração: " + (numero1 - numero2));
                break; 
            case '*': 
                Console.WriteLine("Multiplicação: " + (numero1 * numero2));
                break; 
            case '/': 
                Console.WriteLine("Divisão: " + (numero1 / numero2));
                break; 
            case '?': 
                Console.WriteLine("Saindo do sistema...");
                break; 
            default: 
                Console.WriteLine("Erro!");
                break;        
        }


        //Saídas



    }
}