import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BestAccsComponent} from './best-accs/best-accs.component';
import {ArmoryComponent} from './armory/armory.component';
import {PatchNotesComponent} from './patch-notes/patch-notes.component';

const routes: Routes = [
  {path: '', component: ArmoryComponent},
  {path: 'best_acc', component: BestAccsComponent},
  {path: 'patch_notes', component: PatchNotesComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
