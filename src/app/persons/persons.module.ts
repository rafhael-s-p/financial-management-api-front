import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';

import { PersonsSearchComponent } from './persons-search/persons-search.component';
import { PersonsNewComponent } from './persons-new/persons-new.component';
import { PersonsGridComponent } from './persons-grid/persons-grid.component';

@NgModule({
  declarations: [
    PersonsSearchComponent,
    PersonsNewComponent,
    PersonsGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,

    SharedModule
  ],
  exports: [
    PersonsSearchComponent,
    PersonsNewComponent,
  ]
})
export class PersonsModule { }