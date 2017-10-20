import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// for flex layouts
import { FlexLayoutModule } from "@angular/flex-layout";
// material modules needed.
import { MatToolbarModule, MatCardModule } from '@angular/material'

import {
    HeaderComponent,
    FooterComponent
} from './shared'

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppComponent
  ],
    imports: [
      FlexLayoutModule,
      MatCardModule,
      MatToolbarModule,
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
