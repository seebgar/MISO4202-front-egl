import { Component } from "@angular/core";
import { AuthenticationService } from "./service/authentication.service";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "front";
  currentUser: any;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe((x) => {
      this.currentUser = x;
    });
  }
}
