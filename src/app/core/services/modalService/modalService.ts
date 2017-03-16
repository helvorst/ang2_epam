/**
 * Created by Elena_Barantseva on 3/16/2017.
 */
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()

export class ModalService {

    isShown: boolean = false;
    result = new Subject();

    dialog(): Observable<boolean> {
        this.isShown = true;
        return this.result.asObservable();
    }

}