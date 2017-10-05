## TARJETA VÁLIDA

### 1. Diagrama de Flujo

![Diagrama de Flujo para Tarjeta Valida] 
(https://i.imgur.com/VXKnkhM.jpg)

### 2. Pseudocódigo

+ Inicio
+ Entrada de datos. Se pide al usuario el numero de tarjeta
+ Condicional (Decisión). La respuesta del punto anterior genera 2 caminos:
  - Si el usuario digita un valor fuera del rango y condiciones establecidas en el if, retorna un alert() que le avisa que es una opción inválida y le muestra nuevamente la ventana para escribir la opción.
  - Si digita un valor correcto (solo números) se realiza el proceso de verificacion

+Proceso
  - Verificación
  ```javascript variable (word) donde se almacena palabra;
 arreglo arrayNumbers, finalWord;
 if (Expresion regular que solo permite numeros [0-9]) {
     ciclo for (empezando del ultimo indice de la tarjeta ; hasta el indice 0; indice--) {
        almacenar dato impar en arrayNumbers[indice] (sin modificar)
        variable del for disminuye en 1 (indice--);
        almacenar dato par multiplicado por 2 en arrayNumbers[indice];
        if (En caso que multiplicacion sea mayor a 9 se suman los digitos ej: 10 = 1 + 0 = 1) {
          Calcular la suma de los digits y sobrescribr en la misma posicion;
     }
  }
  ```
+ El programa devuelve mediante un _alert() el resultado. 
+ Fin
