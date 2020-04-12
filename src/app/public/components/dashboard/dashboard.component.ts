import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import { LocalDataSource } from "ng2-smart-table";
import { MainService } from "src/app/service/main.service";
import { NbToastrService, NbDialogService } from "@nebular/theme";
import { Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  /* Titulo en HTML */
  public titulo = "Dashboard";

  /* Indica el estado de carga */
  public cargando: boolean = false;

  /* API Routes */
  private apiInventario: string = "todos";

  /* Lista completa del inventario */
  private inventarioLista: any[] = [];

  /* Observables - Async */
  private inventarioObservable: Observable<any>;

  /* Manejo de Usuario - Auth */
  private user: any = {};

  /* Nebular Dialog que se encuentra abierto */
  private dialogActivo: any;

  /* HTML Selector References */
  @ViewChild("dialogAgregar", { static: true }) dialogAgregar: ElementRef;

  constructor(
    private mainService: MainService,
    private toastrService: NbToastrService,
    private dialogservie: NbDialogService,
    private dialogService: NbDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isAdmin()) {
    }
  }

  /**
   * Verifica si el usuario en sesión tiene
   * permisos de administrador
   * @returns {boolean}
   */
  public isAdmin(): boolean {
    // TODO - Hacer esto bien: verificar permisos de user registrado mediante guard: AuthService (hacerlo)
    return true;
  }

  /**
   * Muestra una notificacion estilo Toastr en la pantalla actual
   * @param  {string} position determina en que parte de la pantalla se representará el Toastr
   * @param  {any} title titulo del Toastr
   * @param  {any} message contenido del Toastr
   * @param  {any} status puede ser (basic, primary, success, info, warning, danger, control)
   * @returns void
   */
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

  /**
   * Abre un dialogo estilo nebular
   * @param  {any} dialog referencia al template en html
   * que contiene el dialogo. Debería der tipye ElementRef o TypeReference
   * @returns void
   */
  public showDialog({ dialog }: { dialog: any }): void {
    this.dialogActivo = this.dialogService.open(dialog, { context: "" });
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
