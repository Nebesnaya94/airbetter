import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
// import { NavigationSharedModule } from '@app/core/navigation/shared';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';
import { HelpDialogModule } from './components/help-dialog/help-dialog.module';
import { HeaderComponent } from './header.component';

@NgModule({
  // imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, HelpDialogModule, MatDialogModule, NavigationSharedModule],
  imports: [
    RouterModule,
    ContainerModule,
    GridModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HelpDialogModule,
    MatDialogModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
