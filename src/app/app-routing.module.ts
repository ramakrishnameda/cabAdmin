
import { AllDriversUpdateComponent } from './admin/all-drivers-update/all-drivers-update.component';
import { AllDriversSearchComponent } from './admin/all-drivers-search/all-drivers-search.component';
import { AllCustomerUpdateComponent } from './admin/all-customer-update/all-customer-update.component';
import { AllCustomersSearchComponent } from './admin/all-customers-search/all-customers-search.component';
import { AllAdminsUpdateComponent } from './admin/all-admins-update/all-admins-update.component';
import { AllAdminsSearchComponent } from './admin/all-admins-search/all-admins-search.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
 
  {
    path: 'admin/:adminId', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: AdminProfileComponent },
      { path: 'update', component: AdminUpdateComponent },
      { path: 'manageAdmins', component: AllAdminsSearchComponent },
      { path: 'updateAdmins/:adminId', component: AllAdminsUpdateComponent },
      { path: 'manageCustomers', component: AllCustomersSearchComponent  },
      { path: 'updateCustomers/:customerId', component: AllCustomerUpdateComponent },
      { path: 'manageDrivers', component: AllDriversSearchComponent },
      { path: 'updateDrivers/:driverId', component: AllDriversUpdateComponent}
    ]
  },

   
  { path: 'oops', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
