import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-mf-auth-ui-entry',
  template: `<ng-mf-nx-welcome></ng-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
