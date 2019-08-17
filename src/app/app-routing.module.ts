import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './componenets/Registration/patient/patient.component';
import {DoctorComponent} from './componenets/Registration/doctor/doctor.component';
import {PharmacyComponent} from './componenets/Registration/pharmacy/pharmacy.component';
import {InsuranceCompanyComponent} from './componenets/Registration/insurance-company/insurance-company.component';
import {HomeComponent} from './componenets/home/home.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'patient-registration', component: PatientComponent},
  { path: 'doctor-registration', component: DoctorComponent},
  { path: 'pharmacy-registration', component: PharmacyComponent},
  { path: 'insurance-company-registration', component: InsuranceCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PatientComponent, DoctorComponent , PharmacyComponent , InsuranceCompanyComponent ];
