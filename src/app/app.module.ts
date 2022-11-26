import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {OAuthModule} from "angular-oauth2-oidc";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpRequestInterceptor} from "./core/interceptor/httpRequestInterceptor";

import {ToastrModule} from "ngx-toastr";
import {NgxUiLoaderModule} from "ngx-ui-loader";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/compiler";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        AppRoutingModule,
        OAuthModule.forRoot(),
        ToastrModule.forRoot(),
        NgxUiLoaderModule
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
