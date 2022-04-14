import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AllAdminsSearchComponent } from './admin/all-admins-search/all-admins-search.component';
import { AllAdminsUpdateComponent } from './admin/all-admins-update/all-admins-update.component';
import { AllCustomerUpdateComponent } from './admin/all-customer-update/all-customer-update.component';
import { AllCustomersSearchComponent } from './admin/all-customers-search/all-customers-search.component';
import { AllDriversSearchComponent } from './admin/all-drivers-search/all-drivers-search.component';
import { AllDriversUpdateComponent } from './admin/all-drivers-update/all-drivers-update.component';

import { LocationPipe } from './Pipes/location.pipe';
import { CustomerFilterPipe } from './Pipes/customer-filter.pipe';
import { AdminFilterPipe } from './Pipes/admin-filter.pipe';
import { DriverFilterPipe } from './Pipes/driver-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    AdminProfileComponent,
    AdminUpdateComponent,
    AllAdminsSearchComponent,
    AllAdminsUpdateComponent,
    AllCustomerUpdateComponent,
    AllCustomersSearchComponent,
    AllDriversSearchComponent,
    AllDriversUpdateComponent,
    LocationPipe,
    
    CustomerFilterPipe,
    AdminFilterPipe,
    DriverFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,



  ],
  providers: [NgbAlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
