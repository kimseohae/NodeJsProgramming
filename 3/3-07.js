// 절대값을 구하는 메서드입니다.
exports.abs = function (number) {
    if(0 < number){
        return number;
    } else {
        return -number;
    }
}

exports.circleArea = function(radius) {
    return radius * radius * Math.PI;
}