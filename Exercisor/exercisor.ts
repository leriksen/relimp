import Validator from '../Validator/validator';

export default class Exercisor {
    public exercise(validator: Validator): string {
        return validator.validate('payload').toString();
    }
}