angular.module("Resiowl",[])
.controller('formctrl',formctrl)
function formctrl(){
    
    var ctrl=this;
    ctrl.logstatus=true;
    ctrl.submit=function(sform){
    console.log(sform);
}
    ctrl.statuschange=function(){
        ctrl.logstatus=!ctrl.logstatus;
        console.log(ctrl.logstatus);
    }
}