function infixToPostfix(expr) {
    let string = "";
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
        switch (expr[i]) {
            case '+':
            case '-':
            case '*':
            case '/': {
                while (stack.length > 0 && (getPriority(expr[i]) <= getPriority(peek(stack)))) {
                    if (peek(stack) !== '(')
                        string += stack.pop() + ' ';
                }
                stack.push(expr[i]);
                break;
            }
            case '(': {
                stack.push(expr[i]);
                break;
            }
            case ')': {
                while (peek(stack) !== '(') {
                    string += stack.pop() + ' ';
                }
                break;
            }
            default: {
                string += expr[i] + ' ';
                break;
            }
        }
    }
    while (stack.length > 0) {
        if (peek(stack) !== '(' || peek(stack) !== ')') {
            string += stack.pop() + ' ';
        }
        stack.pop();
    }
    return string;
}

function calculating(expr) {
    let result = 0;
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
        if (parseInt(expr[i])) {
            stack.push(parseInt(expr[i]));
            continue;
        }
        if (isOperator(expr[i])) {
            let a = stack.pop();
            let b = stack.pop();
            switch (expr[i]) {
                case '+':
                    result = b + a;
                    break;
                case '-':
                    result = b - a;
                    break;
                case '*':
                    result = b * a;
                    break;
                case '/':
                    result = b / a;
                    break;
            }
            stack.push(result);
        }
    }
    return stack.pop();
}

function removeDuplicates(str, c) {
    let i = str.indexOf(c);
    if (i !== -1) {
        str.splice(i, 1);
        removeDuplicates(str, c);
    }
}

function peek(stack) {
    return stack.slice(-1)[0];
}

function isOperator(token) {
    return ['+', '-', '*', '/'].includes(token);
}

function isValid(array) {
    let v = false;
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i])) {
            v = true;
        } else {
            v = false;
        }
    }
    return v;
}

function getPriority(s) {
    switch (s) {
        case ')':
            return 0;
        case '(':
            return 1;
        case '+':
        case '-':
            return 2;
        case '*':
        case '/':
            return 3;
        default:
            return -1;
    }
}

document.querySelector('#submit').onclick = () => {
    let string = document.querySelector('#inputText').value;
    let arr = string.replace(/\s/g, '').split(/([0-9]+|[*+-\/()])/);
    if (isValid(arr)) {
        removeDuplicates(arr, '');
        document.querySelector('#expression').innerHTML = string;
        document.querySelector('#resultNumber').innerHTML = calculating(infixToPostfix(arr));
    } else {
        let errMessage = "Invalid input!";
        document.querySelector('#expression').innerHTML = string;
        document.querySelector('#resultNumber').innerHTML = errMessage;
    }
};