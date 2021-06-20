function convertFahrToCelsius(fah){
   if (typeCheck(fah) === 'object'){
       return ` {${fah}} is not a valid number but an object`
   } else if (typeCheck(fah) === 'array'){
    return `[${fah}] is not a valid number but an array`
   } else if (!isInteger(fah)){
    return `" ${fah} " is not a valid number`
   }else { 
       return ((fah  - 32) * (5/9))
   }
}

function isInteger(val){
    return /^\d+$/.test(val)
}

function typeCheck(value) {
    const return_value = Object.prototype.toString.call(value);
    // we can also use regex to do this...
    const type = return_value.substring(
             return_value.indexOf(" ") + 1, 
             return_value.indexOf("]"));
  
    return type.toLowerCase();
  }

  function checkYuGiOh(n){
      let result = []
      for (let i = 1; i <= n; i++){
          switch(i){
              case 2:
                  i = "yu"
                  result.push(i)
             case 3:
                 i = 'gi'
                 result.push(i)

                case 5: 
                i = 'oh'
                result.push(i)
                case 6:
                case 7: 
                case 8:
                case 9: 
                    i = 7;
                    result.push(i)
                case 10:
                    i = 'yu-oh'
                    result.push(i)
                    case "fizzbuzz is meh":
                        return `invalid parameter: fizzbuzz is meh`
               
                default:
                    result.push(i)
          }
      }
      return result;
  }
  
  
