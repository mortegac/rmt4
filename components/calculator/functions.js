export const roundNumber = (number, precision)=>{
  /** Only receive number with . as decimal separator
   * Example: 10.2456
   */
  try {
      const multi = Math.pow(10, precision);
      return Math.round( (number * multi).toFixed(precision + 1) ) / multi;    

  } catch (error) {
      return 0;
  }
}


export const validateDecimal = (number, type=null) => {
    
    
    const numDecimal = parseFloat(number).toFixed(2).toLocaleString()
    let newNumDecimal =0;
    
    if (type==='rate'){
      const lengthNumber = numDecimal.length;
      const existDot = numDecimal.includes('.');
      const existComma = numDecimal.includes(',');
      const validate = (existDot || existComma);

      if(lengthNumber >= 6){

        newNumDecimal = (validate ? numDecimal.substring(0,7):numDecimal.substring(0,6) );

      }else{
        const difference = validate ? (7 - lengthNumber):(6 - lengthNumber);
        return `${totalZeros(difference)}${numDecimal}`;
      }

      return isNaN(newNumDecimal) ? 0:newNumDecimal;

    }
    if (type==='amountFrom'){
      return isNaN(number) ? 0: number.toFixed(2).toLocaleString();
    }

    return isNaN(numDecimal) ? 0: numDecimal;
  
}

export const totalZeros = (num)=>{
    let calculate = '';
    let i = 0;
    while (i < num){
      calculate = calculate + '0';
      i++;
    }
    return calculate;
}

export const evaluateStatus = (loading={})=> loading.module === "CALCULATOR-CALCULATE" ? loading.fetching : false;




export const isValidForSend = (objValidate)=>{
  try {
    const max = parseFloat(objValidate.maximum);
    const min = parseFloat(objValidate.minimum);

  } catch (error) {
    
  }

}
export const validateSenTo = (objValidate)=>{

  const max = parseFloat(objValidate.maximum);
  const min = parseFloat(objValidate.minimum);
  
  const isNumber = typeof valueSanitize == 'number'? true:false;
    const valueClean = objValidate.value;
    const isValid = (valueClean <= max 
                  && 
                  valueClean >= min)
                || false;

  return isValid;

}