import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressBarModule, 
        MatInputModule, 
        MatDatepickerModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatButtonModule       
    ]
})
export class AngularMaterialModule {}