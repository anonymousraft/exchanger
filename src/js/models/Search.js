import axios from 'axios';
import * as appSettings from '../views/appSettings';

export default class Search{
    
    constructor(query)
    {
        this.query = query;
    }

    async getResults()
    {
        const apiRequest = `http://data.fixer.io/api/${appSettings.apiEndPoint}?access_key=${appSettings.apiKey}`;

        try{

            const result = await axios(apiRequest);
            this.apiData = result.data.rates;
            this.resultDate = result.data.date;
            this.resultTimeStamp = result.data.timestamp;
            this.base = result.data.base;

        } catch(error){
            alert(error);
        }
    }

    convert()
    {
        const baseUnitFrom = this.apiData[this.query.from];
        const baseUnitTo = this.apiData[this.query.to];

        const convertUnitFrom = this.unitPrice(baseUnitFrom, baseUnitTo).toFixed(2);
        const convertUnitTo = this.unitPrice(baseUnitTo, baseUnitFrom).toFixed(2);
        const convertResult = (convertUnitFrom * this.query.value).toFixed(2);
        
        this.result = {
            base: this.base,
            from: this.query.from,
            to: this.query.to,
            baseUnitFrom,
            baseUnitTo,
            convertUnitFrom,
            convertUnitTo,
            convertResult
        }
    }

    unitPrice(from, to)
    {
        return (to/from);
    }

}