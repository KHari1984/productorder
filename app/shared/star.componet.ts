import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
selector:"edu-star",
templateUrl:'app/shared/star.component.html',
styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;

    @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();
    
    starWidth: number;

    onStar():void{
        this.ratingClicked.emit(`the rating clicked is ${this.rating}`)
    }
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
