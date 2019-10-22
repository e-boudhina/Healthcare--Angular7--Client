import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
model = {} ;
  model1 = {title: '3rd post'} ;
emailPatern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

postdata = {test: 'my content',
          };

  constructor(private httpClient: HttpClient) { }

  onSubmit() {
    this.httpClient.post(`http://127.0.0.1:8002/api/lists`,  this.model1).subscribe((data: any) => {console.log(data); });

  }
}
