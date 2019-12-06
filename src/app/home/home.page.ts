import { Component } from '@angular/core';

interface Account {
  name: string;
  icon: string;
  unreadCount?: number;
}

interface List {
  name: string;
  items: Account[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  private refreshing: boolean = false;
  public accounts: Account[] = [
    {
      name: 'All Inboxes',
      unreadCount: 25,
      icon: 'file-tray-stacked'
    },
    {
      name: 'liam@example.io',
      unreadCount: 23,
      icon: 'file-tray'
    },
    {
      name: 'liam@icloud.com',
      icon: 'file-tray'
    },
    {
      name: 'liam@gmail.com',
      unreadCount: 2,
      icon: 'file-tray'
    }
  ]
  
  public lists: List[] = [
    {
      name: 'liam@example.io',
      items: [
        { name: 'Inbox', icon: 'file-tray', unreadCount: 23},
        { name: 'Drafts', icon: 'document' },
        { name: 'Sent', icon: 'send' },
        { name: 'Junk', icon: 'albums' },
        { name: 'Trash', icon: 'trash' },
        { name: 'Archive', icon: 'archive' },
      ]
    },
    {
      name: 'liam@icloud.com',
      items: [
        { name: 'Inbox', icon: 'file-tray' },
        { name: 'Drafts', icon: 'document' },
        { name: 'Sent', icon: 'send' },
        { name: 'Junk', icon: 'albums' },
        { name: 'Trash', icon: 'trash' },
        { name: 'Archive', icon: 'archive' },
      ]
    },
    {
      name: 'liam@gmail.com',
      items: [
        { name: 'Inbox', icon: 'file-tray', unreadCount: 2 },
        { name: 'Drafts', icon: 'document' },
        { name: 'Sent', icon: 'send' },
        { name: 'Junk', icon: 'albums' },
        { name: 'Trash', icon: 'trash' },
        { name: 'Archive', icon: 'archive' },
      ]
    },
  ]

  constructor() {
    this.refresh();
  }
  
  public refresh(ev?: any) {
    this.refreshing = true;
    
    setTimeout(() => {
      if (ev !== undefined) {
        ev.detail.complete();
      }
      
      this.refreshing = false;
    }, 3000);
  }
  
  public getStatusText() {
    if (this.refreshing) {
      return 'Checking for Mail...';
    }
    
    return 'Updated Just Now';
  }
}
