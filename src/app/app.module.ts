import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FootComponent } from './pages/foot/foot.component';
import { OblogComponent } from './pages/oblog/oblog.component';
import { OblogModule } from './pages/oblog/oblog.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
    OblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OblogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
