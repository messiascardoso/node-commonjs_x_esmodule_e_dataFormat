function updateOutput(value) {
  const output = document.getElementById('output');
  output.innerHTML = value;
}

window.inputMonitor = (value)=> updateOutput(CurrencyManager.format(value));