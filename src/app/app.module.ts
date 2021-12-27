import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { movieApiService } from './services/movieapi.service';
import { MDetailsComponent } from './m-details/m-details.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [movieApiService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
