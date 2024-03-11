import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailPattenValidator]',
  providers:[
    {
    //declara o validador como síncrono
    provide: NG_VALIDATORS,
    useExisting: EmailPatternValidatorDirective,
    multi: true
    }
  ]
})
export class EmailPatternValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const emailPattern = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid =  emailPattern.test(control.value);

    return isValid ? null: {'invalidEmailPattern': true};
  }
}
