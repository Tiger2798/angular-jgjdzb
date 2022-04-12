import { CanActivate } from '@angular/router'
import { Injectable } from  '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRouteSnapshot } from '@angular/router'
import { Router } from '@angular/router'

@Injectable()

export class EventActivatorRoute implements CanActivate{
    constructor(private router:Router , private eventService:EventService){

    }
    canActivate(route:ActivatedRouteSnapshot){
      const eventExists= !! this.eventService.getEvent(+route.params['id'])

      if(!eventExists){
        this.router.navigate(['/404'])
      }
      return eventExists
    }
}

