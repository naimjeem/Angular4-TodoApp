import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Anugular", "Polymer", "React", "Vue"];
    newItem = "fsdfsf";
    pushItems = function() {
        if(this.newItem != ""){
            this.items.push(this.newItem);
            this.newItem = "";
        }
    }
    
    removeItem(index) {
        this.items.splice(index, 1);
    }
}
