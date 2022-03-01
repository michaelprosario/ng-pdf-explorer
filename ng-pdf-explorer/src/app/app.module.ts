import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { ExpertAnnotationItemComponent } from './expert-annotation-item/expert-annotation-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddGuidanceComponent } from './add-guidance/add-guidance.component';
import { ViewGuidanceComponent } from './view-guidance/view-guidance.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertAnnotationItemComponent,
    AddGuidanceComponent,
    ViewGuidanceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
