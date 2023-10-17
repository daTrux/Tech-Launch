import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {Event} from "./event-registry.actions";

export type EventHandler = (eventData: any) => any;

export interface EventRegistryStateModel {
  [eventName: string]: any
}

@State<EventRegistryStateModel>({
  name: 'eventRegistry',
  defaults: {}
})
@Injectable()
export class EventRegistryState {

  @Action(Event.Publish)
  publishEvent(ctx: StateContext<any>, {eventName, eventData}: Event.Publish) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      [eventName]: eventData
    });
  }
}
