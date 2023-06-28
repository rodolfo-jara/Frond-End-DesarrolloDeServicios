import { Component } from '@angular/core';
import { SideNavItem } from '../models/models';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavContent: SideNavItem[] = [
    {
      title: 'libros',
      link: 'books/library',
    },
    {
      title: 'Mantenimiento de libros',
      link: 'books/maintenance',
    },
    {
      title: 'Mantenimiento de categorias',
      link: 'books/categories',
    },

    {
      title: 'USUARIOS',
      link: 'users/list',
    },
    {
      title: 'ORDENES',
      link: 'users/all-orders',
    },
    {
      title: 'MIS ORDENES',
      link: 'users/order',
    },
  ];
}
