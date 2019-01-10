import { Component, OnInit } from '@angular/core';
import {ElementLine} from '../../core/model/elementLine.model';
import {DemonstratorService} from '../demonstrator.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-liste-element',
  templateUrl: './liste-element.component.html',
  styleUrls: ['./liste-element.component.css']
})
export class ListeElementComponent implements OnInit {


  elementLines: ElementLine[];
  public errorMsg;
  cols: any[];

  constructor(private demonstratorService: DemonstratorService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Traitement des documents');
    this.getAllElementLine();
    this.cols = [
      {field: 'date_de_debut', header: 'date_de_debut'},
      {field: 'code_usine', header: 'code_usine'},
      {field: 'egf', header: 'egf'},
      {field: 'sef', header: 'sef'},
      {field: 'libelle', header: 'libelle'},
      {field: 'predicted_T4', header: 'predicted_T4'},
      // {field: 'explication', header: 'explication'},
      {field: 'priorisation', header: 'priorisation'}
    ];

  }

  getAllElementLine() {
    this.demonstratorService.getAllElementLine()
      .subscribe((data => {
          this.elementLines = data;
        }),
        error => this.errorMsg = error,
        () => this.getListItem()
      );
  }

  getListItem() {
    console.log('call complete');
  }
  onRowSelect(event) {
    console.log(event.data);
  }


}
