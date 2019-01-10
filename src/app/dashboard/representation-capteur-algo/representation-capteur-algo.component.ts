import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import * as moment from 'moment';
import {mesureData, RepresentationCapteurAlgo} from '../../core/model/mesureData.model';

declare let Chart: any;

@Component({
  selector: 'app-representation-capteur-algo',
  templateUrl: './representation-capteur-algo.component.html',
  styleUrls: ['./representation-capteur-algo.component.css']
})
export class RepresentationCapteurAlgoComponent implements OnInit {

  myChart: any;
  listeMesures: mesureData[];
  public errorMsg;
  ListeRepresentations: RepresentationCapteurAlgo[];

  valeurMesure: any = 'aaa';
  valeurDate: any = 'bbb';
  valeurHeur: any = 'ccc';

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

    console.log(this.dashboardService.listeMesures);
    this.ListeRepresentations = this.listeMesures['representation_capteur_algo'];

    console.log('call complete');
    this.tester();
  }


  tester() {
    const timeFormat = 'DD/MM/YYYY HH:mm';
    const ctx = document.getElementById('cvsRepresentation');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.ListeRepresentations.map(obj => obj.sDate), // Date Objects
        datasets: [
          {
            label: 'Mesure Image',
            data: this.ListeRepresentations.map(obj => obj.image),
            fill: false,
            backgroundColor: '#FFCE56',
            borderColor: '#c69949'
            // borderDash: [5, 5],
          }
          , {
            label: 'Mesure Capteur',
            data: this.ListeRepresentations.map(obj => obj.capteur),
            fill: false,
            backgroundColor: '#2191c0',
            borderColor: '#0078ae'
          }
        ]
      },
      options: {
        onClick: getValues,
        responsive: false,
        title: {
          display: true,
          // text: 'Représentation données capteurs et algo'
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
              labelString: 'Hauteur(m)'
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
          drag: true,
          // Zooming directions. Remove the appropriate direction to disable
          // Eg. 'y' would only allow zooming in the y direction
          mode: 'x',
          limits: {
            max: 10,
            min: 0.5
          }
          // scaleLabel: {
          //   display: true,
          //   labelString: 'value'
          // }
        }
      }
    });
    this.myChart = myChart;

    function getValues(evt, item) {

      const index = item[0]._index;
      const datasetIndex = item[0]._datasetIndex;
      // alert(this.myChart.data.labels[[index]] + ' ' + this.myChart.data.datasets[0].data[[index]]);
      const dataset = myChart.data.datasets[datasetIndex];

      this.valeurDate = myChart.data.labels[index];
      this.valeurMesure = dataset.data[index];
      // TODO: a modifier pour afficher les points selectionnée.
      // document.getElementById('valeurMesure').value = this.valeurMesure;
      // document.getElementById('valeurDate').value = this.valeurDate.substring(0, 10);
      // document.getElementById('valeurHeur').value = this.valeurDate.substring(11, 16);
    }
  }
}
