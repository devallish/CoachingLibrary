import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@tinymce/tinymce-angular';

import { CardComponent } from '@cl/shared/ui/card/card.component';
import { SectionContainerComponent } from '@cl/shared/ui/section-container/section-container.component';
import { SectionContentContainerComponent } from '@cl/shared/ui/section-content-container/section-content-container.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EditorModule,
    CardComponent,
    SectionContainerComponent,
    SectionContentContainerComponent
  ],
  declarations: [
    CardComponent,
    SectionContainerComponent,
    SectionContentContainerComponent
  ]
})
export class SharedModule { }
