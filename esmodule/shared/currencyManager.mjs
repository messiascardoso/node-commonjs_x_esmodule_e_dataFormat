//A variavel não fica global
const currency = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

export default class CurrencyManager {
  static format(valor) {
    return currency.format(valor);
  }
}
