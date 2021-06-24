(function () {
	'use strict';
	var app = angular.module("myApp", []);
	app.controller("myController", function ($scope, $http) {
		$scope.orderPlan = {
			pickTaskItemLineLimitQty: 2,
			pickTaskOrderLimitQty: 2
		};
		$scope.groups = [
			{
				"name": "GROUP-1",
				"itemLines": [
					{
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721271,
						"orderId": "DN-523",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					},
					{
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721271,
						"orderId": "DN-523",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					},
					{
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721271,
						"orderId": "DN-523",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					},
					{
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721271,
						"orderId": "DN-523134",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					},
					{
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721272,
						"orderId": "DN-523134",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					}, {
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721273,
						"orderId": "DN-52313",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					}, {
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721274,
						"orderId": "DN-52313",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					}, {
						"orderPlanningId": "PLAN-41286",
						"pickStrategyId": 5721275,
						"orderId": "DN-52313",
						"titleId": "ORG-1",
						"itemSpecId": "ITEM-10",
						"unitId": "5dd269dd27e40c027b52802e",
						"lotNo": "",
						"locationId": "48208",
						"baseQty": 1,
						"qty": 1,
						"confId": "0",
						"shouldToCc": 0,
						"pickMode": "PARTIAL",
						"strategyType": "PICK",
						"pickType": "Piece Pick",
						"titleName": "LENOVO PC HK LIMITED",
						"itemSpecName": "1003005",
						"itemSpecDesc": "Intel P4 640 3.2/800/2/PC/775 #867290",
						"unitName": "EA",
						"baseUnitName": "EA",
						"itemWeight": 0,
						"weightUnit": "Pound",
						"properties": [],
						"virturalLocationGroupName": "E Zone 6",
						"virtualLocationGroupId": "5f47e2440669900009f5d531",
						"locationName": "A193",
						"location": {"id": "48208", "name": "A193", "type": "ZONE", "status": "USEABLE"},
						"shipToAddress": {
							"id": "ADDR-9603",
							"tags": ["ShipTo"],
							"organizationId": "ORG-11",
							"organizationName": "Lenovo US Fulfillment Center",
							"name": "FEDEX HOLD FOR PICKUP",
							"country": "US",
							"state": "CO",
							"city": "LEADVILLE",
							"zipCode": "80461",
							"address1": "601 HARRISON AVE",
							"contact": "Bob Griffin",
							"phone": "(999)999-9999",
							"email": "gallardo.neil@bcg.com",
							"storeNo": "US00000001"
						},
						"carrierId": "ORG-3",
						"shipMethod": "Small Parcel",
						"priority": 60,
						"isInternational": false,
						"isSingleQTY": true,
						"containBattery": false,
						"truckPickUp": "FedEx Air",
						"subOrderType": "D2",
						"consumerOrCommercial": "Commercial",
						"carrierName": "FedEx",
						"shipToAddressStr": "FEDEX HOLD FOR PICKUP - 601 HARRISON AVE, LEADVILLE, CO 80461 (US00000001), US"
					}],
				"pickWay": "Batch Order Pick",
				"checkedItemLines": [],
				"sequence": 0,
				"subGroups": [],
				"areTheSameOrder": false,
				"itemWeight": 0,
				"isPickToOrder": false,
				"pickToOrderIsDisabled": true
			}];
		// console.log($scope.groups);
		// groupsOrdersByItemitemLines($scope.groups, $scope.orderPlan.pickTaskOrderLimitQty, 'orderId');


		// groupsOrdersByItemitemLines($scope.groups, $scope.orderPlan.pickTaskItemLineLimitQty, 'itemSpecId');
		groupsItemByItemitemLines($scope.groups,$scope.orderPlan.pickTaskItemLineLimitQty);

		console.log($scope.groups);
		function groupsOrdersByItemitemLines(groupOrders, limitQty, groupBy){
			var orders = [];
			_.forEach(groupOrders, function (item) {
				var groupItems = _.groupBy(item.itemLines, groupBy);
				var groupItemskeys = _.keys(groupItems);
				if (groupItemskeys.length > limitQty) {
					var groupItemsLimit = _.chunk(_.values(groupItems), limitQty);
					_.forEach(groupItemsLimit, function (groupItem) {
						var order = angular.copy(item);
						order.itemLines = groupItem;
						orders = _.concat(orders, angular.copy(order));
					});
				} else {
					orders = _.concat(orders, angular.copy(item));
				}
			});
			_.forEach(orders, function (order) {
				order.itemLines = _.flattenDeep(order.itemLines)

			});
			$scope.groups =  orders;
		}


		function groupsItemByItemitemLines(groupOrders,limitQty) {
			var orders = [];
			_.forEach(groupOrders, function (item) {
				if(item.itemLines.length>limitQty){
					_.forEach(_.chunk(item.itemLines, limitQty),function (lists) {
						var order = angular.copy(item);
						order.itemLines = lists;
						orders = _.concat(orders, angular.copy(order));
					})
				}else {
					orders = _.concat(orders, item);
				}
			});
			$scope.groups = orders;
		}
		sortGroups();
		function  sortGroups(){
			_.forEach($scope.groups,function (group,index) {
				console.log(index);
				group.name='GROUP-'+(index+1)

			});
		}

		console.log($scope.groups);
	});


})();