"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var alturaMin = 1.30;
var alturaPorPersona = rls.questionFloat("ingrese su altura ");
if (alturaPorPersona >= alturaMin) {
    console.log("acceso PERMITIDO");
}
else
    (console.log("Altura no permitida, su ingreso no es posible"));
