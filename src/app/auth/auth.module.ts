import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth/auth.component';
import { JobSeekerRegistrationComponent } from './job-seeker-registration/job-seeker-registration.component';
import { JobSeekerLoginComponent } from './job-seeker-login/job-seeker-login.component';
import { EmployeerRegistartionComponent } from './employeer-registartion/employeer-registartion.component';
import { EmployeerLoginComponent } from './employeer-login/employeer-login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CoreModule } from '../core/core.module';

@NgModule({
	declarations: [
		AuthComponent,
		JobSeekerRegistrationComponent,
		JobSeekerLoginComponent,
		EmployeerRegistartionComponent,
		EmployeerLoginComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AuthRoutingModule,
		CoreModule
	]
})
export class AuthModule {}
