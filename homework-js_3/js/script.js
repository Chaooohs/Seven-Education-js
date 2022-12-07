

// 01_Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.

let abc = "01_Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.";
document.write(abc + '<br/>');
document.write('<br/>');

let firstArray = ['a', 'b', 'c'];
let secondArray = [1, 2, 3];

document.write('firstArray = ' + firstArray.join(' ') + '<br/>');
document.write('secondArray = ' + secondArray.join(' ') + '<br/>');

let sumArray = firstArray.concat(secondArray);

document.write('sumArray = ' + sumArray.join(' '));

document.write('<hr/>');



// 02_Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.

abc = "02_Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.";
document.write(abc + '<br/>');
document.write('<br/>');

firstArray.push(1);
firstArray.push(2);
firstArray.push(3);

document.write('firstArray = ' + firstArray.join(' '));
document.write('<hr/>');



// 03_Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].

abc = "03_Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].";
document.write(abc + '<br/>');
document.write('<br/>');

secondArray.reverse();

document.write('secondArray = ' + secondArray.join(' '));
document.write('<hr/>');



// 04_Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.

abc = "04_Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.";
document.write(abc + '<br/>');
document.write('<br/>');

secondArray = [1, 2, 3];

secondArray.push(4);
secondArray.push(5);
secondArray.push(6);

document.write('secondArray = ' + secondArray.join(' '));
document.write('<hr/>');



// 05_Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.

abc = "05_Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.";
document.write(abc + '<br/>');
document.write('<br/>');

firstArray = [1, 2, 3];

firstArray.unshift(6);
firstArray.unshift(5);
firstArray.unshift(4);

document.write('firstArray = ' + firstArray.join(' '));
document.write('<hr/>');



// 06_Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.

abc = "06_Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.";
document.write(abc + '<br/>');
document.write('<br/>');

firstArray = ['js', 'css', 'jq'];

document.write(firstArray[0]);
document.write('<hr/>');



// 07_Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].

abc = "07_Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].";
document.write(abc + '<br/>');
document.write('<br/>');

firstArray = [1, 2, 3, 4, 5];

secondArraySlice = firstArray.slice(0, 3);

document.write(secondArraySlice.join(' '));
document.write('<hr/>');



// 08_Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].

abc = "08_Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].";
document.write(abc + '<br/>');
document.write('<br/>');

secondArray = [1, 2, 3, 4, 5];

secondArray.splice(1, 2);

document.write(secondArray.join(' '));
document.write('<hr/>');



// 09_Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].

abc = "09_Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].";
document.write(abc + '<p/>');

secondArray = [1, 2, 3, 4, 5];

secondArray.splice(2, 0, 10)

document.write(secondArray.join(' '));
document.write('<hr/>');



// 10_Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.

abc = "10_Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.";
document.write(abc + '<p/>');

secondArray = [3, 4, 1, 2, 7];

secondArray.sort();

document.write(secondArray.join(' '));
document.write('<hr/>');



// 11_Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'.

abc = "11_Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'.";
document.write(abc + '<p/>');

firstArray = ['Привіт, ', 'світ', '!'];

document.write(firstArray.join(' ') + '<p/>');

let first = firstArray;
let last = first.pop();

document.write(first.join(' ') + last);
document.write('<hr/>');



// 12_Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, '

abc = "12_Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, '";
document.write(abc + '<p/>');

first[0] = ('Поки, ');

document.write(first.join(' ') + last + '<p/>');

firstArray.splice(0, 1, "Поки,");

document.write(firstArray.join(' ') + last);
document.write('<hr/>');



// 13_Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.

abc = "13_Створiть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.";
document.write(abc + '<p/>');

let arr = new Array(1, 2, 3, 4, 5);

document.write(arr.join(' ') + '<p/>');

let Arr = [1, 2, 3, 4, 5]

document.write(Arr.join(' '));
document.write('<hr/>');



// 14_Дан багатовимірний масив arr. Виведіть за його допомогою слово 'блакитний' 'blue'.

abc = "14_Дан багатовимірний масив arr. Виведіть за його допомогою слово 'блакитний' 'blue'.";
document.write(abc + '<p/>');

arr = [
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green']
];

document.write(arr[0][0] + '<p/>');
document.write(arr[1][0]);
document.write('<hr/>');



// 15_Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.

abc = "15_Створiть масив arr = ['a', 'b', 'c', 'd'] i за допомогою його виведіть на екран рядок 'a+b, c+d'.";
document.write(abc + '<p/>');

arr = ['a', 'b', 'c', 'd'];

document.write(arr.splice(0, 2).join(' + ') + '<p/>');
document.write(arr.slice().join(' + ') + '<p/>');
document.write('<hr/>');



/* 16_Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.*/

abc = "16_Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.";
document.write(abc + '<p/>');

let user = prompt('Введіть кількість елементів масиву');
arr = [];

for (let i = 1; i <= user; i++) {
    arr.push(i);
};

document.write(arr.join(' ') + '<p/>');
document.write('<hr/>');



// 17_Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.

abc = "17_Зробiть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.";
document.write(abc + '<p/>');

for (let i = 1; i <= user; i++) {
    arr.push(i);

    if (i % 2 === 0) {
        document.write( `<span style="color:red;"> ${i} </span>` );
      } else { (i % 2 !== 0)
        document.write( `<p> ${i} </p>` );
      }
};

document.write('<hr/>');



// 18_Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.

abc = "18_Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.";
document.write(abc + '<p/>');

let vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];

document.write(vegetables.join(', '));
document.write('<hr/>');