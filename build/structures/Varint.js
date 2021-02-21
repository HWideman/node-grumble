"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
function encode(i) {
    const arr = [];
    if (i < 0) {
        i = ~i;
        if (i <= 0x3) {
            return Buffer.from([0xfc | i]);
        }
        arr.push(0xf8);
    }
    if (i < 0x80) {
        arr.push(i);
    }
    else if (i < 0x4000) {
        arr.push((i >> 8) | 0x80);
        arr.push(i & 0xff);
    }
    else if (i < 0x200000) {
        arr.push((i >> 16) | 0xc0);
        arr.push((i >> 8) & 0xff);
        arr.push(i & 0xff);
    }
    else if (i < 0x10000000) {
        arr.push((i >> 24) | 0xe0);
        arr.push((i >> 16) & 0xff);
        arr.push((i >> 8) & 0xff);
        arr.push(i & 0xff);
    }
    else if (i < 0x100000000) {
        arr.push(0xf0);
        arr.push((i >> 24) & 0xff);
        arr.push((i >> 16) & 0xff);
        arr.push((i >> 8) & 0xff);
        arr.push(i & 0xff);
    }
    else {
        arr.push(0xf4);
        arr.push((i >> 56) & 0xff);
        arr.push((i >> 48) & 0xff);
        arr.push((i >> 40) & 0xff);
        arr.push((i >> 32) & 0xff);
        arr.push((i >> 24) & 0xff);
        arr.push((i >> 16) & 0xff);
        arr.push((i >> 8) & 0xff);
        arr.push(i & 0xff);
    }
    return Buffer.from(arr);
}
exports.encode = encode;
//# sourceMappingURL=Varint.js.map