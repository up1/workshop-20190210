import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import {FormsModule} from '@angular/forms';
import { RatingComponent } from './shared/rating.component';
import { ReplaceWithDashPipe } from './shared/replace-with-dash.pipe';
import {ChatService} from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PageNotFoundComponent,
    RatingComponent,
    ReplaceWithDashPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ChatService],
})
export class AppModule { }
