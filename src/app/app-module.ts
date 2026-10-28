import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { DepartamentosService } from './services/departamentos.service';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { UpdateComponent } from './components/update-component/update-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    CreateComponent,
    DetailsComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), DepartamentosService],
  bootstrap: [App],
})
export class AppModule {}
