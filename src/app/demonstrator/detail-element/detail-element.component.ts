import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {DemonstratorService} from '../demonstrator.service';
import {switchMap} from 'rxjs/operators/switchMap';
import {Observable} from 'rxjs';
import {ElementLine} from '../../core/model/elementLine.model';

@Component({
  selector: 'app-detail-element',
  templateUrl: './detail-element.component.html',
  styleUrls: ['./detail-element.component.css']
})
export class DetailElementComponent implements OnInit {

  // @Input() valElement: ElementLine;

  alert$: Observable<ElementLine>;

  constructor(private route: ActivatedRoute,
              public demonstratorService: DemonstratorService) {
  }

  ngOnInit() {
    this.getAlerte();
  }

  getAlerte() {

    this.alert$ = this.route.params
      .pipe(
        switchMap(params =>
          this.demonstratorService.getElementLine(params['id']))
      );
  }
}
