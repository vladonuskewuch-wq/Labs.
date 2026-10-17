'use strict';

function generateKey(length, characters) {
  let key = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    key += characters[randomIndex];
  }
  return key;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';[cite: 1]
const key = generateKey(16, characters);[cite: 1]
console.log(key);