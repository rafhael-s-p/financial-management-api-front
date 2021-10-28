import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

import { MessageService } from 'primeng/api';
//import { NotAuthenticatedError } from './../security/api-http-interceptor';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    //private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    }
    /*else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Your session has expired!';
      this.router.navigate(['/login']);

    }*/
    else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'There was an error processing your request.';

      if (errorResponse.status === 403) {
        msg = 'You are not allowed to do this action.';
      }

      try {
        msg = errorResponse.error[0].user_message;
      } catch (e) { }

      console.error('An error has occurred', errorResponse);

    } else {
      msg = 'Error processing remote service. Try again.';
      console.error('An error has occurred', errorResponse);
    }

    this.messageService.add({ severity:'error', detail: msg });
  }

}
