import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InventoryService} from './servies/inventory.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatSidenavModule, MatTooltipModule} from '@angular/material';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatSidenavModule,

  ],
  providers: [InventoryService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
