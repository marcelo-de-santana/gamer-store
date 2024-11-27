import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { Produto } from '@gstore/core';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly repository: ProdutoPrisma) {}

  @Post()
  salvarProduto(@Body() produto: Produto) {
    return this.repository.salvar(produto);
  }

  @Get()
  obterProdutos() {
    return this.repository.obter();
  }

  @Get(':id')
  obterProduto(@Param('id') id: string) {
    return this.repository.obterPorId(+id);
  }

  @Delete(':id')
  excluirProduto(@Param('id') id: string) {
    return this.repository.excluir(+id);
  }
}
