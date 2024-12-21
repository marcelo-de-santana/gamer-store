import { CalcularParcelamento } from "@gstore/core";

export function useParcelamento(valor: number, quantidade: number = 12) {
  return new CalcularParcelamento().executar(valor, quantidade);
}
