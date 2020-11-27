import { Injectable } from '@angular/core';
import { userData } from './data';

interface UserDetail {
  first_name: string;
  last_name: string;
  email: string;
  is_complete: boolean;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  constructor() {}

  getData(): UserDetail[] {
    return userData;
  }
  addData(data: UserDetail) {
    userData.push(data);
  }
  removeData(id: string) {
    userData.forEach((item) => {
      if (item.id != id) {
        return item;
      } else {
        return null;
      }
    });
  }
}
