import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  NbWindowModule,
  NbCardModule,
  NbSidebarModule,
  NbMenuModule,
  NbActionsModule,
  NbInputModule,
  NbButtonModule,
  NbCalendarModule,
  NbDatepickerModule,
  NbPopoverModule,
  NbToastrModule,
  NbDialogModule,
  NbSpinnerModule,
  NbUserModule,
  NbSelectModule,
  NbTabsetModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbTooltipModule,
  NbSearchModule,
  NbContextMenuModule,
  NbIconModule,
} from "@nebular/theme";

import { Ng2SmartTableModule } from "ng2-smart-table";
import { NbSecurityModule } from "@nebular/security";
import { ChartModule } from "angular2-chartjs";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule } from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./public/home/home.component";
import { HeaderComponent } from "./public/layout/header/header.component";
import { FooterComponent } from "./public/layout/footer/footer.component";
import { SidebarComponent } from "./public/layout/sidebar/sidebar.component";
import { InventarioComponent } from "./public/components/inventario/inventario.component";
import { ProductosComponent } from "./public/components/productos/productos.component";
import { InsumosComponent } from "./public/components/insumos/insumos.component";
import { ProveedoresComponent } from "./public/components/proveedores/proveedores.component";
import { DashboardComponent } from "./public/components/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MainService } from "./service/main.service";
import { ChartComponent } from "./public/components/chart/chart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InventarioComponent,
    ProductosComponent,
    InsumosComponent,
    ProveedoresComponent,
    DashboardComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ChartModule,

    NbThemeModule.forRoot({ name: "default" }),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),

    Ng2SmartTableModule,
    NbCardModule,
    NbInputModule,
    NbCalendarModule,
    NbPopoverModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbCalendarRangeModule,
    NbStepperModule,
    NbTooltipModule,

    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,

    NbLayoutModule,
    NbEvaIconsModule,

    AppRoutingModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
