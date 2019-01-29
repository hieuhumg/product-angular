import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AddComponent } from './components/add/add.component';


export const appRoutes: Routes = [
      {
            path: 'home',
            component: HomeComponent
      },
      {
            path: 'about',
            component: AboutComponent
      },
      {
            path: 'product',
            component: ProductComponent,
            children: [
                  {
                        
                        path: '',
                        redirectTo: 'list',
                        pathMatch: 'full'

                  },
                  {
                        path: 'list',
                        component: ProductListComponent
                  },
                  {
                        path: ':id',
                        component: ProductDetailComponent
                  },
                  {
                        path: 'edit/:id',
                        component: ProductEditComponent
                  }
                  
            ]
      },
      {
            path: 'product/:id',
            component: ProductDetailComponent
      },
      {
            path: 'add',
            component: AddComponent
      }

]

