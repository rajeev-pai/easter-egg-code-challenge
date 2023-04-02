import { AES, enc } from 'crypto-js';

import { cipherText } from '../secret';

export function encrypt(message: string, key: string) {
  return AES.encrypt(message, key).toString();
}

export function decryptWith(secretKey: string) {
  const bytes = AES.decrypt(cipherText, secretKey);
  return bytes.toString(enc.Utf8);
}
