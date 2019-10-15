import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routes'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListpeopleComponent } from './components/listpeople/listpeople.component';
import { UpdatepeopleComponent } from './components/updatepeople/updatepeople.component';
import { DataService } from '../app/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListpeopleComponent,
    UpdatepeopleComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
