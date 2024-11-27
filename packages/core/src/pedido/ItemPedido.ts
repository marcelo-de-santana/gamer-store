import { Produto } from "../produto";

export interface ItemPedido {
  id: number;
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
}
