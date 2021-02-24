import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MessageService  } from './service/messageservice';
import { ConfirmationService } from './service/confirmationservice';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import {TableModule} from 'primeng/table';

import {DropdownModule} from 'primeng/dropdown';
import { ProductService } from './service/productservice';
import { HttpClientModule } from '@angular/common/http';

import {ToolbarModule} from 'primeng/toolbar';
import {RippleModule} from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';

import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToolbarModule,
    RippleModule,
    DialogModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    ToastModule,
    RatingModule,
    InputNumberModule,
    ConfirmDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  providers: [MessageService , ProductService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
