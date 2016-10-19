# Function-events-extension

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
```json
{
  "name": "eventName",
  "args": [arg1, arg2, ..., argN]
}
```
