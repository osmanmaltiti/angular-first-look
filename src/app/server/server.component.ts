import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 4334324;
  serverStatus: 'online' | 'offline' = 'offline';
  allowServer: boolean = true;
  serverName: string = '';
  list: string[] = ['pen', 'book', 'eraser', 'pencil'];

  constructor() {
    setTimeout(() => {
      this.allowServer = false;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  activateServer() {
    this.serverStatus === 'offline'
      ? (this.serverStatus = 'online')
      : (this.serverStatus = 'offline');
    console.log(this.serverStatus);
  }

  newServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
