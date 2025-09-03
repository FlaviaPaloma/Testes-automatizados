// index.test.js
import test from "node:test";
import assert from "node:assert/strict";
import { calcularFrete } from "./index.js";

// CT01 - Peso até 5 kg (sem taxa adicional)
test("CT01 - até 5 kg, distância curta", () => {
  // Arrange
  const peso = 3;      // kg
  const distancia = 10; // km
  const esperado = 5.00; // 10 * 0.50

  // Act
  const total = calcularFrete(peso, distancia);

  // Assert
  assert.equal(total, esperado);
});

// CT02 - Entre 5.01 e 20 kg (sem taxa adicional)
test("CT02 - 5.01 a 20 kg, distância média", () => {
  // Arrange
  const peso = 10;       // kg
  const distancia = 200; // km
  const esperado = 150.00; // 200 * 0.75

  // Act
  const total = calcularFrete(peso, distancia);

  // Assert
  assert.equal(total, esperado);
});

// CT03 - Acima de 20 kg e distância > 500 km (com taxa adicional)
test("CT03 - >20 kg e distância longa, aplica taxa fixa", () => {
  // Arrange
  const peso = 25;       // kg
  const distancia = 600; // km
  const esperado = 610.00; // (600 * 1.00) + 10

  // Act
  const total = calcularFrete(peso, distancia);

  // Assert
  assert.equal(total, esperado);
});

// CT04 - Valores inválidos (peso <= 0 ou distância <= 0)
test("CT04 - entradas inválidas disparam erro", () => {
  // Arrange / Act / Assert
  assert.throws(() => calcularFrete(0, 100), /Valores inválidos/);
  assert.throws(() => calcularFrete(-1, 50), /Valores inválidos/);
  assert.throws(() => calcularFrete(5, 0), /Valores inválidos/);
});

// CT05 - Limite da taxa adicional (500 vs 501 km)
test("CT05 - exatamente 500km não tem taxa; 501km tem", () => {
  // Arrange
  const peso = 10; // faixa de 0.75 por km

  // Act
  const semTaxa = calcularFrete(peso, 500);  // 500 * 0.75 = 375.00
  const comTaxa = calcularFrete(peso, 501);  // (501 * 0.75) + 10 = 385.75

  // Assert
  assert.equal(semTaxa, 375.00);
  assert.equal(comTaxa, 385.75);
});
