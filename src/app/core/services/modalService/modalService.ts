/**
 * Created by Elena_Barantseva on 3/16/2017.
 */
import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()

export class ModalService {

    isShown: boolean = false;
    result: Subject<boolean> = new Subject();
    content: Object = {
        title: 'Do you really wanna booty',
        description: 'If you do it...'
    };

    dialog(customContent: Object): Observable<boolean> {
        this.content = customContent;
        this.isShown = true;
        return this.result.asObservable();
    }

}
