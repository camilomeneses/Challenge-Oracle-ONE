/**
 * Author : German Camilo Meneses Villota
 * Fecha : 09/01/2023
 */

// todo: DOM
let encrypt = document.getElementById('encrypt');
let decrypt = document.getElementById('decrypt');
let decryptResult = document.getElementById('decryptResult');
let btnDecrypt = document.getElementById('btnDecrypt');
let btnCopy = document.getElementById('btnCopy');

// todo: Functions
// ! Encrypt Function
function encryptFn(text) {
  // ? Utilizar una expresión regular para reemplazar ciertos caracteres en el resultado encriptado
  let encrypted = text
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, ',');

  // ? Encriptar la cadena de texto a base64
  encrypted = btoa(encrypted);

  return encrypted;
}

// ! Decrypt Funtion
function decryptFn(encrypted) {
  // ? Reemplazar los caracteres especiales en el texto encriptado
  encrypted.replace(/-/g, '+').replace(/_/g, '/').replace(/,/g, '=');

  // ? Desencriptar el texto a base64
  decrypted = atob(encrypted);

  return decrypted;
}

// todo: Events
// * Encrypt Event
encrypt.addEventListener('input', () => {
  let text = encrypt.value;
  decrypt.value = encryptFn(text);
});

// * Decrypt Event
decrypt.addEventListener('input', () => {
  return decrypt.value;
});

// * btnDecrypt Events
btnDecrypt.addEventListener('mousedown', () => {
  decrypt.value = decryptFn(decrypt.value);
});

btnDecrypt.addEventListener('mouseup', () => {
  if (encrypt.value === '') {
    decrypt.value = encryptFn(decrypt.value);
    return;
  }
  decrypt.value = encryptFn(encrypt.value);
});

// * btnCopy Events
btnCopy.addEventListener('click', () => {
  document.getElementById('decrypt').select();
  document.execCommand('copy');
});
