import { Component} from '@angular/core';

@Component({
  selector: 'app-foreword-care',
  templateUrl: './foreword-care.component.html',
  styleUrls: ['./foreword-care.component.scss']
})
export class ForewordCareComponent  {
  
  pathToImg = '../../../../assets/man.jpg';

  onTop() {
    window.scrollTo(0,0);
  }

}
