import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PedidoPrisma } from './pedido.prisma';
import { Pedido } from '@gstore/core';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly repository: PedidoPrisma) {}

  @Post()
  async salvar(@Body() pedido: Pedido) {
    return this.repository.salvar(pedido);
  }

  @Get()
  async obterPedidos() {
    return this.repository.obter();
  }

  @Get(':id')
  async obterPedidoPorId(@Param('id') id: string) {
    return this.repository.obterPorId(+id);
  }

  @Delete(':id')
  async excluirPedido(@Param('id') id: string) {
    return this.repository.excluir(+id);
  }
}
