

/* Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. */


const currentArray = [100, 200, 300, 400, 500];

const plusNumber = (a) => {
  return a + 10;
}

function map(fn, array) {
  let newArray = [];

  for(i = 0; i < array.length; i++) {
    newArray.push(fn(array[i]));
  }

  document.getElementById('one').innerHTML = newArray.join('. ');
  return newArray;
}

/* const one = document.getElementById('one');
one.innerHTML = map(plusNumber, currentArray).join('. '); */
map(plusNumber, currentArray);


//----------------------------------------------------------------------------------


/*  Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат. */

/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

checkAge(prompt('Ваш возраст?')); */





/* function checkAge(age) {
  return age >= 18 || confirm('Родители разрешили?');
}

checkAge(prompt('Ваш возраст?')); */


 function checkAge(age) {
  return(age >= 18) ? true : confirm('Родители разрешили?');
}

checkAge(prompt('Ваш возраст?'));
