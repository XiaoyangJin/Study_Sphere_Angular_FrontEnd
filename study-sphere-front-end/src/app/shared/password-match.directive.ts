import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidators: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    // if user hasn't touch the input box, the message should hide
    if (!password || !confirmPassword) {
        return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true }
}