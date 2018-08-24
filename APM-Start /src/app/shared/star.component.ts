import { Component, EventEmitter, OnChanges, Input, Output } from '@angular/core';

@Component ({
	selector: 'pm-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
	@Input() rating: number; // @Input means you're passing the data down from the parent
	starWidth: number;

	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // this sets up the event
	
	onClick(): void {
		this.ratingClicked.emit(`This event ${this.rating}`);
		console.log(`This event ${this.rating}`);
	}

	ngOnChanges(): void {
		this.starWidth = this.rating * 75/5;
	}
}

