import {Parenthesis} from './Lex/Parenthesis'
import {Token} from './Lex/Token'

export enum TokenValue {
    Parenthesis = 1
}

export class Compiler {

    constructor() {
        // empty comment
    }

    private tokenizer(input: string[]) {

        // A `current` variable for tracking our position in the code like a cursor.
        let current = 0

        // And a `tokens` array for pushing our tokens to.
        let tokens: Token[] = []

        // We start by creating a `while` loop where we are setting up our `current`
        // variable to be incremented as much as we want `inside` the loop.
        //
        // We do this because we may want to increment `current` many times within a
        // single loop because our tokens can be any length.
        while (current < input.length) {

            // We're also going to store the `current` character in the `input`.
            let char = input[current]

            /**
             * The first thing we want to check for is an open parenthesis.
             * This will later be used for `CallExpressions` but for now we
             * only care about the character.
             * 
             * We check to see if we have an open parenthesis:
             */
            if (char === Parenthesis.value) {
                /**
                 * if we do, we push a new token with the type `paren` and set
                 * the value to an open parenthesis.
                 */
                tokens.push(Parenthesis)
            }

            current++

            continue


        }



    }
}
