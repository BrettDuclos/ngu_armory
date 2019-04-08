import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InventoryService} from './servises/inventory.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatInputModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {CombinationsService} from './servises/combination.service';
import {BestAccsComponent} from './best-accs/best-accs.component';
import {AppRoutingModule} from './app-routing.module';
import {ArmoryComponent} from './armory/armory.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BestAccsComponent,
    ArmoryComponent,
    PatchNotesComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatSidenavModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,

  ],
  providers: [InventoryService, CombinationsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
