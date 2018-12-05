import Exercisor from './Exercisor/exercisor';
import Validator from './Validator/validator';

const exercisor = new Exercisor();
const validator = new Validator();

console.log(exercisor.exercise(validator));
