import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FootComponent } from './pages/foot/foot.component';
import { OblogModule } from './pages/oblog/oblog.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FootComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OblogModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzBreadCrumbModule
    ],
    providers: [{provide: NZ_I18N, useValue: en_US}],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
