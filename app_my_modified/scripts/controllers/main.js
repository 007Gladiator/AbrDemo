'use strict';

/**
 * @ngdoc function
 * @name abrdemo1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abrdemo1App
 */
// Apply the grey theme
Highcharts.setOptions({
   colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      borderRadius: 15,
      plotBackgroundColor: null,
      plotShadow: false,
      plotBorderWidth: 0,
   },
   title: {
      style: {
         color: '#FFF',
         font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
      }
   },
   subtitle: {
      style: {
         color: '#DDD',
         font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
      }
   },
   xAxis: {
      gridLineWidth: 0,
      lineColor: '#999',
      tickColor: '#999',
      labels: {
         style: {
            color: '#999',
            fontWeight: 'bold'
         }
      },
      title: {
         style: {
            color: '#AAA',
            font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
         }            
      }
   },
   yAxis: {
      alternateGridColor: null,
      minorTickInterval: null,
      gridLineColor: 'rgba(255, 255, 255, .1)',
      lineWidth: 0,
      tickWidth: 0,
      labels: {
         style: {
            color: '#999',
            fontWeight: 'bold'
         }
      },
      title: {
         style: {
            color: '#AAA',
            font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
         }            
      }
   },
   legend: {
      itemStyle: {
         color: '#CCC'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#333'
      }
   },
   credits: {
      style: {
         right: '50px'
      }
   },
   labels: {
      style: {
         color: '#CCC'
      }
   },
   tooltip: {
      backgroundColor: {
         linearGradient: [0, 0, 0, 50],
         stops: [
            [0, 'rgba(96, 96, 96, .8)'],
            [1, 'rgba(16, 16, 16, .8)']
         ]
      },
      borderWidth: 0,
      style: {
         color: '#FFF'
      }
   },
   plotOptions: {
      line: {
         dataLabels: {
            color: '#CCC'
         },
         marker: {
            lineColor: '#333'
         }
      },
      spline: {
         marker: {
            lineColor: '#333'
         }
      },
      scatter: {
         marker: {
            lineColor: '#333'
         }
      }
   },
angular.module('abrdemo1App').controller('MainCtrl', 
	function ($scope, $http, $window) {
		
		$http.get('http://10.19.12.185:8080/ea-service/sectyoy?report_year=2015&report_type=M&region=Southeast&rvp_code=SC2&channel=Premise&branch_code=AS&data_field=hdl_amt', {
					headers: {'Content-Type':'application/json'}})
                            .success(function(data) {
							$scope.jsonData=data.data;
              $scope.prev_kpi_date = [];
              $scope.prev_kpi_date_lbl = [];
							$scope.prev_kpi_lbl = [];
							$scope.prev_kpi_val = [];
							$scope.kpi_date = [];
							$scope.kpi_lbl = [];
							$scope.kpi_val = [];
                            var seriesData;
                            for(var value in $scope.jsonData)
                            {
								$scope.prev_kpi_date[value]=$scope.jsonData[value].prev_kpi_date;
                                $scope.prev_kpi_date_lbl[value]=$scope.jsonData[value].prev_kpi_date_lbl;
							    $scope.prev_kpi_lbl[value]=$scope.jsonData[value].prev_kpi_lbl;
							    $scope.prev_kpi_val[value]=$scope.jsonData[value].prev_kpi_val;
							    $scope.kpi_date[value]=$scope.jsonData[value].kpi_date;
							    $scope.kpi_lbl[value]=$scope.jsonData[value].kpi_lbl;
							    $scope.kpi_val[value]=$scope.jsonData[value].kpi_val;
                                //$scope.cat[value]=$scope.jsonData[value].departmentName;
                                //$scope.ser[value]=$scope.jsonData[value].noOfEmployees;
                            }
                            //cat1=$scope.cat;
							console.log("categories >>>"+$scope.prev_kpi_date_lbl);
                            console.log("categories >>>"+$scope.prev_kpi_val);
							console.log("categories >>>"+$scope.kpi_val);
					        //console.log("series >>>"+$scope.ser); 
                            updateChart();
					}).error(function(data){
                        $window.alert("Some Error occured!!")
                    });
					
					function updateChart()
					{
						$scope.highchartsNG.series.push({name:'2014', data:$scope.prev_kpi_val})
					    $scope.highchartsNG.series.push({name:'2015', data:$scope.kpi_val})
						$scope.highchartsNG.xAxis.categories=$scope.prev_kpi_date_lbl
						$scope.highchartsNG.yAxis.title.text='Amount (in $)'
						$scope.highchartsNG.title.text='ABR YOY'
						$scope.highchartsNG.yAxis.title.text='Amount (in $)'
					}
		$scope.highchartsNG = {
        options: {
            chart: {
                type: 'column'
            }
        },
		title:{text:''},
		yAxis: {title:{text:''}},
		xAxis:{
			categories:[]
		},
        series: [],
        loading: false
    }
  });
