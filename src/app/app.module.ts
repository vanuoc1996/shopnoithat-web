import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {DECLARATIONS, IMPORT} from "./import";
import {FormsModule} from "@angular/forms";
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import {DialogModule} from "primeng/dialog";
import {OverlayPanelModule} from "primeng/overlaypanel";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    IMPORT,
    FormsModule,
    DialogModule,
    OverlayPanelModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
