import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {mesureData} from '../../core/model/mesureData.model';

@Component({
  selector: 'app-dashboard-global',
  templateUrl: './dashboard-global.component.html',
  styleUrls: ['./dashboard-global.component.css']
})
export class DashboardGlobalComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {
  }

  listeMesures: mesureData[];
  public errorMsg;

  ngOnInit() {
    this.getAllElementLine();
  }

  getAllElementLine() {
    this.dashboardService.getAllElementLine()
      .subscribe((data => {
          this.listeMesures = data;
        }),
        error => this.errorMsg = error,
        () => {
          this.setMesuresToService();
        }
      );
  }

  setMesuresToService() {
    this.dashboardService.listeMesures = this.listeMesures;
    this.dashboardService.isHere = true;
    console.log('call Global complete');
    // this.tester();
  }
}
