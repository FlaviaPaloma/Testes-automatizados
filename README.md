# 🚚 Cálculo de Frete – Testes Automatizados

Projeto acadêmico que implementa a função `calcularFrete()` em JavaScript e utiliza testes automatizados no padrão **AAA (Arrange – Act – Assert)** para validar todos os cenários.

---

## 📋 Regras de Negócio

1. **Custo por km**:
   - Até 5 kg → R$ 0,50/km  
   - 5,01 a 20 kg → R$ 0,75/km  
   - Acima de 20 kg → R$ 1,00/km  

2. **Taxa adicional**:
   - Distância > 500 km → + R$ 10,00  

3. **Validações**:
   - Peso e distância devem ser maiores que zero.

4. **Retorno**:
   - Valor numérico com duas casas decimais.

---

## 🛠 Tecnologias Utilizadas

- Node.js (LTS)
- Test runner nativo do Node (`node:test` e `node:assert/strict`)
- JavaScript ES Modules


