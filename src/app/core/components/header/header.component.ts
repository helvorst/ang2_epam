import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AuthService} from "../../services/authService/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'main-header',
    templateUrl: 'header.component.html',
    styles: [require('./header.component.scss')],
    providers: [],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    isUserAuthenticated: boolean = false;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.isUserAuthenticated = this.authService.isAuthenticated();
    };

    logout(): void {
        const logoutResult = this.authService.logout();
        if (logoutResult) {
            this.router.navigate(['/login']);
        }
    };
}
