import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-messages',
  templateUrl: 'error-messages.html'
})
export class ErrorMessagesComponent {

    @Input('control') control: FormControl;
    errorMessages: Object;

    constructor() {
        // Default error messages
        this.errorMessages = {
            'required': 'This field must not be empty',
            'minlength': 'Sorry, this field is too short',
            'maxlength': 'Sorry, this field is too long',
            'pattern': 'Sorry, this is not valid'
        };
    }

    get errorMessage() {
        for(let error in this.control.errors){
            if (this.control.errors.hasOwnProperty(error) && (this.control.touched || (this.control.asyncValidator !== null && !this.control.pristine))){
                return this.errorMessages[error];
            }
        }
        return null;
    }

}