import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {DistributionEcart, mesureData, RepresentationCapteurAlgo} from '../../core/model/mesureData.model';


// import {Chart} from 'node_modules/chart.js';

declare let Chart: any;


@Component({
  selector: 'app-distribution-ecarts',
  templateUrl: './distribution-ecarts.component.html',
  styleUrls: ['./distribution-ecarts.component.css']
})
export class DistributionEcartsComponent implements OnInit {

  myChart: any;
  listeMesures: mesureData[];
  public errorMsg;
  ListeDistributionEcart: DistributionEcart[];

  constructor(private dashboardService: DashboardService) {
  }

  resetZoom() {
    this.myChart.resetZoom();
  }

  ngOnInit() {

    setTimeout(() => this.getAllElementLine(), 500);

    // this.getAllElementLine();

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
    this.ListeDistributionEcart = this.listeMesures['distribution_ecarts'];

    console.log('call complete');
    this.tester();
  }

  tester() {
    const ctx = document.getElementById('cvsDistibution');
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.ListeDistributionEcart.map(obj => obj.ecart), // Date Objects
        datasets: [
          {
            label: 'Ecart(m)',
            data: this.ListeDistributionEcart.map(obj => obj.occurence),
            fill: false,
            backgroundColor: '#FFCE56',
            borderColor: '#c69949'
            // borderDash: [5, 5],
          }
        ]
      },
      options: {
        responsive: false,
        title: {
          display: true,
          text: 'Distribution de répartition des écarts entre la mesure image et capteur'
        },
        scaleFontColor: 'black',
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'black',
          },
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Occurence'
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
          mode: 'y'
        },

        // Container for zoom options
        zoom: {
          // Boolean to enable zooming
          enabled: false,
          // drag: true,
          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'xy',
        }
      }
    });
  }


  tester2() {

    const ctx = document.getElementById('cvsDistibution');


    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        // Container for pan options
        pan: {
          // Boolean to enable panning
          enabled: true,

          // Panning directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow panning in the y direction
          mode: 'xy'
        },

        // Container for zoom options
        zoom: {
          // Boolean to enable zooming
          enabled: true,
          drag: true,
          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'xy',
        }
      }
    });

    // myChart.ctx.canvas.addEventListener('wheel', myChart._wheelHandler);
  }

}
