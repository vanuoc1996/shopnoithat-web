import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {DECLARATIONS, IMPORT} from "./import";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: DECLARATIONS,
    imports: [
        IMPORT,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
