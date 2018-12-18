import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'name': '企业协作平台',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
    {
      'name': '自动化测试项目',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/2.jpg'
    }
  ];
  constructor(private dialog: MatDialog) { }
  ngOnInit() {
  }
  openNewProjectDialog() {
   let dialogRef =  this.dialog.open(NewProjectComponent, {data: {dark: true}});
   dialogRef.afterClosed().subscribe(result => {
     // 接收来自对话框的消息
     console.log("我接收到你的消息了: " + JSON.stringify(result));
   })
  }
}
