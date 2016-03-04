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
                              // geting all the keys for header.
                                var L = data1.length;
                                for (var i = 0; i < L; i++) {
                                    var obj = data1[i];
                                    for (var j in obj) {
                                        $scope.header.push(j);
                                    }
                                }
                                console.log($scope.header);
                                
        $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
         
// prepare headers 
// $scope.headers = [
//                { "order": 1, "width": 0, "label": "Region", "data": "region", "type": "string", "visible": false },
//                { "order": 2, "width": 120, "label": "Sold", "data": "sld_amt", "type": "string", "visible": true },
//                { "order": 3, "width": 129, "label": "Objective", "data": "sld_obj", "type": "string", "visible": true },
//                { "order": 4, "width": 200, "label": "Diff", "data": "sld_chg_obj_pct", "type": "integer", "visible": true }
//            ];
  $scope.data2=[{"region":"Southeast","Sold":"6752.38","Objective":"10682.86","Diff":"-3930.48","NetSVC":"3","YOYNet":"5768","color":"green"},
                {"region":"Southwest","Sold":"6962.14","Objective":"8212.62","Diff":"-1250.48","NetSVC":"-5.3","YOYNet":"-3760","color":"red"},
                {"region":"Midwest","Sold":"17794.02","Objective":"9620.64","Diff":"8173.38","NetSVC":"4.2","YOYNet":"7869","color":"green"},
                {"region":"West Coast","Sold":"22222.34","Objective":"10019.04","Diff":"12203.3","NetSVC":"-1.3","YOYNet":"-1449","color":"red"}             ];
  $scope.gridOptions = { 
        data: $scope.data2,
        
        columnDefs: [
				{field:'Region', displayName:'Region'},
				{field:'Sold', displayName:'Sold'},
				{field:'Objective', displayName:'Objective'},        
        {field:'Diff',displayName:'Diff',type:'num'},
        {field:'NetSVC'},
        {field:'YOYNet'},
        
      ]};

 //cellTemplate: '<div ng-class="{green: row.getProperty(col.field) > 0}"><div class="ngCellText">{{row.getProperty(col.field)}}</div></div>'
          }).error(function(data){
                        $window.alert("Some Error occured!!")
                    });
  });
  
