import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseCloudService {

  protected constructor(protected http: HttpClient, baseURI: string) {
    // @ts-ignore
    super(baseURI);
  }
}
