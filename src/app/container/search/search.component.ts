import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
//send data to parent
  //1.create and event
  @Output()
  searchtextCanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchtextCanged(){
    this.searchtextCanged.emit(this.searchText);
  }
  
  updateSearchText(event: any) {
    this.searchText = event.target.value;

    
  }
}
