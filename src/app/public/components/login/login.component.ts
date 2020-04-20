import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { MainService } from "src/app/service/main.service";
import { LoginModel } from "src/app/public/model/login.model";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/service/authentication.service";
import { first } from "rxjs/operators";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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

  public loginForm: FormGroup;
  public submitted = false;
  readonly AUTHENTICATE_ENDPOINT = "/api/authenticate";

  constructor(
    private authenticationService: AuthenticationService,
    private toastrService: NbToastrService,
    private dialogservie: NbDialogService,
    private dialogService: NbDialogService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginModel: LoginModel = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };

    this.authenticationService
      .login(this.AUTHENTICATE_ENDPOINT, loginModel)
      .pipe(first())
      .subscribe(
        (response) => {
          this.router.navigate(["home/dashboard"]);
        },
        (error) => {
          console.error(error);
          this.showToastr({
            title: "Credenciales Invalidas.",
            status: "basic",
          });
        }
      );

    this.submitted = true;
  }

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
