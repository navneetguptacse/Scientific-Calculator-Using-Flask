function appendValue(value) {
    const calculatorInput = document.getElementById("calculator-input");
    calculatorInput.value += value;
  }
  
  function clearInput() {
    const calculatorInput = document.getElementById("calculator-input");
    calculatorInput.value = "";
  }
  
  function calculateResult() {
    const calculatorInput = document.getElementById("calculator-input");
    const result = eval(calculatorInput.value);
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
    calculatorInput.value = result;
  }
  