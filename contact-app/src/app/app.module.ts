import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactbookComponent } from './contactbook/contactbook.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DetailFormComponent } from './view-detail/view-detail.component';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactbookComponent,
    AddFormComponent,
    DetailFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
