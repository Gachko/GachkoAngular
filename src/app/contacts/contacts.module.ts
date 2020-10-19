import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';



export const routes: Routes = [
  { path: '', 
    component: ContactComponent
  }
]


@NgModule({
  declarations: [ ContactComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
