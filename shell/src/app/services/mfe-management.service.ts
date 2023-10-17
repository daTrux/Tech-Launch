import { Injectable } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Injectable({
  providedIn: 'root'
})
export class MfeManagementService {

  constructor() { }

  async loadListItemMfe() {
    return await loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Module',
      remoteName: 'listItemMfe'
    });
  }
  async loadReactMfe() {
    return await loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: './web-components',
      remoteName: 'react'
    });
  }

}
