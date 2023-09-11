import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HeaderRoutingModule} from "./shared/header/header.routing.module";


const routes: Routes = [
	{path: '**', redirectTo: '', pathMatch: "full"}
];

const routerOptions: ExtraOptions = {
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled',
};

@NgModule({
  imports: [
	  HeaderRoutingModule,
      RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
