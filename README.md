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

## 🚀 Como Executar

1. **Instalar o Node.js**  
   [Baixar Node.js LTS](https://nodejs.org/)

2. **Clonar este repositório**
   ```bash
   git clone https://github.com/seu-usuario/testes-automatizados.git
   cd testes-automatizados
Instalar dependências (não há dependências externas)

bash
Copiar código
npm install
Rodar os testes

bash
Copiar código
npm test
✅ Casos de Teste
Código	Descrição	Entrada	Saída Esperada
CT01	Até 5 kg	(3, 10)	5.00
CT02	Entre 5,01 e 20 kg	(10, 200)	150.00
CT03	Acima de 20 kg, > 500 km	(25, 600)	610.00
CT04	Valores inválidos	(0, 100) / (-1, 50) / (5, 0)	Erro
CT05	Limite taxa adicional	(10, 500) / (10, 501)	375.00 / 385.75

📊 Resultados dos Testes
Comando executado:

bash
Copiar código
npm test
Saída obtida:

objectivec
Copiar código
✔ CT01 - até 5 kg, distância curta
✔ CT02 - 5.01 a 20 kg, distância média
✔ CT03 - >20 kg e distância longa, aplica taxa fixa
✔ CT04 - entradas inválidas disparam erro
✔ CT05 - exatamente 500km não tem taxa; 501km tem
tests 5 | pass 5 | fail 0
✅ Todos os casos de teste passaram com sucesso.
