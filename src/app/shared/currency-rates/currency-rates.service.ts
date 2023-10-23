import { HttpClient } from '@angular/common/http';
import { GetExchangeRatesResponseDto } from './currency-rates.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRatesService {
  constructor(private httpClient: HttpClient) {}

  getExchangeRates(): Observable<GetExchangeRatesResponseDto> {
    return this.httpClient.get<GetExchangeRatesResponseDto>(`${environment.backendUrl}/api/exchange-rate`);
  }
}
