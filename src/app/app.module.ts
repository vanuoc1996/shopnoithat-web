import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {DECLARATIONS, IMPORT} from "./import";
import {FormsModule} from "@angular/forms";
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: DECLARATIONS,
    imports: [
        IMPORT,
        FormsModule,
        FullCalendarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
