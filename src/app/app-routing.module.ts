import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./public/components/dashboard/dashboard.component";
import { InsumosComponent } from "./public/components/insumos/insumos.component";
import { InventarioComponent } from "./public/components/inventario/inventario.component";
import { ProductosComponent } from "./public/components/productos/productos.component";
import { ProveedoresComponent } from "./public/components/proveedores/proveedores.component";
import { HomeComponent } from "./public/home/home.component";
import { SigningUpComponent } from "./public/components/signing-up/signing-up.component";
import { LoginComponent } from "./public/components/login/login.component";
import { AuthGuard } from "./service/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "inventario",
        component: InventarioComponent,
      },
      {
        path: "insumos",
        canActivate: [AuthGuard],
        component: InsumosComponent,
      },
      {
        path: "productos",
        component: ProductosComponent,
      },
      {
        path: "proveedores",
        component: ProveedoresComponent,
      },
    ],
  },
  {
    path: "signing-up",
    component: SigningUpComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
