import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

export interface TableElement {
  name: string;
  value: string | undefined;
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  dataSource: TableElement[] = [];
  columns: string[] = ['name', 'value'];

  constructor(private api: ApiService) {}

  ngOnInit() {

  }




}
