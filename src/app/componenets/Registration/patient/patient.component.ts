import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
model = {} ;
emailPatern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

postdata = {test: 'my content',
          };

  constructor(private httpClient: HttpClient) { }

  onSubmit() {
    this.httpClient.post(`https://my-json-server.typicode.com/typicode/demo/profile/`,  this.model).subscribe((data: any) => {console.log(data); });

  }
}
