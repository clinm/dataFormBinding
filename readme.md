# Data Form Binding
Data form binding is a simple data binding between a HTML form and an javascript object. The binding is only in one way: From HTML to Javascript. 
It uses 'onChange' listener to update the object. 

This project is a mean for me to discover more about data binding used in framework such as angularJS and to learn more about DOM and forms. 
I've decided not to implemented the two-way binding as it usually uses microTask to update value for background compatibilities as the 
[Object.observer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe)
 is not [implemented yet](http://caniuse.com/#search=Object.observe).
# Behaviour
- input 
    * number: cast the input in an integer and update value
    * text: update value
    * checkbox: inject boolean
    * others: handled as text
- select
    * update value with the key
- others
    * not handled yet
        
# Usage
## Keywords
There are two keywords in order to use this library:

- **bind-obj**  has to be in the container of all bind-val, the value of this attributes will be the name of the object to fill
- **bind-val**  has to be on each input (select ..) and the value will be the name of the attribute updated in the current bind-obj

## bind-val

| value for bind-val    | Object equivalent     |
| -----------------     | -----------------     |
| people.name           | people.name           |
| people.country.name   | people.country.name   |
| people.dog.0.name     | people.dog[0].name    |

## Basic usage

```html
<form bind-obj="myObject">
    <input type="text" bind-val="name">
</form>       
```

# Example
One example is available on index.html. You can fill the forms and then click on 'display values' to discover the data recovered. 
This example is very basic and is a mean to show all available features.

# Tests
First run **npm install** and then go on basicTest.html

# Incoming features
- [X] Automatic tests
- [X] Handling default data (when the object is already filled with values we want to inject in the form)
- [ ] Handling all type of data (date, datetime etc)