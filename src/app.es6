import {login} from './login';

login();

document.querySelector('#text').innerHTML = 'Some text......';
demo('hello');

function demo(string) {
    console.log(string);
}