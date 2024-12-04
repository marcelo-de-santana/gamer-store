import { useContext } from "react";
import { ContextoPagamento } from "../contexts/ContextoPagamento";

export const usePagamento = () => useContext(ContextoPagamento);
