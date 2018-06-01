var app = angular.module('removeitems', []);
//Simple Logic To Add Data To List And Delete Specific Item From List Using ng-repeat and ng-click
app.controller('RemoveItemController', function ($scope) {
    $scope.ItemDetails = []; //To Declare List
    $scope.showspan = false; // false is to hide the scope
    $scope.AddToList = function () {
        $scope.AlreadyExistsInList = false;
        if ($scope.ItemCode && $scope.ItemName && $scope.ItemDescription) // this condition is to not allow the empty or undefined or false or 0 in to the braces
        {
            if ($scope.ItemDetails.length>0)
            $scope.ItemDetails.forEach(function (item) { // To check whether the newly adding item is exists or not
                if (item.ItemCode.toLowerCase() == $scope.ItemCode.toLowerCase() && item.ItemName.toLowerCase() == $scope.ItemName.toLowerCase() && item.ItemDescription.toLowerCase() == $scope.ItemDescription.toLowerCase()) {
                    $scope.AlreadyExistsInList = true;
                }
            });

            if (!$scope.AlreadyExistsInList) { // If not added, then it should added to the list, otherwise it should go to else condition and show warning message
                    $scope.showspan = false;
                    $scope.ItemDetails.push({ ItemCode: $scope.ItemCode, ItemName: $scope.ItemName, ItemDescription: $scope.ItemDescription }); // this is used to push i.e., add the data in the list
                //to clear textboxes after add item to list
                    $scope.ItemCode = "";
                    $scope.ItemName = "";
                    $scope.ItemDescription = "";
                }
                else {
                    $scope.warningmsg = "This Record Is Already Exists";
                    $scope.showspan = true;
                }
            if (!$scope.ItemDetails.length)  // this condition is to insert first record when List ItemDetails Is Empty
            {
                $scope.ItemDetails.push({ ItemCode: $scope.ItemCode, ItemName: $scope.ItemName, ItemDescription: $scope.ItemDescription });
                //to clear textboxes after add item to list
                $scope.ItemCode = "";
                $scope.ItemName = "";
                $scope.ItemDescription = "";

            }
        }
        else
        {
            $scope.warningmsg = "Please Enter All Input TextBox Details";
            $scope.showspan = true;
        }
    }
    $scope.DeleteItem = function (item) {
        var index = $scope.ItemDetails.indexOf(item); //this is to read the index value of the list
        if (index != -1)
            $scope.ItemDetails.splice(index, 1); // splice is used to remove the given index value
                                                 // '1' is used to remove only 1 index value, if it is two , two index values will be removed from the specified index
    }
});