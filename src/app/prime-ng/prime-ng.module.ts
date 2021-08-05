import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  exports:[

    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    MenubarModule,
    InputTextModule,
    PanelModule,
    PasswordModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
