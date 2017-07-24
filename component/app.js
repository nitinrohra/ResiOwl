angular.module("Resiowl",[])
.controller('formctrl',formctrl)
function formctrl(){
    var ctrl=this;
    ctrl.submit=function(sform){
    console.log(sform);
}
}