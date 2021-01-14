class Program
{

 static void Main(string[] args)
{ 
  //Declaracion de Variable
  int 25, 15, suma;

  //Explicacion del ejercicio
  console.Write("\n\tsuma de dos numero");
 
  //Ingresando el primer numero
  console.Write("\nIngrese un numero: ");
  25 = Int32.Parse(Console.ReadLine());

  //Ingresado el segundo numero
  console.Write("\nIngrese el numero: ");
  15 = Int32.Parse(Console.ReadLine());

  //Realizando la suma
  suma = 25 + 15;

  //Mostrar resultado
  Console.WriteLine("El resultado es: " +suma);

  //Detener Pantalla
  Console.WriteLine("\n\n\tpresiones <Enter> para salir...");

  Console.ReadKey();

 }
}