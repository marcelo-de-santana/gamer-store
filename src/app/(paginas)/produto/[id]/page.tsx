import { produtos } from "@/core";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id === id);

  return (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <h1>Produto {produto?.nome}</h1>
      </div>
    </div>
  );
}
