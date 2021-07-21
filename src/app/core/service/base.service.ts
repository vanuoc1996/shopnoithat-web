import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  // @ts-ignore
  baseURL: string;

  protected constructor(baseURI: string) {
    this.baseURL = environment.api.baseEndpoint;
    // @ts-ignore
    this.baseURL += baseURI;
  }
}
