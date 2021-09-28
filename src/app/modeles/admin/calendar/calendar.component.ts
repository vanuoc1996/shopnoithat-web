import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      {
        "title": "All Day Event",
        "start": "2021-09-24"
      },
      {
        "title": "Long Event",
        "start": "2021-09-25",
        "end": "2021-09-27"
      },
      {
        "title": "Repeating Event",
        "start": "2021-09-22T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2021-09-14T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2021-09-29",
        "end": "2021-09-30"
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {

  }


  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }
}
