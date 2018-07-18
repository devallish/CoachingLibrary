import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/card/card.component';
import { SectionContainerComponent } from './ui/section-container/section-container.component';
import { SectionContentContainerComponent } from './ui/section-content-container/section-content-container.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
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
