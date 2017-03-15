import  { Component } from '@angular/core';

@Component({
	selector: 'toolbox',
	templateUrl: './toolbox.template.html',
	styles: [require('./toolbox.styles.scss')]
	//styles: [require('./logo.styles.scss')]
})

export class ToolboxComponent {
	search: '';

	findCourse(): void {
		console.log(this.search);
	}

}
