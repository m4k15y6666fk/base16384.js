import assert from 'assert'
import { encode, decode, toCJK, convertCJKtoUint16Array } from "./lib/index.js";


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


const data = Uint8Array.from(
    { length: getRandomInt(12345, 23456) },
    _ => getRandomInt(0, 256)
);
console.log(data);


const _encoded = toCJK(encode(data));
console.log(_encoded);

const _decoded = decode(convertCJKtoUint16Array(_encoded));
console.log(_decoded);


assert.deepEqual(data, _decoded);
