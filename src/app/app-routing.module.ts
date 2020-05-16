import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./public/components/dashboard/dashboard.component";
import { InsumosComponent } from "./public/components/insumos/insumos.component";
import { ProveedoresComponent } from "./public/components/proveedores/proveedores.component";
import { HomeComponent } from "./public/home/home.component";
import { RegisterComponent } from "./public/components/register/register.component";
import { LoginComponent } from "./public/components/login/login.component";
import { AuthGuard } from "./service/auth-guard.service";
import { DataComponent } from "./public/components/data/data.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  {
    path: "home",
    // canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },

      {
        path: "insumos",
        component: InsumosComponent,
      },

      {
        path: "proveedores",
        component: ProveedoresComponent,
      },
      {
        path: "usuarios",
        component: RegisterComponent,
      },
      {
        path: "data",
        component: DataComponent,
      },
    ],
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
