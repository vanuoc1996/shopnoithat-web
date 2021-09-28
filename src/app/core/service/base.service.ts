import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import * as Http from "http";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  // @ts-ignore
  baseURL: string;

   // @ts-ignore
  constructor(private http: Http) {
  }

  count(){

  }
}
