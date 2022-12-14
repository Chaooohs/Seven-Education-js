

var x = 6;
var y = 14;
var z = 4;
var res;

res = x += y - x++ * z;
document.write('x += y - x++ * z = '  + res + '<br />');

/*
1. x++ постфиксный инкремент приоритет (16) = 6
2. z * x++ умножение (13) = 24
3. y - (z * x++) вычитание (12) = -10
4. x += y - (z * x++) присваивание (2) = -4
*/



var x = 6;
var y = 14;
var z = 4;
var res;

res = z = --x - y * 5
document.write('z = --x - y * 5 = ' + res + '<br />');

/*
1. --x префиксный декремент (15) = 5
2. y * 5 умножение (13) = 70
3. --x - (y * 5) вычитание (12) = -65
4. z = --x - (y * 5) присваивание (2) = -65
*/



var x = 6;
var y = 14;
var z = 4;
var res;

res = y /= x + 5% z
document.write('y /= x + 5% z = ' + res + '<br />');

/*
1. 5% z остаток от деления (13) = 1
2. x + (5% z) сложение (12) = 7
3. y /= x + (5% z) присваивание (2) = 2
*/



var x = 6;
var y = 14;
var z = 4;
var res;

res = z - x++ + y * 5
document.write('z - x++ + y * 5 = ' + res + '<br />');

/*
1. x++ постфиксный инкремент приоритет (16) = 6
2. y * 5 умножение (13) = 70
3. z - x++ вычитание (12) слева на право = -2
4. (z - x++) + (y * 5) сложение (12) слева на право = 68
*/


var x = 6;
var y = 14;
var z = 4;
var res;

res = x = y - x++ * z
document.write('x = y - x++ * z = ' + res + '<br />')

/*
1. x++ * z  умножение (13) = 24
2. y - (x++ * z) вычитание (12) = -10
3. x = y - (x++ * z) присваивание (2) = -10
*/