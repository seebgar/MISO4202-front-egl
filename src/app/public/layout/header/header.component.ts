import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbIconConfig, NbMenuService, NbSidebarService } from "@nebular/theme";
import { AuthenticationService } from "src/app/service/authentication.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public disabledIconConfig: NbIconConfig = {
    icon: "settings-2-outline",
    pack: "eva",
  };

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(["/"]);
  }
}
