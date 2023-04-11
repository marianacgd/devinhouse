
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
        
        Console.WriteLine("Digite o primeiro número: ");
        int num1 = int.Parse(Console.ReadLine());

        Console.WriteLine("Digite o segundo número: ");
        int num2 = int.Parse(Console.ReadLine());

        if (num1 > num2) {
            Console.WriteLine("O primeiro número é MAIOR!");
        } else {
            Console.WriteLine("O segundo número é MAIOR!");
        }

        // Console.WriteLine(1 == 1);
        // Console.WriteLine(1 >= 1);

    }
}