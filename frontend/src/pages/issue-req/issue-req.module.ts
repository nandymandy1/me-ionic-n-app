import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssueReqPage } from './issue-req';

@NgModule({
  declarations: [
    IssueReqPage,
  ],
  imports: [
    IonicPageModule.forChild(IssueReqPage),
  ],
})
export class IssueReqPageModule {}
