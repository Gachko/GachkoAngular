import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { ShopComponent } from './container/shop/shop.component';
import { ItemViewerComponent } from './container/item-viewer/item-viewer.component';
import { WishListComponent } from './container/wish-list/wish-list.component';
import { GoodsItemComponent } from './components/goods-item/goods-item.component';
import { FilterComponent } from './components/filter/filter.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { CostPipe } from './pipes/cost.pipe';
import { CartComponent } from './container/cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchPipe } from './pipes/search.pipe'


export const routes: Routes = [

  { path: 'shop', component: ShopComponent },
  { path: 'product/:id', component: ItemViewerComponent },
  { path: 'wishList', component: WishListComponent },
  { path: 'basket', component: CartComponent, canActivate:[AuthGuard]}

];

@NgModule({
  declarations: [
    ShopComponent,
    ItemViewerComponent,
    WishListComponent,
    GoodsItemComponent,
    CostPipe,
    TooltipDirective,
    FilterComponent,
    CartComponent,
    CartItemComponent,
    SpinnerComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ AuthGuard ]
})
export class ShopModule { }
