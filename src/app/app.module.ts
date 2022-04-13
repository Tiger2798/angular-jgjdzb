import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component'
import { appRoutes } from './route'
import { EventActivatorRoute } from './events/event-details/event-route-activator.service'


@NgModule({
  imports: [
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(appRoutes)
    ],
  declarations: [
    AppComponent,
    HelloComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService, ToastService, EventActivatorRoute,
    {provide:'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
     return window.confirm("You have not saved")
  }
  return true
}
