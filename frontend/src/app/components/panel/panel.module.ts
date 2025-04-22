// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';


// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';

// Components
import { PanelComponent } from './panel.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ShowProductComponent } from './products/show-product/show-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { NotifComponent } from './notif/notif.component';
import { ShowOrderComponent } from './orders/show-order/show-order.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { UsersComponent } from './users/users.component';
import { ShowUsersComponent } from './users/show-users/show-users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { FormationsComponent } from './formations/formations.component';
import { AddFormationsComponent } from './formations/add-formations/add-formations.component';
import { ShowFormationsComponent } from './formations/show-formations/show-formations.component';



const routes: Routes = [
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'formations', component: FormationsComponent },
      { path: 'list-contact', component: ListContactComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PanelComponent,
    ProfileComponent,
    ProductsComponent,
    HomeComponent,
    AddProductComponent,
    ShowProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    OrdersComponent,
    NotifComponent,
    ShowOrderComponent,
    ListContactComponent,
    UsersComponent,
    ShowUsersComponent,
    AddUsersComponent,
    FormationsComponent,
    AddFormationsComponent,
    ShowFormationsComponent,
   
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatBadgeModule,
    YouTubePlayerModule,
    RouterModule.forChild(routes),
  ],
})
export class PanelModule {}
