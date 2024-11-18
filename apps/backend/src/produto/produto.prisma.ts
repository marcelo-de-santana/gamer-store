import { Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async salvar(produto: Produto) {
    await this.prisma.produto.upsert({
      where: { id: produto.id ?? -1 },
      create: produto,
      update: produto,
    });
  }

  async obter() {
    return await this.prisma.produto.findMany();
  }

  async obterPorId(id: number) {
    return await this.prisma.produto.findUnique({ where: { id } });
  }

  async excluir(id: number) {
    await this.prisma.produto.delete({ where: { id } });
  }
}
