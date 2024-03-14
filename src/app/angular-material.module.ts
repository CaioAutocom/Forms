import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressBarModule, 
        MatInputModule, 
        MatDatepickerModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatDatepickerModule        
    ]
})
export class AngularMaterialModule {}