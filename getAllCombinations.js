/*
Calculamos el número de combinaciones posible
combinaciones = 2 ** num_items

Iteramos tantas veces como combinaciones haya.
Usamos la representación binaria de la combinación actual
para saber que elementos del array añadir al subset.

Para un array con tres elementos, por ejemplo [1, 2, 3]

1ª combinacion 000 => []
2ª combinacion 001 => [1]
3ª combinacion 010 => [2]
4ª combinacion 011 => [1, 2]
5ª combinacion 100 => [3]
6ª combinacion 101 => [1, 3]
7ª combinacion 110 => [2, 3]
8ª combinacion 111 => [1, 2, 3]

Se puede ver que los 1 indican que elementos del array
hay que añadir al subset.
Aquí una función que aplica esto
*/
const getAllCombinations = (array) => {
  const combinations = 2 ** array.length;
  const powerset = [];
  for (let c = 0; c < combinations; c++) {
    const subset = array.filter((_, i) => {
      return c & (1 << i);
    });
    powerset.push(subset);
  }
  return powerset;
};

getPowerset([1, 2, 3]);
