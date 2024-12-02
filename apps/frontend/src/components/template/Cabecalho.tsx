"use client";
import Link from "next/link";
import { Logo } from "../shared/Logo";
import { IconeCarrinho } from "../shared/IconeCarrinho";
import { useCarrinho } from "@/data/hooks/useCarrinho";

export function Cabecalho() {
  const { qtdeItens } = useCarrinho();

  return (
    <div
      className="flex flex-col h-20"
      style={{
        background:
          "linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)",
      }}
    >
      <div className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href="/checkout/carrinho">
            <IconeCarrinho qtdeItens={qtdeItens} />
          </Link>
        </div>
      </div>
    </div>
  );
}
