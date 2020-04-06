import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./public/home/home.component";
import { InsumosComponent } from "./public/components/insumos/insumos.component";
import { ProductosComponent } from "./public/components/productos/productos.component";
import { ProveedoresComponent } from "./public/components/proveedores/proveedores.component";
import { InventarioComponent } from "./public/components/inventario/inventario.component";
import { DashboardComponent } from "./public/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "home",
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
