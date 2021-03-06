import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
    	{ path: 'products/:id',
			canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
      	{ path: 'products', component: ProductListComponent },]),
    SharedModule
  ],
  declarations: [
  	ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,

  ]
})
export class ProductModule { }
