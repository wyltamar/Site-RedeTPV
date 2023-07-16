var inputValue = ""; // variável global para armazenar o valor da input
    
    function saveInputValue(input) {
      inputValue = input.value; // salva o valor da input
    }
    
    function preventInputClose(input) {
      input.value = inputValue; // restaura o valor da input anterior
      input.focus(); // mantém o foco na input
    }