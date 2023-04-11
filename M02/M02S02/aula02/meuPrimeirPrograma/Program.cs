
internal class Program
{
    private static void Main(string[] args)
    {
        //Variaveis
        String nome; //tipo de dado texto
        int idade;
        //int numero1, numero2; //Declaração de duas variaveis do tipo inteiro
        //bool variavelBoolean = true;

        //Mensagem instrucionais ao usuário
        Console.WriteLine("Olá Mundo! Digite o seu nome: ");

        //Entradas: inserção de dados
        nome = Console.ReadLine(); //Aguardando o usuário digitar

        Console.WriteLine("Olá " + nome + ", digite a sua idade: ");
        idade = int.Parse(Console.ReadLine());

        // Console.WriteLine("Olá " + nome + ", digite um número: ");
        // numero1 = Console.Read();

        // Console.WriteLine("Olá " + nome + ", digite outro número: ");
        // numero2 = Console.Read();

        //Processamentos: calculos, regras de negócios...

        //Saída: mostrar resultados em tela
        //Console.WriteLine("Olá " + nome + "! Seja bem-vindo ao C#!");
        Console.WriteLine("Olá " + nome + ", a sua idade é " + idade + " anos.");
    }
}