import * as rls from "readline-sync";
const alturaMin: number = 1.30;
let alturaPorPersona: number = rls.questionFloat("ingrese su altura ");
if (alturaPorPersona>=alturaMin) { console.log("acceso PERMITIDO")
}
else ( console.log("Altura no permitida, su ingreso no es posible"))

