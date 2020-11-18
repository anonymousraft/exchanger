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
        elements.inputTo.value = result.convertResult;
        
        //Text Result Update
        elements.resultTo.textContent = `1 ${elements.fromList.options[elements.fromList.selectedIndex].text} equals`;
        elements.resultFrom.textContent = `${result.convertUnitFrom} ${elements.toList.options[elements.toList.selectedIndex].text}`;

        //Unit Result Update
        elements.unitPriceFrom.textContent = `1 ${result.from} = ${result.convertUnitFrom} ${result.to}`;
        elements.unitPriceTo.textContent = `1 ${result.to} = ${result.convertUnitTo} ${result.from}`;

    }
    else{
        //Text Box updated
        elements.inputFrom.value = result.convertResult;

        //Text Result Update
        elements.resultTo.textContent = `1 ${elements.toList.options[elements.toList.selectedIndex].text} equals`;
        elements.resultFrom.textContent = `${result.convertUnitFrom} ${elements.fromList.options[elements.fromList.selectedIndex].text}`;

        //Unit Result Update
        elements.unitPriceFrom.textContent = `1 ${result.from} = ${result.convertUnitFrom} ${result.to}`;
        elements.unitPriceTo.textContent = `1 ${result.to} = ${result.convertUnitTo} ${result.from}`;

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
}