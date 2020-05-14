import { AbstractControl } from '@angular/forms';

export function ValidateAnswerChelsea(control: AbstractControl) {
    if (!control.value.startsWith('Valparaiso')) {
        return {validAnswer: true}
    }
    return null
}

export function ValidateAnswerAmanda(control: AbstractControl) {
    if (!control.value.startsWith('One Day')) {
        return {validAnswer: true}
    }
    return null
}