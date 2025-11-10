"use strict";
// JS -TS 
// string, number, boolean, undefined, null
// tytpe script primitive type
// TS : never, unknown, void
Object.defineProperty(exports, "__esModule", { value: true });
// let userName : string = "Shawon123";
// userName = 12 Type 'number' is not assignable to type 'string'.
// let userId = '123';
// userId.toFixed() Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?
// let userId = 123;
// userId.toFixed;
let userName = "Shawon123";
// Implicit typing
let isAdmin2 = false;
// Explicit typing
let isAdmin = false;
// undefined
let x; //isAdmin : boolean = false; 'x' is declared but its value is never read.ts(6133) let x: any
// if there is no value, that any value so that we can add later like x = 5;
//  but if you write 
let y = undefined;
// then you assign something it will show error since you mention undefined already
// y = 5; Type '5' is not assignable to type 'undefined'.
//# sourceMappingURL=primitive.js.map