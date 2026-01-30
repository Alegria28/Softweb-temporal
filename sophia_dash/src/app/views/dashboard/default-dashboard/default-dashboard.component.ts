import { Component, OnInit, ViewChild } from '@angular/core';
import { sophiaAnimations } from 'app/shared/animations/sophia-animations';
import { ThemeService } from 'app/shared/services/theme.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import tinyColor from 'tinycolor2';
import { series } from "./data";

import {
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexGrid,
} from "ng-apexcharts";

export interface PeriodicElement {
  orderNo: string,
    projectName: string,
    startDate: string,
    endDate: string,
    status: string,
    color: string,
    operator: string,
}
const ELEMENT_DATA: PeriodicElement[] = [
    {
    orderNo: "#678788",
    projectName: 'sophiaUI jQuery',
    startDate: '23/07/2019',
    endDate: '12/10/2018',
    status: 'Released',
    color: 'badge-success',
    operator: 'M. Apostolski'
  },
  {
    orderNo: "#678788",
    projectName: 'sophiaUI jQuery',
    startDate: '23/07/2019',
    endDate: '12/10/2018',
    status: 'Review',
    color: 'badge-review',
    operator: 'S. Apostolska'
  },
  {
    orderNo: "#678788",
    projectName: 'sophiaUI jQuery',
    startDate: '23/07/2019',
    endDate: '12/10/2018',
    status: 'Pending',
    color: 'badge-pending',
    operator: 'E. Ravnjanski'
  },
  {
    orderNo: "#678788",
    projectName: 'sophiaUI jQuery',
    startDate: '23/07/2019',
    endDate: '12/10/2018',
    status: 'Releised',
    color: 'badge-success',
    operator: 'L. Apostolski'
  },
  {
    orderNo: "#678788",
    projectName: 'sophiaUI jQuery',
    startDate: '23/07/2019',
    endDate: '12/10/2018',
    status: 'Releised',
    color: 'badge-success',
    operator: 'L. Apostolski'
  }
];



export type ChartOptionsThree = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
};
export type CustomerOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  grid: ApexGrid;
};
export type ChartOptionsCategories = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
};
export type CustomerOptionsTwo = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};
export type ChartOptionsUsers = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
};
export type RadialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};
@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss'],
  animations: sophiaAnimations
})
export class DefaultDashboardComponent implements OnInit {
contacts: any[];
products: any[];
events: any[];
  activeTrades: any[];
  trafficSourcesChart: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild("chart") chart: ChartComponent;

  public chartOptionsThree: Partial<ChartOptionsThree>;
  public customerOptions: Partial<CustomerOptions>;
  public customerOptionsTwo: Partial<CustomerOptionsTwo>;
  public RadialChartOptions: Partial<RadialChartOptions>;
  public chartOptionsUsers: Partial<ChartOptionsUsers>;
  public chartOptionsCategories: Partial<ChartOptionsCategories>;


  sharedChartOptions: any = {
    responsive: true,
    // maintainAspectRatio: false,
    legend: {
      display: false,
      position: 'bottom'
    }
  };
  setBarColor(theme) {
    this.lineBarColors =  [{
      backgroundColor: tinyColor(theme.baseColor).setAlpha(1),
      borderColor: '#3f51b5',
      pointBackgroundColor: '#3f51b5',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }, {
      backgroundColor: '#eeeeee',
      borderColor: '#e0e0e0',
      pointBackgroundColor: '#e0e0e0',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }, {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  }
  fill: {
    colors: ['#F44336', '#E91E63', '#9C27B0']
  }
  lineChartSteppedData: Array <any> = [{
    data: [4, 6, 4, 8, 4, 4, 9],
    label: 'Order',
    borderWidth: 0,
    fill: true,
    // steppedLine: true
  }, {
    data: [3, 5, 9, 4, 8, 2, 4],
    label: 'New client',
    borderWidth: 1,
    fill: true,
    // steppedLine: true
  }];
  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
  /*
  * Full width Chart Options
  */
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      position: 'bottom'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        ticks: {
          beginAtZero: true,
          suggestedMax: 9,
        }
      }]
    }
  };


 

 /*
  * Bar Chart
  */
 barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
 barChartType = 'bar';
 barChartLegend = true;
 barChartData: any[] = [{
   data: [2, 6, 7, 8, 4, 5, 5],
   label: 'Series A',
   borderWidth: 0
 }, {
   data: [5, 4, 4, 3, 6, 2, 5],
   label: 'Series B',
   borderWidth: 0
 }];
 barChartOptions: any = Object.assign({
   scaleShowVerticalLines: false,
   scales: {
     xAxes: [{
       gridLines: {
         color: 'rgba(0,0,0,0.02)',
         zeroLineColor: 'rgba(0,0,0,0.02)'
       }
     }],
     yAxes: [{
       gridLines: {
         color: 'rgba(0,0,0,0.02)',
         zeroLineColor: 'rgba(0,0,0,0.02)'
       },
       position: 'left',
       ticks: {
         beginAtZero: true,
         suggestedMax: 9
       }
     }]
   }
 }, this.sharedChartOptions);




  public lineChartColors: Array<any> = [];
  public lineBarColors: Array<any> = [];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';
  

  // Chart grid options
  doughnutChartColors1: any[] = [{
    backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
  }];
    doughnutChartColors2: any[] = [{
    backgroundColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .15)',]
  }];
  total1: number = 500;
  data1: number = 200;
  doughnutChartData1: number[] = [this.data1, (this.total1 - this.data1)];

  total2: number = 600;
  data2: number = 400;
  doughnutChartData2: number[] = [this.data2, (this.total2 - this.data2)];
  doughnutLabels = ['Spent', 'Remaining']
  doughnutChartType = 'doughnut';
  doughnutOptions: any = {
    cutoutPercentage: 85,
    responsive: true,
    legend: {
      display: false,
      position: 'bottom'
    },
    elements: {
      arc: {
        borderWidth: 0,
      }
    },
    tooltips: {
      enabled: true
    }
  };

 

  

 

  constructor(
    private themeService: ThemeService
  ) { 

    this.chartOptionsUsers = {
      series: [
        {
          name: "Inflation",
          data: [6.3, 3.1, 9.0, 10.1, 4.0, 5.6, 7.2, 2.3, 1.4]
        }
      ],
      chart: {
        height: 300,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
          dataLabels: {
            position: "top" // top, center, bottom
          }
        },
        
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "0px",
          colors: ["#304758"]
        }
      },
      stroke: {
        show: true,
        width: 26,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        opacity: 1
      },
     

      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      title: {
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };



    this.customerOptionsTwo = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }
      ],
      chart: {
        height: 150,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB"
     
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };


    this.chartOptionsCategories = {
      series: [44, 55, 13, 43],
      chart: {
        type: "donut"
      },
      labels: ["Headsets", "Laptops", "Tv's", "Smartphones"],
      colors: ["#5779ff", "#ff9b2d", "#ff3f3b", "#37adff"],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      legend: {
        show: true,
        position: "bottom"
      }
    };
   
    this.customerOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 251, 49, 62, 69, 91, 248]
        }
      ],
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 3,
        dashArray: 0
      },
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      chart: {
        height: 130,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },

      grid: {
        borderColor: "#fff",
        strokeDashArray: 0,
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0
        }
      },
      xaxis: {
        categories: {
          enabled: true
        },
        tooltip: {
          enabled: false
        }
      }
    };


    this.chartOptionsThree = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 380,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      fill: {
        colors: ['#e8f519', '#e8f519']
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };


    this.RadialChartOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 290,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };
  }

  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.setChartColor(activeTheme);
      this.setBarColor(activeTheme);
    });
    this.setChartColor(this.themeService.activatedTheme);  
    this.setBarColor(this.themeService.activatedTheme);  

      this.themeService.onThemeChange.subscribe(activeTheme => {
        this.initTrafficSourcesChart(activeTheme)
      });

      this.initTrafficSourcesChart(this.themeService.activatedTheme)
     

      this.products = [
        {
          name: "Ultra Whitte Wireless",
          avatar: "assets/images/products/new/headphone1.png",
          time: "$55.00",
          mood: ""
        },
        {
          name: "Ellite Pro Book 15'6 7500U" ,
          avatar: "assets/images/products/new/laptop.png",
          time: "$799.00",
          mood: ""
        },
        {
          name: "Hybrid Smartwatch Waterproof",
          avatar: "assets/images/products/new/Smartwatch5.png",
          time: "$189.00",
          mood: ""
        },
        {
          name: "TV Smart 2000",
          avatar: "assets/images/products/new/tv2.png",
          time: "$599.00",
          mood: ""
        },
        {
          name: "ONTEC Camera W5000",
          avatar: "assets/images/products/new/Photocamera4.png",
          time: "$444.00",
          mood: ""
        },
        {
          name: "Ultra Whitte Wireless",
          avatar: "assets/images/products/new/headphone1.png",
          time: "$49.00",
          mood: ""
        },
        {
          name: "Ellite Pro Book 15'6 7500U" ,
          avatar: "assets/images/products/new/laptop5.png",
          time: "$999.00",
          mood: ""
        },
      ];
      this.events = [
        {
          date: "22 JUL, TUS",
          message: "Meeting with partners",
        },
        {
          date: "14 AUG, FRI" ,
          message: "12th web Conference",
        },
        {
          date: "18 AUG, SAT",
          message: "Coffe brake with colegues",
        },
        {
          date: "14 SEP, MON",
          message: "Dialy stand up with team",
        },
        {
          date: "18 SEP, WED",
          message: "Onboarding with new member",
        },
        {
          date: "22 OCT, THU",
          message: "New sprint review",
        }
      ];
      
      this.contacts = [
        {
          name: "Dino Donel",
          avatar: "assets/images/products/new/headphone1.png",
          status: "online",
          message: "You did great with the last presentation, looking forward to working with you on the next project.",
          time: "11min ago",
          mood: ""
        },
        {
          name: "Jasmin Sugare",
          avatar: "assets/images/faces/16.jpg",
          status: "offline",
          message: "It was a trap, we don't beleve that",
          time: "2 hours ago",
          mood: ""
        },
        {
          name: "Elena Ravnjanski",
          avatar: "assets/images/faces/10.jpg",
          status: "online",
          message: "Looking forward to seeing you, We will have wanderful time together",
          time: "3 hours ago",
          mood: ""
        },
        {
          name: "Marko Apostolski",
          avatar: "assets/images/faces/9.jpg",
          status: "offline",
          message: "Marko is an awesome guy, he is really polite",
          time: "2 days ago",
          mood: ""
        },
        {
          name: "Laze Apostolski",
          avatar: "assets/images/faces/5.jpg",
          status: "offline",
          message: "What are your plans for tomorrow night? How about to go on a drink?",
          time: "2 days ago",
          mood: ""
        }
      ];
  }




  initTrafficSourcesChart(theme) {
    this.trafficSourcesChart = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      color: [
        tinyColor(theme.baseColor).setAlpha(.6).toString(),
        tinyColor(theme.baseColor).setAlpha(.7).toString(),
        tinyColor(theme.baseColor).setAlpha(.8).toString()
      ],
      tooltip: {
        show: false,
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      xAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],

      series: [
        {
          name: "Sessions",
          type: "pie",
          radius: ["55%", "85%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          hoverOffset: 5,
          stillShowZeroSum: false,
          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "13",
                fontWeight: "normal"
              },
              formatter: "{a}"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "15",
                fontWeight: "normal",
                color: "rgba(76, 175, 229, 1)"
              },
              formatter: "{b} \n{c} ({d}%)"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 235,
              name: "Direct"
            },
            {
              value: 110,
              name: "Search Eng."
            },
            { value: 148, name: "Social" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(76, 175, 229, 1)"
            }
          }
        }
      ]
    };
  }
  setChartColor(theme) {
    console.log(theme);
    
    this.lineChartColors = [{
      backgroundColor: tinyColor(theme.baseColor).setAlpha(.6),
      borderColor: tinyColor(theme.baseColor).setAlpha(1),
      pointBackgroundColor: tinyColor(theme.baseColor).setAlpha(.4),
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      pointHoverBackgroundColor: theme.baseColor,
      pointHoverBorderColor: theme.baseColor
    }, {
      backgroundColor: 'rgba(219, 166, 166, .5)',
      borderColor: 'rgba(219, 166, 166, 1)',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.06)',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
      pointHoverBorderColor: 'rgba(0, 0, 0, 0)'
    }]    
  }



}
