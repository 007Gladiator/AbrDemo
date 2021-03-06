'use strict';

/**
 * @ngdoc function
 * @name abrdemo1App.controller:DetailsctrlCtrl
 * @description
 * # DetailsctrlCtrl
 * Controller of the abrdemo1App
 */
angular.module('abrdemo1App')
  .controller('DetailsCtrl', function ($scope, $http, $window) {
 $http.get('http://10.19.12.185:8080/ea-service/sectrdata?report_year=2015&report_type=M&region=Southeast&rvp_code=SC2&channel=Premise&branch_code=AS&data_field=hdl_amt&report_period=&cat_type=', {
          headers: {'Content-Type':'application/json'}})
                            .success(function(data) {
                              $scope.jsonData=data.data;
                              var data1=$scope.jsonData;
                              $scope.header=[];
                              $scope.data=[
                              {"report_year":"2015","sld_amt":"10","sld_obj":"50","sld_chg_obj_pct":"0.1"},
                              {"report_year":"2015","sld_amt":"10","sld_obj":"50","sld_chg_obj_pct":"0.1"}
                              ];
                              /*var len = data1.length;
                              if(len=1)
                              {
                                $scope.data.push(data1);
                              }*/
                              //console.log("length-"+len);
                              // geting all the keys for header.
                                var L = data1.length;
                                for (var i = 0; i < L; i++) {
                                    var obj = data1[i];
                                    for (var j in obj) {
                                        $scope.header.push(j);
                                    }
                                }
                                console.log($scope.header);

// prepare headers 
 $scope.headers = [
                { "order": 1, "width": 0, "label": "Report Year", "data": "report_year", "type": "string", "visible": true },
                { "order": 2, "width": 120, "label": "Sold", "data": "sld_amt", "type": "string", "visible": true },
                { "order": 3, "width": 129, "label": "Objective", "data": "sld_obj", "type": "string", "visible": true },
                { "order": 4, "width": 200, "label": "Diff", "data": "sld_chg_obj_pct", "type": "string", "visible": true }
            ];
            
            
   
  $scope.tdata=[
    ["2015","Midwest","rvp_code","SC2","SCA South","61725.76","54870.43","0.1249","6855.33","0","1","61725.76","9620.64","17794.02","-0.4593","-8173.38","6962.14","8212.62","-0.1523","-1250.48","22222.34","10019.04","1.218","12203.3","86606.6","74470.87","0.163","12135.73","0","1","86606.6","24880.84","19600.44","0.2694","5280.4","0","1","24880.84","0.3572","0.4031","0.163","0.046"]
   ,["2015","Southeast","rvp_code","SC2","SCA South","77627.42","95492.51","-0.1871","-17865.09","0","1","77627.42","15803.16","21972.33","-0.2808","-6169.17","9815.97","20980.46","-0.5321","-11164.49","23636.56","14761.41","0.6013","8875.15","107251.17","111245.79","-0.0359","-3994.62","0","1","107251.17","29623.75","15753.28","0.8805","13870.47","0","1","29623.75","0.165","0.3816","-0.0359","0.217"]
   ,["2015","Southwest","rvp_code","SC2","SCA South","93381.78","110504.93","-0.155","-17123.15","0","1","93381.78","16218.02","38472.42","-0.5784","-22254.4","42337.17","33172.67","0.2762","9164.5","30467.74","11909.43","1.5584","18558.31","97730.37","127714.11","-0.2348","-29983.74","0","1","97730.37","4348.59","17209.18","-0.7473","-12860.59","0","1","4348.59","0.1557","0.0466","-0.2348","-0.109"]
   ,["2015","West Coast","rvp_code","SC2","SCA South","21930.84","43687.86","-0.498","-21757.02","0","1","21930.84","-3976.8","5531.76","-1.7189","-9508.56","9936.67","23137.55","-0.5705","-13200.88","2852.71","11055.32","-0.7419","-8202.61","10870.08","37137.39","-0.7073","-26267.31","0","1","10870.08","-11060.76","-6550.47","-0.6887","-4510.29","0","-1","-11060.76","-0.1499","-0.5043","-0.7073","-0.354"]
  ]
  




          }).error(function(data){
                        $window.alert("Some Error occured!!")
                    });
  });
  
