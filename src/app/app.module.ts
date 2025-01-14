import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { AppStoreModule } from './store/AppStore.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent],
	imports: [
		BrowserModule,
		NgbModule,
		FontAwesomeModule,
		AppRoutingModule,
		AuthModule,
		AppStoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
