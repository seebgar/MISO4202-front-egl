import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { Observable } from "rxjs";
import { MainService } from "src/app/service/main.service";
@Component({
  selector: "app-signing-up",
  templateUrl: "./signing-up.component.html",
  styleUrls: ["./signing-up.component.scss"],
})
export class SigningUpComponent {
  private showToastr({
    position,
    title,
    message,
    status,
  }: {
    position?: any;
    title: string;
    message?: string;
    status: any;
  }): void {
    let realPosition = position ? position : "top-end";
    let realMessage = message ? message : "";
    let duractionMilisec = 4500;
    this.toastrService.show(`${realMessage}`, `${title}`, {
      position: realPosition,
      status,
      duration: duractionMilisec,
    });
  }

  constructor(
    private mainService: MainService,
    private toastrService: NbToastrService,
    private dialogservie: NbDialogService,
    private dialogService: NbDialogService,
    private router: Router
  ) {}

  /**
   * Se encarga de navegar a la URL especificada
   * @param {string} path -> "/dashboard/inventario/:id"
   * @return void
   */
  public routerNavigateTo({ path }: { path: string }): void {
    this.router.navigate([path]).then((fulfilled) => {
      if (!fulfilled) {
        this.showToastr({
          title: "Dirección URL no válida.",
          status: "basic",
        });
      }
    });
  }
}
