import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/core/icons/icons.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthModalComponent } from './auth-modal.component';
import { CoreDirectivesModule } from 'src/app/core/directives/core-directives.module';
import { AuthFormModule } from '../auth-form/auth-form.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    CoreDirectivesModule,
    MatButtonModule,
    MatIconModule,
    AuthFormModule,
  ],
  declarations: [AuthModalComponent],
  exports: [AuthModalComponent],
})
export class AuthModalModule {}
