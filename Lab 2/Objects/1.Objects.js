'use strict';

function fn() {
  const obj1 = { name: 'First' };
  let obj2 = { name: 'Second' };

  // Зміна властивості за посиланням працює для обох
  obj1.name = 'Better First';
  obj2.name = 'Better Second';

  // obj1 = { name: 'Error' }; // Викличе помилку, бо obj1 - це const, а посиланняне можна змінювати
  obj2 = { name: 'Another Second' }; // Працює, бо obj2 - це let

  console.log(obj1, obj2);
}