import { Component, OnInit } from '@angular/core';
import { Competitor } from './competitor';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  categorys :string[]=['2x2','3x3', '4x4', '5x5', 'Square1','Megaminx',' Skewb','Pyraminx','3x3 Blindfold']
  competitors:Competitor[]=[];
  competitor:Competitor = new Competitor('','',16,'','',50);   
 


  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(isValid:boolean|null){
      if(isValid){
        let newCompetitor = {...this.competitor};
        // this.formVals = JSON.stringify(this.competitor);
        this.competitors.push(newCompetitor)
        console.log(this.competitors);
      }else{
         'Error please try again'
      }
    
  }
  
    
}


