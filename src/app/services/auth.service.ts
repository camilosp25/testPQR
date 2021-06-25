import {Injectable} from '@angular/core';
// @ts-ignore
import users_data from '../../assets/data/users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(formData: any): boolean {
    const Data = formData.value;
    const user = users_data.filter((data: any) => (data.email === Data.email && data.password === Data.password));
    if (user.length > 0) {
      sessionStorage.setItem('userId', user[0].id);
      return true;
    }
    return false;
  }

  verifyLoggedUser(): boolean {
    return !!(sessionStorage.getItem('userId'));
  }
}
