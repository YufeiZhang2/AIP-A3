import { AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

export class FormArrayValidators {

    //validate if the formarray is empty. If it is empty, this method will return validation error.
    static cannotBeNull(control: AbstractControl): ValidationErrors | null {
        if ((control.value as FormArray).length === 0)
            return { cannotBeNull: true }

        return null;
    }
}