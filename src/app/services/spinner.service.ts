import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private SpinnerComponent = new Subject<any>();

  showSpinner$ = this.SpinnerComponent.asObservable();

  public showSpinner(option: boolean) {
    this.SpinnerComponent.next(option);
  }
}
