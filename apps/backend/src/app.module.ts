import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProdutoModule, PedidoModule, DbModule],
})
export class AppModule {}
