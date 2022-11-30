

let firstName = prompt('What is your name?');
let surName = prompt('What is your surname?');
let age = prompt('How old are you?');

let numb1 = parseInt(prompt('number one'));
let numb2 = parseInt(prompt('number two'));
let numb3 = parseInt(prompt('number three'));
let result = (numb1 + numb2 + numb3) / 3;



document.write(`
  <table>
    <tbody>
      <tr>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td colspan="1" rowspan="2"></td>
        <td colspan="4" rowspan="2" class="main">
          <h4> ${'name: ' + firstName} </h4>
          <h4> ${'surname: ' + surName} </h4>
          <h4> ${'age: ' + age} </h4>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td colspan="5" class="footer">
        <h4> ${'average: ' + result} </h4>
        </td>
      </tr>
    </tbody>
  </table>
`);

