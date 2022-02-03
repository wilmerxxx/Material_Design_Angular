import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule ({
    imports: [
      MatSliderModule,
      MatButtonModule
    ],
    exports:[
     MatSliderModule,
     MatButtonModule
    ]
  })

export class MateriaModule{}
