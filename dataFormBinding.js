/**
 * Created by Matthieu on 22/12/2015.
 */

/**
 *  Initialise a new listener for a given object. Takes obj and attr
 *  as parameters. When the handleInput is called (when a change has occurred)
 *  it will update obj[attr] with the new value retrieved from the html element
 * @param obj       The object to fill
 * @param attr      The attribute of the object
 * @returns {function} event handle for addEventListener
 */
function initListener(obj, attr){
    return function (event){
        var src = event.target || event.srcElement;
        switch(src.localName.toLowerCase()){
            case 'input':
                switch(src.type){
                    case 'number':
                        var n = Number(src.value);
                        obj[attr] = n;
                        break;
                    case 'text' :
                    default:
                        obj[attr] = src.value;
                        break;
                }
                break;
            case 'select':
                obj[attr] = src[src.selectedIndex].value;
                break;
            default:
                console.log('Unknown element');
                console.log(event);
        }
    };
}

// select all bind-obj attributes
var form = document.querySelectorAll('[bind-obj]');

// for each of them, select all bind-val attributes
for(var i = 0; i < form.length; i++){
    // if the object to be bind with does not exist yet,
    // create an empty one
    var objName = form[i].getAttribute("bind-obj");
    if(!window[objName]){
        window[objName] = {};
    }

    var bindVal = form[i].querySelectorAll('[bind-val]');
    for(var j = 0; j < bindVal.length; j++){
        var objAttr = bindVal[j].getAttribute("bind-val");
        bindVal[j].addEventListener('change', initListener(window[objName], objAttr), false);
    }
}

