import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { GridModule } from '@syncfusion/ej2-angular-grids';

import {
  DropDownListAllModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';

import {
  MaskedTextBoxModule,
  UploaderAllModule,
} from '@syncfusion/ej2-angular-inputs';

import {
  ToolbarAllModule,
  ContextMenuAllModule,
} from '@syncfusion/ej2-angular-navigations';

import {
  ButtonAllModule,
  CheckBoxAllModule,
  SwitchAllModule,
} from '@syncfusion/ej2-angular-buttons';

import {
  DatePickerAllModule,
  TimePickerAllModule,
  DateTimePickerAllModule,
} from '@syncfusion/ej2-angular-calendars';

import {
  NumericTextBoxAllModule,
  TextBoxAllModule,
} from '@syncfusion/ej2-angular-inputs';

// import {
//   ScheduleAllModule,
//   RecurrenceEditorAllModule,
// } from '@syncfusion/ej2-angular-schedule';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {
  ListBoxAllModule,
  DropDownListModule,
} from '@syncfusion/ej2-angular-dropdowns';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditService, ExcelExportService, GanttAllModule, GanttModule, PdfExportService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    // ScheduleAllModule,
    // RecurrenceEditorAllModule,
    BrowserModule,
    ScheduleModule, // Import the Syncfusion Schedule Module here
    NumericTextBoxAllModule,
    TextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    ContextMenuAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    MultiSelectAllModule,
    TreeViewModule,
    ButtonAllModule,
    DropDownButtonAllModule,
    SwitchAllModule,
    BrowserModule,
    ToastAllModule,
    FormsModule,
    ListBoxAllModule,
    DropDownListModule,
    GridModule,
    GanttAllModule
  ],
  providers: [ToolbarService, ExcelExportService, SelectionService, PdfExportService, EditService],
  bootstrap: [AppComponent],
})
export class AppModule {}
