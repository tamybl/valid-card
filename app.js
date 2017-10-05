function isValidCard() {
	do {
		var cardNumber = prompt('Ingrese un numero de Tarjeta'); // Pide al usuario que ingrese el número a verificar
		var arrayNumbers = [];
		var sumTotal = 0;
		if (/^[0-9]+$/.test(cardNumber)) { // Condicion para que acepte solo numeros 
			for (var i = cardNumber.length - 1; i >= 0; i--) { // Ciclo for que inicia desde el final y toma todos los numeros
				arrayNumbers[i] = parseInt(cardNumber[i]); // Guarda impar
				i--;
				arrayNumbers[i] = cardNumber[i]*2; // Guarda par
				if (arrayNumbers[i] > 9) { // En caso que multiplicacion sea mayor a 9 se suman los digitos ej: 10 = 1 + 0 = 1
					arrayNumbers[i] = 1 + (arrayNumbers[i]%10); // Calcula y sobrescribe en la misma posicion
				}
			}
			for (var j = 0; j < cardNumber.length; j++) {
				sumTotal = sumTotal + arrayNumbers[j]; // Sumatoria de todos los numeros de la tarjeta
			}
			if (sumTotal % 10 == 0) {
				return alert('Tu número de Tarjeta es VÁLIDO');
			}
			else {
				return alert('Tu número de Tarjeta es INVÁLIDO');
			}
		}
		else {
			alert('Ingresa un Número Valido');
		}

	} while (cardNumber == "" || /^[0-9]+$/.test(cardNumber) === false); // Ejecuta el do while mientras que no se cumplan las condiciones.
}

isValidCard();  // Se llama a la funcion