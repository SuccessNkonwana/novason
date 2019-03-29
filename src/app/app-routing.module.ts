import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'products2', loadChildren: './products2/products2.module#Products2PageModule' },
  { path: 'cash-payout', loadChildren: './cash-payout/cash-payout.module#CashPayoutPageModule' },
  { path: 'buynow2', loadChildren: './buynow2/buynow2.module#Buynow2PageModule' },
  { path: 'claims', loadChildren: './claims/claims.module#ClaimsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsPageModule' },
  { path: 'beef', loadChildren: './beef/beef.module#BeefPageModule' },
  { path: 'grocery', loadChildren: './grocery/grocery.module#GroceryPageModule' },
  { path: 'catering', loadChildren: './catering/catering.module#CateringPageModule' },
  { path: 'resource', loadChildren: './resource/resource.module#ResourcePageModule' },
  { path: 'buynow', loadChildren: './buynow/buynow.module#BuynowPageModule' },
  { path: 'global', loadChildren: './global/global.module#GlobalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
