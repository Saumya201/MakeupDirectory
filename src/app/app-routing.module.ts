import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'menuPage/currentOrder', component: CurrentOrderComponent },
  { path: 'menuPage', component: MenuPageComponent},
  { path: 'menuPage/orderHistory', component: OrderHistoryComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
