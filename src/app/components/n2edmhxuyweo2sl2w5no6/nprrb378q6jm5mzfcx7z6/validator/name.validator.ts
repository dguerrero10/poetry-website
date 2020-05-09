import { AbstractControl } from '@angular/forms';

export function ValidateAnswerChelsea(control: AbstractControl) {
    if (!control.value.startsWith('Valpariso')) {
        return {validAnswer: true}
    }
    return null
}

export function ValidateAnswerAmanda(control: AbstractControl) {
    if (!control.value.startsWith('Bean')) {
        return {validAnswer: true}
    }
    return null
}