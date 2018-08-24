const team = 'http://localhost:3000/api/teams?GameId=123-789-1&PlayerId=123'
function moveAlice(x, y){
    return 'http://localhost:3000/api/teams/move?GameId=123-789-1&PlayerId=123&UnitId=Alice&Position='+x+','+y;
}

app.controller('Getter', ($scope, $http) =>{
    $scope.getTeam = function() {
        console.log('getting team');
        $http.get(team)
            .then(res => {
                var units = [];
                console.log(res.data[0]);
                for (var i = 0; i < res.data[0].Units.length; i++){
                    units.push(res.data[0].Units[i]);
                }
                $scope.team = units;
            });
    }

    $scope.moveAlice = function(x,y) {
        const query = moveAlice(x,y)
        $http.patch(query, '')
            .then(res => {
                console.log(res);
                $scope.getTeam();
            })
    }
});