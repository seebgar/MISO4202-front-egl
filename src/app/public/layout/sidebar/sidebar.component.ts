import { Component, OnInit } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";
import { AuthenticationService } from "src/app/service/authentication.service";

@Component({
  selector: "app-sidebar",
  template: `<nb-menu [items]="menu"></nb-menu>`,
})
export class SidebarComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  public menu: NbMenuItem[] = [];

  ngOnInit() {
    this.menu = [
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
        title: "COMPONENTES",
        group: true,
      },
      {
        title: "insumos",
        icon: "grid-outline",
        link: "insumos",
      },
      {
        title: "proveedores",
        icon: "grid-outline",
        link: "proveedores",
      },
      {
        title: "DATA",
        group: true,
      },
      {
        title: "data",
        icon: "grid-outline",
        link: "data",
      },
    ];

    if (this.authenticationService.currentUserValue.user.role === "ADMIN") {
      this.menu.push({
        title: "Usuarios",
        icon: "person-outline",
        link: "usuarios",
      });
    }
  }
}
