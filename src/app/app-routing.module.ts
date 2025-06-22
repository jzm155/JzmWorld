import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';
import { DeckComponent } from './deck/deck.component';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'create-card', component: CreateCardComponent },
  { path: 'deck', component: DeckComponent },
  { path: 'card', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
