import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MockService {
  url = 'http://localhost:3000/locations';

  async getAllData(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getDataById(id: number): Promise<any | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
