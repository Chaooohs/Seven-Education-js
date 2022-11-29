

let y = 0;
let x = 0;
let st = '*';
let sp = '&nbsp;' + '&nbsp;';


// - Прямокутник

for (y = 0; y < 10; y++) {
    star: for (x = 0; x < 30; x++) {
        document.write(st);

        if (y > 0 && y < 9) {
            break star;
        }
    }

    if (y > 0 && y < 9) {
        for (x = 0; x < 28; x++) {
            document.write(sp);
        }
        document.write(st);
    }
    document.write('<br>');
}

document.write('<hr>');


// - Трикутник прямокутний

for (y = 0; y < 10; y++) {
    for (x = y + 1; x > 0; x--) {
        document.write(st);
    }
    document.write('<br>');
}

document.write('<hr>');


// - Рівнобедрений трикутник

for (y = 0; y < 10; y++) {
    for (x = y + 1; x < 10; x++) {
        document.write(sp);
    }
    for (x = y + 1; x > 0; x--) {
        document.write(st);
    }
    for (x = y; x > 0; x--) {
        document.write(st);
    }
    for (x = y + 1; x < 10; x++) {
        document.write(sp);
    }
    document.write('<br>');
}

document.write('<hr>');


// - Ромб

for (y = 0; y < 10; y++) {
    for (x = y + 1; x < 10; x++) {
        document.write(sp);
    }
    for (x = y + 1; x > 0; x--) {
        document.write(st);
    }
    for (x = y; x > 0; x--) {
        document.write(st);
    }
    for (x = y + 1; x < 10; x++) {
        document.write(sp);
    }
    document.write('<br>');
}
for (y = 0; y < 10; y++) {
    for (x = y + 1; x > 0; x--) {
        document.write(sp);
    }
    for (x = y + 1; x < 10; x++) {
        document.write(st);
    }
    for (x = y + 1; x < 9; x++) {
        document.write(st);
    }
    for (x = y + 1; x > 0; x--) {
        document.write(sp);
    }
    document.write('<br>');
}

document.write('<hr>');


// - Прямокутник

for (y = 0; y < 10; y++) {
    if (y === 0 || y === 9) {
      for (x = 0; x < 29; x++) {
        document.write(st);
      }
    }
    else {
      for (x = 0; x < 1; x++) {
        document.write(st);
      }
      for (x = 0; x < 28; x++) {
        document.write(sp);
      }
    }
    document.write(st + '<br>');
  }

