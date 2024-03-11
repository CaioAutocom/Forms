import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "../angular-material.module";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersCardCardListComponent } from './users-card-card-list/users-card-card-list.component';
import { MatCardModule } from '@angular/material/card';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    declarations: [
        UsersCardCardListComponent,
        UserFormComponent
  ],
    imports: [
        FormsModule,
        BrowserModule,
        AngularMaterialModule,
        DirectivesModule,
        PipesModule,
        MatCardModule
    ],
    exports: [
        MatCardModule,
        UsersCardCardListComponent,
        UserFormComponent
    ]
})
export class ComponentsModule{}