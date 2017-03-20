/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import {AuthService} from "./core/services/authService/auth.service";
import {Router} from "@angular/router";

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html')
})
export class AppComponent implements OnInit {

	constructor(private authService: AuthService,
	private router: Router) {
	};

	public ngOnInit() {
		// if(!this.authService.isAuthenticated()){
		// 	this.router.navigate(['/login']);
		// }
	};

}
