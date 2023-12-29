import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'app/shared/states/app-state';
import { AddModelComponent } from 'workshop/feature/add-model/ui/component';
import { AddTollComponent } from 'workshop/feature/add-tools/ui/component';

@Component({
  selector: 'workshop-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopWidgetsComponent implements OnInit {
  constructor(public dialog: MatDialog, private appState: AppState) {}

  appMode: 'mobile' | 'browser' = 'browser';

  menuItems = [
    { title: 'Добавить модель', link: AddModelComponent },
    { title: 'Добавить инструменты', link: AddTollComponent },
  ];

  menuData: string = 'Добавить модель';

  menuLink?: any;

  openDialog(menuLink = AddModelComponent): void {
    const dialogRef = this.dialog.open(menuLink);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  selectMenuItem(item: any): void {
    this.menuData = item.title;
    this.menuLink = item.link;
    this.openDialog(item.link);
  }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}
