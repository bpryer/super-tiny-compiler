import {Token} from './Token'

export class Parenthesis implements Token {
    // token:
    public static type: string
    public static value: string

    constructor() {
        Parenthesis.type = 'paren'
        Parenthesis.value = '('
    }
}
