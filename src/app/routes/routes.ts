import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListpeopleComponent } from '../components/listpeople/listpeople.component';
import { UpdatepeopleComponent } from '../components/updatepeople/updatepeople.component';
const routes: Routes = [
    { path: '', redirectTo: '/listofpeople', pathMatch: 'full' },
    { path: 'listofpeople', component: ListpeopleComponent },
    { path: 'updatepeople', component: UpdatepeopleComponent },
]

@NgModule({
    imports: [
        CommonModule,
        [RouterModule.forRoot(routes)],
    ],
    declarations: [],
    exports: [RouterModule]
}) export class RoutingModule {


}