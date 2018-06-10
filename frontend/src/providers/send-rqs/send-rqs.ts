import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SendRqsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SendRqsProvider {

  constructor(public http: Http) {
    // console.log('Hello SendRqsProvider Provider');
  }

  sendReqs(reqs){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:5000/reqs/add", reqs, { headers: headers })
      .map(res => res.json());
  }

  // get all the approvals
  getApprovals(){
    return this.http.get('http://localhost:5000/reqs/get/reqwfa')
    .map(res => res.json());
  }

  // get all the issues
  getIssues(){
    return this.http.get('http://localhost:5000/reqs/get/reqwfi')
    .map(res => res.json());
  }

  // Approves
  approves(id){
    return this.http.get(`http://localhost:5000/reqs/approve/${id}`)
    .map(res => res.json())
  }
  
  // Issues
  issues(id){
    return this.http.get(`http://localhost:5000/reqs/issue/${id}`)
    .map(res => res.json())
  }

}
