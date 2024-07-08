import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxDateValidator(maxDate: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value && control.value > maxDate) {
      return { 'maxDate': true };
    }
    return null;
  };
}
