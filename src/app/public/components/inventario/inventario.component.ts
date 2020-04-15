import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";
import { LocalDataSource } from "ng2-smart-table";
import { MainService } from "src/app/service/main.service";
import { NbToastrService, NbDialogService } from "@nebular/theme";
import { Router } from "@angular/router";

@Component({
  selector: "app-inventario",
  templateUrl: "./inventario.component.html",
  styleUrls: ["./inventario.component.scss"],
})
export class InventarioComponent implements OnInit {
  /* Titulo en HTML */
  public titulo = "Inventario";

  /* Indica el estado de carga */
  public cargando: boolean = false;

  /* API Routes */
  private apiInventario: string = "api/inventario";

  /* Lista completa del inventario */
  private inventarioLista: any[] = [];

  /* Observables - Async */
  private inventarioObservable: Observable<any>;

  /* Manejo de Usuario - Auth */
  private user: any = {};

  /* Nebular Smart Table Configuration */
  public source: LocalDataSource;
  public settings: any = {};

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
  ) {
    this.source = new LocalDataSource();
    this.configSmartTable();
  }

  ngOnInit(): void {
    if (this.isAdmin()) {
      this.getInventario();
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
   * Obtiene una lista con todo el inventario en el sistema
   * @returns void
   */
  private getInventario(): void {
    this.cargando = true;

    this.inventarioObservable = this.mainService.get({
      api: this.apiInventario,
    });

    this.inventarioObservable.subscribe(
      (observer) => {
        this.inventarioLista = observer as any[];
      },
      (error) => {
        this.showToastr({
          title: "No se ha podido establecer una conexión con el servidor.",
          message: error.message,
          status: "warning",
        });
      },
      () => {
        this.source.load(this.inventarioLista);
        this.cargando = false;
      }
    );
  }

  /**
   * Eliminar un objeto del inventario
   * @param {string} _id del objeto a eliminar
   */
  public onDelete({ content }: { content: any }): void {
    if (content && content.data && content.data._id) {
      this.mainService
        .delete({ api: `${this.apiInventario}/${content.data._id}` })
        .subscribe((response) => {
          if (response && response.errors) {
            content.confirm.reject();
            this.showToastr({
              title: "No se ha eliminado el objeto del inventario!",
              status: "danger",
              message: response.message,
            });
          } else {
            this.showToastr({
              title: "Inventario actualizado.",
              status: "success",
            });
            content.confirm.resolve();
          }
        });
    }
  }

  /**
   * Muestra una alerta cuando se oprime el botón agregar
   */
  public handleAgregar(): void {
    this.showToastr({
      title: "Función aún no implementada.",
      status: "warning",
    });
  }

  /**
   * Nebular Smart Table configuration
   * @returns void
   */
  private configSmartTable(): void {
    this.settings = {
      pager: {
        display: true,
        perPage: 10,
      },
      hideSubHeader: false,
      actions: {
        columnTitle: "Opciones",
        add: false,
        filter: false,
        edit: true,
        delete: true,
        position: "left",
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        completed: {
          title: "Completed",
          filter: true,
          editable: false,
        },
        userId: {
          title: "User ID",
          editable: false,
        },
        title: {
          title: "Title",
          editable: false,
        },
      },
    };
  }
  /**
   * Filtra la Samrt Table de modo que solo se muestren las entradas
   * que contienen los caracteres buscados
   * @param  {string=""} query cadena de caracteres a buscar
   * @returns void
   */
  public onSearch(query?: string): void {
    if (!query) this.source.reset();
    else {
      this.source.setFilter(
        [
          {
            field: "title",
            search: query,
          },
        ],
        false
      );
    }
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
