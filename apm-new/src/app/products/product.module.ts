import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../utils/pipes/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { Routes } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import { FavoriteComponent } from './favorite.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { 
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard]
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
