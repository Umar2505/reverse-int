module.exports = function reverse(n) {
    var a, result = 0
    if(n>0) {
        while(n){
            a = n % 10 
            result = (result * 10) + a
            n = n/10|0
        }
    }else {
        var num=n*-1
        while(num) {
            a = num % 10 
            result = (result * 10) + a
            num = num/10|0
        }
    }
    return result
}
