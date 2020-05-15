import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGaurd } from "./auth-gaurd.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "servers",
    //canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },

  {
    path: "users",
    component: UsersComponent,
    children: [{ path: "users/:id/:name", component: UserComponent }],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
