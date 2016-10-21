<img src="https://travis-ci.org/Alcadur/Function-events-extension.svg?branch=master">

# Function-events-extension
Extension for `Function` prototype to be able to handle events.

Example: https://plnkr.co/edit/vNpMhjjp9rxM8UN7majW

## How to use
You can use `npm i function-events-extension` to install it as dependencie and
in youre main file `require('function-events-extension')`

or

download build version `build/Function.events.min.js` and 
add it as normal script.

## Add listener for event
```javascript
function closeModalEventHandler(event) {
  document.querySelector('#modalWindow').css.display = 'none';
}

closeModalEventHandler.addEventListener('closeModalWindow')
```

## Dispatch event
Standard event dispatch
```javascript
Function.dispatch('closeModalWindow');
```

with custom arguments
```javascript
Function.dispatch('closeModalWindow', 12, 'size');
```

## Remove event listener
```javascript
closeModalEventHandler.removeEventListener('closeModalWindow');
```

## Event object
Each handler take one argument, `eventObject`.
`eventObject` contain event name and custom arguments.
```javascript
{
  "name": "eventName",
  "args": [arg1, arg2, ..., argN]
}
```
