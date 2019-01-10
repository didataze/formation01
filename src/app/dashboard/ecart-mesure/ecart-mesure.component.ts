import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import * as moment from 'moment';
import {EcartMesure, mesureData} from '../../core/model/mesureData.model';

declare let Chart: any;

@Component({
  selector: 'app-ecart-mesure',
  templateUrl: './ecart-mesure.component.html',
  styleUrls: ['./ecart-mesure.component.css']
})
export class EcartMesureComponent implements OnInit {

  data: any;
  private myChart: any;
  listeMesures: mesureData[];
  public errorMsg;
  ListeEcartMesures: EcartMesure[];

  constructor(private dashboardService: DashboardService) {
  }

  selectData(event) {
    // this.dashboardService.add({severity: 'info', summary: 'Data Selected',
    // 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    console.log(event.element._index);
  }

  resetZoom() {
    this.myChart.resetZoom();
  }

  ngOnInit() {
    setTimeout(() => this.getAllElementLine(), 500);
    // this.getAllElementLine();
    // this.listeMesures = this.dashboardService.listeMesures
    // this.getListItem();

  }

  getAllElementLine() {
    this.dashboardService.getAllElementLine()
      .subscribe((data => {
          this.listeMesures = data;
        }),
        error => this.errorMsg = error,
        () => {
          this.getListItem();
        }
      );
  }

  getListItem() {
    this.ListeEcartMesures = this.listeMesures['ecart_mesure'];

    console.log('call complete');
    this.tester();
  }

  tester() {
    const timeFormat = 'DD/MM/YYYY HH:mm';
    const ctx = document.getElementById('cvsEcart');
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.ListeEcartMesures.map(obj => obj.sDate), // Date Objects
        datasets: [
          {
            label: 'Mesure Image',
            data: this.ListeEcartMesures.map(obj => obj.ecart),
            fill: false,
            backgroundColor: '#2191c0',
            borderColor: '#0078ae'
            // borderDash: [5, 5],
          }
        ]
      },
      options: {
        responsive: false,
        title: {
          display: true,
          text: 'Ecart entre la mesure image et capteur'
        },
        scaleFontColor: 'black',
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'black',
          },
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              format: timeFormat,
              // round: 'day'
              tooltipFormat: timeFormat // 'll HH:mm'
            },
            // scaleLabel: {
            //   display: true,
            //   labelString: 'Date'
            // },
            // ticks: {
            //   maxRotation: 0
            // }
          }
          ],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Ecarts(m)'
            },
            ticks: {
              // beginAtZero: true
            }
          }]
        },
        // Container for pan options
        pan: {
          // Boolean to enable panning
          enabled: true,

          // Panning directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow panning in the y direction
          mode: 'x'
        },

        // Container for zoom options
        zoom: {
          // Boolean to enable zooming
          enabled: true,
          // drag: true,
          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'x',
          limits: {
            max: 10,
            min: 0.5
          }
        }
      }
    });
  }

  tester2() {
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
      'November', 'December'];
    const randomScalingFactor = function () {
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    };
    const randomColorFactor = function () {
      return Math.round(Math.random() * 255);
    };
    const randomColor = function () {
      return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
    };
    const barChartData = {
      labels: ['January-16', 'February-16', 'March-16', 'April-16', 'May-16', 'June-16', 'July-16', 'August-16', 'September-16',
        'October-16', 'November-16', 'December-16', 'January-17', 'February-17', 'March-17', 'April-17', 'May-17', 'June-17',
        'July-17', 'August-17', 'September-17', 'October-17', 'November-17', 'December-17'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: 'rgba(220,220,220,0.5)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
          randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
          randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
          randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
          randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
      }, {
        hidden: false,
        label: 'Dataset 2',
        backgroundColor: 'rgba(255,187,205,1)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
          randomScalingFactor(), randomScalingFactor()]
      }, {
        label: 'Dataset 3',
        backgroundColor: 'rgba(151,187,205,0.5)',
        data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(),
          randomScalingFactor(), randomScalingFactor()]
      }]
    };
    const ctx = document.getElementById('cvsEcart');
    this.myChart = new Chart(ctx, {
      type: 'horizontalBar',
      // type: 'horizontalBar',
      data: barChartData,
      options: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
          rectangle: {
            borderWidth: 2,
            borderColor: 'rgb(0, 255, 0)',
            borderSkipped: 'bottom'
          }
        },
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        },
        pan: {
          enabled: true,
          mode: 'y'
        },
        zoom: {
          enabled: true,
          mode: 'xy'
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 'April-16',
              max: 'August-16'
            }
          }]
        }
      }
    });

  }

}
