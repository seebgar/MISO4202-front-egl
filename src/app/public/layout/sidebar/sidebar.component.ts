import { Component } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-sidebar",
  template: `<nb-menu [items]="menu"></nb-menu>`,
})
export class SidebarComponent {
  menu: NbMenuItem[] = [
    {
      title: "Inicio",
      icon: "home-outline",
      // icon: "shopping-cart-outline",
      home: true,
    },
    {
      title: "Dashboard",
      icon: "pie-chart-outline",
      link: "dashboard",
    },
    {
      title: "COMPONENTES",
      group: true,
    },
    {
      title: "Inventario",
      icon: "grid-outline",
      link: "inventario",
    },
    {
      title: "Insumos",
      icon: "keypad-outline",
      link: "insumos",
    },
    {
      title: "Productos",
      icon: "layout-outline",
      link: "productos",
      // icon: "edit-2-outline",
    },
    {
      title: "Proveeedores",
      // icon: "keypad-outline",
      // icon: "grid-outline",
      icon: "shopping-cart-outline",
      link: "proveedores",
    },

    // {
    //   title: "Modal & Overlays",
    //   icon: "browser-outline",
    //   children: [
    //     {
    //       title: "Dialog",
    //       link: "/pages/modal-overlays/dialog",
    //     },
    //     {
    //       title: "Window",
    //       link: "/pages/modal-overlays/window",
    //     },
    //     {
    //       title: "Popover",
    //       link: "/pages/modal-overlays/popover",
    //     },
    //     {
    //       title: "Toastr",
    //       link: "/pages/modal-overlays/toastr",
    //     },
    //     {
    //       title: "Tooltip",
    //       link: "/pages/modal-overlays/tooltip",
    //     },
    //   ],
    // },
    // {
    //   title: "Extra Components",
    //   icon: "message-circle-outline",
    //   children: [
    //     {
    //       title: "Calendar",
    //       link: "/pages/extra-components/calendar",
    //     },
    //     {
    //       title: "Progress Bar",
    //       link: "/pages/extra-components/progress-bar",
    //     },
    //     {
    //       title: "Spinner",
    //       link: "/pages/extra-components/spinner",
    //     },
    //     {
    //       title: "Alert",
    //       link: "/pages/extra-components/alert",
    //     },
    //     {
    //       title: "Calendar Kit",
    //       link: "/pages/extra-components/calendar-kit",
    //     },
    //     {
    //       title: "Chat",
    //       link: "/pages/extra-components/chat",
    //     },
    //   ],
    // },
    // {
    //   title: "Maps",
    //   icon: "map-outline",
    //   children: [
    //     {
    //       title: "Google Maps",
    //       link: "/pages/maps/gmaps",
    //     },
    //     {
    //       title: "Leaflet Maps",
    //       link: "/pages/maps/leaflet",
    //     },
    //     {
    //       title: "Bubble Maps",
    //       link: "/pages/maps/bubble",
    //     },
    //     {
    //       title: "Search Maps",
    //       link: "/pages/maps/searchmap",
    //     },
    //   ],
    // },

    // {
    //   title: "Editors",
    //   icon: "text-outline",
    //   children: [
    //     {
    //       title: "TinyMCE",
    //       link: "/pages/editors/tinymce",
    //     },
    //     {
    //       title: "CKEditor",
    //       link: "/pages/editors/ckeditor",
    //     },
    //   ],
    // },
    // {
    //   title: "Tables & Data",
    //   icon: "grid-outline",
    //   children: [
    //     {
    //       title: "Smart Table",
    //       link: "/pages/tables/smart-table",
    //     },
    //     {
    //       title: "Tree Grid",
    //       link: "/pages/tables/tree-grid",
    //     },
    //   ],
    // },
    // {
    //   title: "Miscellaneous",
    //   icon: "shuffle-2-outline",
    //   children: [
    //     {
    //       title: "404",
    //       link: "/pages/miscellaneous/404",
    //     },
    //   ],
    // },
    // {
    //   title: "Auth",
    //   icon: "lock-outline",
    //   children: [
    //     {
    //       title: "Login",
    //       link: "/auth/login",
    //     },
    //     {
    //       title: "Register",
    //       link: "/auth/register",
    //     },
    //     {
    //       title: "Request Password",
    //       link: "/auth/request-password",
    //     },
    //     {
    //       title: "Reset Password",
    //       link: "/auth/reset-password",
    //     },
    //   ],
    // },
  ];
}
