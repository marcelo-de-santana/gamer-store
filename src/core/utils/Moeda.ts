export class Moeda {
  static formatar(
    valor: number,
    localizacao: string = "pt-BR",
    moeda: string = "BRL"
  ) {
    return (valor ?? 0).toLocaleString(localizacao, {
      style: "currency",
      currency: moeda,
    });
  }
}
