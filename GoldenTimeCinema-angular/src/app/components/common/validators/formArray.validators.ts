import { AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

export class FormArrayValidators {
    static cannotBeNull(control: AbstractControl): ValidationErrors | null {
        if ((control.value as FormArray).length === 0)
            return { cannotBeNull: true }

        return null;
    }
}