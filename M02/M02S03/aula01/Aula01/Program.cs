

internal class Program
{
  private static void Main(string[] args)
  {
    // ExibirSenaoZero(5);
    // ExibirSenaoZero(0);

    // ExibirBoasVindas();

    int resultado1 = Calcula(1, 2);
    Console.WriteLine(resultado1);

    int resultado2 = Calcula(3, 4);
    Console.WriteLine(resultado2);

    int resultado3 = Calcula(1, 5, 6);
    Console.WriteLine(resultado3);

    // double Circulo = CalculoCirculo(15);
    // Console.WriteLine(Circulo);

  }
  static int Calcula(int num1, int num2)
  {
    return num1 + num2;
  }
  static double Calcula(int num1, double num2)
  {
    return num1 + num2;
  }

  static int Calcula(int num1, int num2, int num3)
  {
    return num1 + num2 + num3;
  }

  // static double CalculoCirculo(double raio)
  // {
  //   double pi = 3.1415;
  //   return 2 * pi * raio;
  // }

  // static void ExibirSenaoZero(int num)
  // {
  //   if (num == 0)
  //     return;
  //   Console.WriteLine("Número: " + num);
  // }
  // static void ExibirBoasVindas()
  // {
  //   Console.WriteLine("Bem-vindo ao módulo de Backend do DEVinHouse");
  // }
}