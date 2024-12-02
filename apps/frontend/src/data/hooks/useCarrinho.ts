import { useContext } from "react";
import { ContextoCarrinho } from "../contexts/ContextoCarrinho";

export const useCarrinho = () => useContext(ContextoCarrinho);
