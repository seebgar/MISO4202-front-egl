import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-sidebar",
  template: `<nb-menu [items]="menu"></nb-menu>`,
})
export class SidebarComponent {
  menu: NbMenuItem[] = [
    {
      title: "Inicio",
      icon: "home-outline",
      // icon: "shopping-cart-outline",
      home: true,
    },
    {
      title: "Dashboard",
      icon: "pie-chart-outline",
      link: "dashboard",
    },
    {
      title: "Usuarios",
      icon: "person-outline",
      link: "usuarios",
    },
    {
      title: "COMPONENTES",
      group: true,
    },

    {
      title: "Insumos",
      icon: "keypad-outline",
      link: "insumos",
    },

    {
      title: "Proveeedores",
      // icon: "keypad-outline",
      // icon: "grid-outline",
      icon: "shopping-cart-outline",
      link: "proveedores",
    },
  ];
}
