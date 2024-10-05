import Link from "next/link";
import { IconeCarrinho, Logo } from "../shared";

export function Cabecalho() {
  const qtdeItens = 0;
  //const {qtdeItens} = useCarrinho()

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
