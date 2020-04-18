import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from '@components/navbar.component';
import { AppComponent } from './app.component';

import { IdeaCardComponent } from '@components/idea-card.component';
import { IdeaSectionComponent } from '@components/idea-section.component';
import { BoardTapeComponent } from '@components/board-tape.component';
import { PincodeComponent } from '@components/pincode.component';

import { appRoutes } from './route.config';

import { HomePageComponent } from '@pages/home-page.component';
import { BoardPageComponent } from '@pages/board-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { ActiveFocusDirective } from './directives/active-focus.directive';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    IdeaCardComponent,
    IdeaSectionComponent,
    BoardTapeComponent,
    NavbarComponent,
    HomePageComponent,
    PincodeComponent,
    BoardPageComponent,
    ActiveFocusDirective
    // ...appRoutes.map(route => route.component).filter(c => !!c)
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    GraphQLModule,
    FontAwesomeModule,
    // RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
