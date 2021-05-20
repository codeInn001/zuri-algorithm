function convertFahrToCelsius(fahr) {

    if(Array.isArray(fahr)) {
        console.log('['+fahr +']' +   ' is not a valid number but is a/an array.')
    }

    else if(fahr === "" || fahr === undefined || fahr === null || fahr === false || fahr === true) {
        console.log('Parameter can not be an empty string or a boolean')
    }

    else if(typeof fahr === 'object') {
        let entries = Object.entries(fahr)
        let [key, value] = entries[0]
        console.log(`{"${key}":${value}} is not a valid number but is a/an object`)
    }

    else if(typeof fahr === 'number' || fahr == Number(fahr)) {
        let celsius = (fahr - 32) * 5/9;
        console.log(celsius.toFixed("4") + ' deg fahrenheit')
   }

   else if(typeof fahr === 'string') {
    console.log(`${fahr} is not a valid number but a ${typeof fahr}`)
}

else {
    console.log(undefined);
}
   
}

convertFahrToCelsius([2,3])


function checkYuGiOh(number) {
    if(number != Number(number)) {
        console.log(`invalid parameter: ${number}`)
        return;
    }

    let array = []
    let array2 = []
    for(let i = 1; i <= number; i++) {
         array.push(i)
         array2.push(i)
    }


    array2.forEach(n => {

        if(n % 2 === 0) {

            let position = array2.indexOf(n)
            array[position] = 'yu'

               if(n % 3 === 0) {
                let position = array2.indexOf(n)
    
                    if(typeof array[position] === 'string'){
                    array[position] += '-gi'
                    }
        
                    
                     if(n % 5 === 0) {
                        let position = array2.indexOf(n)
        
                            if(typeof array[position] === 'string'){
                                array[position] += '-oh'
                            }
                            
                    }
            }

               else if(n % 5 === 0) {
                let position = array2.indexOf(n)

                    if(typeof array[position] === 'string'){
                        array[position] += '-oh'
                    }

            }
        }

        else if(n % 3 === 0) {
            let position = array2.indexOf(n) 
                array[position] = 'gi'

                if(n % 5 === 0) {
                    let position = array2.indexOf(n)
    
                        if(typeof array[position] === 'string'){
                            array[position] += '-oh'
                        }
    
                }
            }

        else if(n % 5 === 0) {
                let position = array2.indexOf(n) 
                    array[position] = 'oh'
                }
            
        
    
    })

    console.log(array)
}

checkYuGiOh("going home")
