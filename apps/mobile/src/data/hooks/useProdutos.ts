import { useContext } from "react";
import { ContextoProdutos } from "../contexts/ContextoProdutos";

export const useProdutos = () => useContext(ContextoProdutos);
