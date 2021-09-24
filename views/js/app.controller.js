var app = angular.module("myApp", ["datatables"]);

const url = window.location.href;

app.controller(
  "ctrlGetData",
  function (
    $scope,
    DTOptionsBuilder,
    DTColumnBuilder,
    DTColumnDefBuilder,
    $http
  ) {
    $scope.vm = {};
    $scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(2).notSortable()];
    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
      .withOption("paging", false)
      .withOption("searching", false)
      .withOption("info", false)
      .withOption("scrollY", "500px")
      .withOption("scrollCollapse", true)
      // .withOption('pageLength', 10)
      .withOption("lengthChange", true);

    $scope.getData1 = function () {
      $http.get(`${url}car`).then(function (response) {
        $scope.data = response.data.data.result;
      });
    };

    $scope.getData1();
  }
);

app.controller("ctrlClear", function ($scope, $window) {
  $scope.Clear = function () {
    $window.location.reload();
  };
});

app.controller("ctrlInbound", function ($scope, $http, $window) {
  $scope.Inbound = function () {
    $http.get(`${url}car/inbound`).then(function (result) {
      console.log(result.data.data);
    });
    $window.location.reload();
  };
});

app.controller("ctrlOutbound", function ($scope, $http, $window) {
  $scope.Outbound = function () {
    $http.get(`${url}car/outbound`).then(function (result) {
      console.log(result.data.data);
    });
    $window.location.reload();
  };
});