import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsPage } from './page/details/details.page';
import { TabsPage } from './page/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },


 {path:'tabs', component:TabsPage,children:[  { path: 'details', loadChildren: './page/details/details.module#DetailsPageModule' },
                                              { path: 'home', loadChildren: './home/home.module#HomePageModule' },
                                              { path: 'info', loadChildren: './page/info/info.module#InfoPageModule' }]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
