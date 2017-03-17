import {Component} from "@angular/core";
import {AuthService} from "../../core/services/authService/auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styles: [require('./login.styles.scss')]
})

export class LoginComponent {
    constructor(private authService: AuthService,
                private router: Router) {

    };

    credentials = {
        login: undefined,
        password: undefined
    };

    login(): void {
        const loginResult = this.authService.login(this.credentials);
        if(loginResult){
            this.router.navigate(['courses']);
        }
    };
}