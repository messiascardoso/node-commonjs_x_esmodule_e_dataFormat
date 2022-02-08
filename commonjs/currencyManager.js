(() => {
  const currency = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  class CurrencyManager {
    static format(valor) {
      return currency.format(valor);
    }
  }

  window.CurrencyManager = CurrencyManager;
})();
