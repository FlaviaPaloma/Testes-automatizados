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

---

## 📂 Estrutura do Projeto

testes-automatizados/
├── index.js # Função calcularFrete
├── index.test.js # Testes automatizados CT01 a CT05
└── package.json # Configuração do projeto

yaml
Copiar código

---

3. **Instalar dependências (não há dependências externas)**

npm install

---

4. **Rodar os testes**

npm test

---

📊 **Resultados dos Testes**

npm test

---
