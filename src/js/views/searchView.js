import { elements } from './base';

export const getFromInput = () => elements.inputFrom.value;
export const getToInput = () => elements.inputTo.value;

export const getFromList = () => elements.fromList.value;
export const getToList = () => elements.toList.value;


export const inputFromClear = () => {
    elements.inputFrom.value = '';
}

export const inputToClear = () => {
    elements.inputTo.value = '';
}

export const renderResult = (result,type) => {
    if(type === 'from')
    {
        //Text Box Update
        elements.inputTo.value = result.convertResult.toFixed(2);
        
        //Text Result Update
        elements.resultTo.textContent = `1 ${elements.fromList.options[elements.fromList.selectedIndex].text} equals`;
        elements.resultFrom.textContent = `${result.convertUnitFrom.toFixed(2)} ${elements.toList.options[elements.toList.selectedIndex].text}`;

        //Unit Result Update
        elements.unitPriceFrom.textContent = `1 ${result.from} = ${result.convertUnitFrom.toFixed(2)} ${result.to}`;
        elements.unitPriceTo.textContent = `1 ${result.to} = ${result.convertUnitTo.toFixed(2)} ${result.from}`;

        //Date update        
        const timeDate = dateTime(result.timestamp);
        elements.date.textContent = timeDate;

    }
    else{
        //Text Box updated
        elements.inputFrom.value = result.convertResult.toFixed(2);

        //Text Result Update
        elements.resultTo.textContent = `1 ${elements.toList.options[elements.toList.selectedIndex].text} equals`;
        elements.resultFrom.textContent = `${result.convertUnitFrom.toFixed(2)} ${elements.fromList.options[elements.fromList.selectedIndex].text}`;

        //Unit Result Update
        elements.unitPriceFrom.textContent = `1 ${result.from} = ${result.convertUnitFrom.toFixed(2)} ${result.to}`;
        elements.unitPriceTo.textContent = `1 ${result.to} = ${result.convertUnitTo.toFixed(2)} ${result.from}`;

    }
}

export const queryGenerate = type => {

    return type === 'from' ? {
        type: 'from',
        value: parseFloat(getFromInput()),
        from: getFromList(),
        to: getToList()
    } : {
            type: 'to',
            value: parseFloat(getToInput()),
            from: getToList(),
            to: getFromList()
        };
}

export const textResult = () => {
    elements.resultTo.textContent = '';
    elements.resultFrom.textContent = '';
    elements.date.textContent = '';
}

function dateTime(timestamp)
{
    const dateObject = new Date(timestamp*1000);
    const date = dateObject.toLocaleString("en-US",{
        weekday: 'short',
        month:'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'IST'  
    });

    return date;
}

export const unitPriceClear = () =>{
      elements.unitPriceFrom.textContent = '';
      elements.unitPriceTo.textContent = '';  
}