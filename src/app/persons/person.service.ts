import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { City, Person, State } from '../core/model';

export class PersonFilter {
  name: string;
  page = 0;
  itemsPerPage = 5;
}

@Injectable()
export class PersonService {

  personsUrl: string;
  citiesUrl: string;
  statesUrl: string;

  constructor(private http: HttpClient) {
    this.personsUrl = `${environment.apiUrl}/persons`;
    this.citiesUrl = `${environment.apiUrl}/cities`;
    this.statesUrl = `${environment.apiUrl}/states`;
  }

  search(filter: PersonFilter): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');
    let params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString());

    if (filter.name) {
      params = params.set('name', filter.name);
    }

    return this.http.get(`${this.personsUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const persons = response['content'];

        const result = {
          persons,
          total: response['total_elements']
        };

        return result;
      });
  }

  searchById(id: number): Promise<Person> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get<Person>(`${this.personsUrl}/${id}`, { headers })
      .toPromise();
  }

  listAll(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get(this.personsUrl, { headers })
      .toPromise()
      .then(response => response['content']);
  }

  save(person: Person): Promise<Person> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Person>(this.personsUrl, person, { headers })
      .toPromise();
  }

  update(person: Person): Promise<Person> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Person>(`${this.personsUrl}/${person.id}`, person, { headers })
      .toPromise();
  }

  updateStatus(id: number, active: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.personsUrl}/${id}/active`, active, { headers })
      .toPromise()
      .then(() => null);
  }

  delete(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.delete(`${this.personsUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  listStates(): Promise<State[]> {
    return this.http.get<State[]>(this.statesUrl).toPromise();
  }

  searchCities(state): Promise<City[]> {
    const params = new HttpParams()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .set('state', state);

    return this.http.get<City[]>(this.citiesUrl, { params }).toPromise();
  }

}
