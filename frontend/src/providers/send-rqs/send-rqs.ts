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
  domain: String = "https://fierce-falls-78024.herokuapp.com";
  
  constructor(public http: Http) {
    // console.log('Hello SendRqsProvider Provider');
  }

  sendReqs(reqs) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(this.domain + "/reqs/add", reqs, { headers: headers })
      .map(res => res.json());
  }

  // get all the approvals
  getApprovals() {
    return this.http.get(this.domain + '/reqs/get/reqwfa')
      .map(res => res.json());
  }

  // get all the issues
  getIssues() {
    return this.http.get(this.domain + '/reqs/get/reqwfi')
      .map(res => res.json());
  }

  // Approves
  approves(id) {
    return this.http.get(`${this.domain}/reqs/approve/${id}`)
      .map(res => res.json());
  }

  // get the requsition from the databse
  getReqI(id) {
    return this.http.get(`${this.domain}/reqs/issue/${id}`)
      .map(res => res.json());
  }

  // Post request to issue Requsition
  postIssueReq(requ) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(`${this.domain}/reqs/issue`, requ, { headers: headers })
      .map(res => res.json());
  }

  // get all the issued requsitions
  getIRS(){
    return this.http.get(`${this.domain}/reqs/get/issued`)
    .map(res => res.json());
  }

}
