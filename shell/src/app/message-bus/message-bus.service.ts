import {Injectable} from '@angular/core';
import {Store} from "@ngxs/store";
import {Event} from "../event-registry-store/event-registry.actions";
import Publish = Event.Publish;
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageBusService {

  constructor(private store: Store) {
  }

  publishEvent(eventName: string, eventData: any): void {
    this.store.dispatch(new Publish(eventName, eventData));
  }

  events(eventName: string): Observable<any> {
    return this.store.select(state => state[eventName]);
  }
}
