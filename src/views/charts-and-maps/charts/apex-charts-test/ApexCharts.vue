<!-- =========================================================================================
    File Name: ApexCharts.vue
    Description: Apex Charts Demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuejs, HTML Template
    Author: Krylov
========================================================================================== -->

<template>
    <div id="extra-component-chartist-demo">
        <p class="mb-4">Тестовое задание<a href="https://www.notion.so/ebce90fb566842a4a102d844d375045c" target="_blank" rel="nofollow">here</a></p>

       <div class="vx-row">

         <!-- CUSTOM BAR CHART -->
         <div class="vx-col md:w-1/3 w-full mb-base">
           <vx-card title="График состояния батарей" code-toggler>
           <p>
             <label><b>Деградации батарей приборов на протяжении месяца</b> </label> &nbsp;
             <select @change="updateTheme">
               <option value="poss0">БСПИ Имя    1908381 </option>
               <option value="poss1">Имя прибора 1908378</option>
               <option value="poss2">Имя прибора 1908380</option>
               <option value="poss3">Имя прибора 1908380</option>
             </select>
           </p>
           <apexcharts
             width="100%"
             height="350"
             type="bar"
             :options="chartOptions"
             :series="series"
           ></apexcharts>
           </vx-card>
         </div>

         <!-- RADIAL BAR CHART -->
           <div class="vx-col md:w-1/5 w-full mb-base">
             <vx-card title="Уровень заряда батарей БСПИ и комплектов" code-toggler>
               <vue-apex-charts type="radialBar" height="350" :options="apexChatData.radialBarChart.chartOptions" :series="apexChatData.radialBarChart.series"></vue-apex-charts>
               <template slot="codeContainer">
                 {{ apexChatData.radialBarChartCode }}
               </template>
             </vx-card>
           </div>
         <!-- BSPI Radial Bar Charts > Stroked Gauge > display battery charts-->
         <div class="vx-col md:w-1/5 w-full mb-base">
           <vx-card title="Заряд прибора" code-toggler>
           <vue-apex-charts type=radialBar height=350 :options="analyticsDataRadialBarСhartOptions" :series="analyticsDataRadialBarСhartOptions.series" />
           </vx-card>
         </div>
         <!-- BSPI battery_СhartOptions Charts > Mixed Charts > Line Column -->
         <div class="vx-col md:w-1/4 w-full mb-base">
           <vx-card title="Заряд прибора" code-toggler>
             <vue-apex-charts type=line height=350 :options="battery_СhartOptions" :series=" battery_СhartOptions.series" />
           </vx-card>
         </div>

         <!-- BSPI RSSI_СhartOptions Charts >Line Charts > Realtime -->
<!--         <div class="vx-col md:w-1/3 w-full mb-base">-->
<!--           <vx-card title="Уровень  RSSI БСПИ" code-toggler>-->
<!--             <vue-apex-charts  height=350 :options="RSSI_СhartOptions" :series="RSSI_СhartOptions.series" />-->
<!--           </vx-card>-->
<!--         </div>-->

        <!-- LINE AREA CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Состояние индикации датчиков комплектов" code-toggler>
                    <vue-apex-charts type="area" height="350" :options="apexChatData.lineAreaChartSpline.chartOptions" :series="apexChatData.lineAreaChartSpline.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.lineAreaChartSplineCode }}
                    </template>
                </vx-card>
            </div>

            <!-- COLUMN CHART -->
            <div class="vx-col md:w-1/2 w-full mb-base">
                <vx-card title="Состояние комплектов (есть / нет )" code-toggler>
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.columnChart.chartOptions" :series="apexChatData.columnChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.columnChartCode }}
                    </template>
                </vx-card>
            </div>

         <!-- BSPI RSSI_СhartOptions Charts >Line Charts > Realtime -->
         <div class="vx-col w-full mb-base">
           <vx-card title="Ток, зафиксированный датчиками на момент выхода прибора на связь" code-toggler>
             <vue-apex-charts  type="line" height=350 :options="realtimeOptionsUI" :series="realtimeOptionsUI.series" />
           </vx-card>
         </div>




        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData.js'

export default {
    data() {

        return {
          apexChatData: apexChatData,
          /*for CUSTOM  UI  for BSPI > Line Charts > Realtime*/
          realtimeOptionsUI : {
            series: [
              {
                name: 'U',
                data: [null, 0.01, 0.09, 0.07, null, null,0.02, 0.06, 0.1, 0.07, 0.01, 0.16, 0.06, null, null,null, null]
              },
              {
              name: 'i',
              data: [null, null, null, null, 0.01, 0.02, 0.06, 0.09, 0.07, 0.1, 0.07, null, null, null, null, 0.05,null]
            }],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
              animations: {
                enabled: false
              }
            },
            stroke: {
              width: [5,5,4],
              curve: 'straight'
            },
            // labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            title: {
              text: 'Последние значения токов и напряжений'
            },
            xaxis: {

              categories: ["00:00:00", "01:30:00", "02:30:00",
                "03:30:00", "04:30:00", "05:30:00",
                "06:30:00", "07:00:00", "08:30:00", "09:30:00",
                "10:30:00", "11:30:00", "12:30:00",
                "13:30:00", "14:30:00", "15:30:00", "16:30:00",
              ],
            },
          },

          /*for CUSTOM  battery  for BSPI > Column Charts > Column with Data Labels*/
          battery_СhartOptions : {
            series: [{
              name: 'Заряд',
              data: [0, 16, 18, 19, 22, 24, 26, 25, 24, 16, 12, 26]
            }],
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },

            xaxis: {
              categories: [ "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan",],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }

            },
            title: {
              text: 'Заряд прибора на протяжении года',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          },
          /*for CUSTOM Stroked Gauge -- display battery charts*/
          analyticsDataRadialBarСhartOptions : {
            series: [27],
            chart: {
              height: 350,
              type: 'radialBar',
              offsetY: -10
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                  name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                  },
                  value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                      return val + "%";
                    }
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
              },
            },
            stroke: {
              dashArray: 4
            },
            labels: ['БСПИ 1908381'],
          },

          /*for CUSTOM BAR CHART*/
          chartOptions: {
            chart: {
              id: "basic-bar",
              animations: {
                speed: 200
              }
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              bar: {
                distributed: true
              }
            },
            xaxis: {

              categories: ["2020-12-21T00:00:00Z", "2020-12-25T01:30:00Z", "2021-01-02T02:30:00Z",
                "2021-01-07T03:30:00Z", "2021-01-12T04:30:00Z", "2021-01-17T05:30:00Z",
                "2021-01-21T06:30:00Z"
              ],
            }
          },
          series: [
            {
              name: "Имя 1908381 <br> состояние батареи",
              data: [ 20, 5, 23, 27, ]
            }
          ]
        }
    },
    methods: {
      updateTheme(e) {

        if (e.target.value === "poss0")  {

          this.battery_СhartOptions = {
            series: [{
              name: 'Inflation',
              data: [0, 25, 24, 16, 12, 26, 16, 18, 19, 22, 24, 26]
            }]
          };
          this.analyticsDataRadialBarСhartOptions = {
            series: [27],
            labels: ['БСПИ 1908381'],
          };
          this.apexChatData.radialBarChart.chartOptions = {
            series: [ 20, 5, 23, 27, ]
          };
          this.chartOptions = {
            series: [
              {
                name: "Имя 1908381 <br> состояние батареи",
                data: [ 20, 5, 23, 27, ]
              }
            ]
          }
        }
        else if (e.target.value === "poss1")  {
          this.battery_СhartOptions = {
            series: [{
              name: 'Inflation',
              data: [0, 25, 19, 22, 24, 26, 24, 16, 12, 26, 16, 18,]
            }]
          };
          this.analyticsDataRadialBarСhartOptions = {
            series: [23],
            labels: ['ИКЗ 1908378'],
          };
          this.apexChatData.radialBarChart.chartOptions = {
            series: [ 20, 5, 0, 23, ]
          };
          this.chartOptions = {
            series: [
              {
                name: "Имя 1908378 <br> состояние батареи",
                data: [ 20, 5, 0, 23, ]
              }
            ]
          }
        } else if (e.target.value === "poss2")  {
          this.battery_СhartOptions = {
            series: [{
              name: 'Inflation',
              data: [0, 15, 39, 52, 4, 16, 14, 46, 12, 26, 36, 8,]
            }]
          };
          this.analyticsDataRadialBarСhartOptions = {
            series: [16],
            labels: ['ИКЗ 1908379'],
          };
          this.apexChatData.radialBarChart.chartOptions = {
            series: [ 20, 5, 0, 16]
          };
         this.chartOptions = {
           series: [
             {
               name: "Имя 1908379 <br> состояние батареи",
               data: [ 20, 5, 0, 16]
             }
           ]
         }
       } else if (e.target.value === "poss3")  {
          this.battery_СhartOptions = {
            series: [{
              name: 'Inflation',
              data: [0, 15, 14, 46, 12, 26,39, 52, 4, 16, 36, 8,]
            }]
          };
          this.analyticsDataRadialBarСhartOptions = {
            series: [2],
            labels: ['ИКЗ 1908380'],
          };
          this.apexChatData.radialBarChart.chartOptions = {
            series: [ 0, 9, 10, 2, ]
          };
         this.chartOptions = {
           series: [
             {
               name: "Имя 1908380 <br> состояние батареи",
               data: [ 0, 9, 10, 2, ]
             }
           ]
         }
       }
        // this.chartOptions = {
        //   theme: {
        //     palette: e.target.value
        //   }
        // };
      }
    },
    components: {
        VueApexCharts,
        apexcharts: VueApexCharts
    },


}
</script>
