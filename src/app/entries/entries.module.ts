import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { EntriesSearchComponent } from './entries-search/entries-search.component';
import { EntriesNewComponent } from './entries-new/entries-new.component';
import { EntriesGridComponent } from './entries-grid/entries-grid.component';

@NgModule({
  declarations: [
    EntriesSearchComponent,
    EntriesNewComponent,
    EntriesGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  exports: [
    EntriesSearchComponent,
    EntriesNewComponent
  ]
})
export class EntriesModule { }