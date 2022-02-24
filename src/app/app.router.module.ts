import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./page/body/body.component";
import {InitComponent} from "./page/init/init.component";



const routes: Routes = [{
  path:"",component:InitComponent,children :[
  {path:"",component:BodyComponent},



    ]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {


}
