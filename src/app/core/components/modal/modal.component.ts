/**
 * Created by Elena_Barantseva on 3/16/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modalService/modalService";

@Component({
    selector: 'modal',
    templateUrl: 'modal.template.html',
    styles: [require('./modal.styles.scss')]
})

export class ModalComponent {

    constructor(private modal: ModalService) {

    }

    content = {
        title: 'Do you really wanna booty',
        description: 'If you do it...'
    };

    action(chosen: boolean): void {
        this.modal.result.next(chosen);
        this.modal.isShown = false;

    }
}