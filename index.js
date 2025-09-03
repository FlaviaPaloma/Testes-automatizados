// index.js
export function calcularFrete(pesoKg, distanciaKm) {
  // validações básicas
  const valoresInvalidos =
    typeof pesoKg !== "number" ||
    typeof distanciaKm !== "number" ||
    !Number.isFinite(pesoKg) ||
    !Number.isFinite(distanciaKm) ||
    pesoKg <= 0 ||
    distanciaKm <= 0;

  if (valoresInvalidos) {
    throw new Error("Valores inválidos");
  }

  // tabela de preços por km
  let custoPorKm;
  if (pesoKg <= 5) {
    custoPorKm = 0.50;
  } else if (pesoKg <= 20) {
    custoPorKm = 0.75;
  } else {
    custoPorKm = 1.00;
  }

  // calcula
  let total = distanciaKm * custoPorKm;

  // taxa fixa para distâncias > 500 km
  if (distanciaKm > 500) {
    total += 10.00;
  }

  // retornar com 2 casas como número
  return Number(total.toFixed(2));
}
