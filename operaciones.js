const fs = require("fs");

function registrar(nombre, edad, animal, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(citas));
  console.log(`Cita registrada para ${nombre}`);
}

function leer() {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log("Citas registradas:");
  citas.forEach((cita, i) => {
    console.log(`${i + 1}.`, cita);
  });
}

module.exports = { registrar, leer };
