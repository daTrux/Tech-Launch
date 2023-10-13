export namespace Event {
  export class Publish {
    static readonly type = '[Event] Publish';
    constructor(public eventName: string, public eventData: any) {}
  }
}
