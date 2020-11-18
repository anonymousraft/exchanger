import '../sass/main.scss';

/**
 * JavaScript Files Import
 */

import { elements } from './views/base';
import Search from './models/Search';
import * as searchView from './views/searchView';

console.log(elements);

/**
 * Global State of the App
 * All values at a current time
 */
const state = {};

/**
 * Search Controller
 */
const searchController = async (type) => {

    //1. Get the input value from the view
    state.query = searchView.queryGenerate(type);
    
    
    if (state.query.value)
    {
        console.log(state.query.value);
        //2. New search object and add to state
        
        state.search = new Search(state.query);

        //3. Prepare UI
        if(type === 'from')
        {
            searchView.inputToClear();
        }
        else{
            searchView.inputFromClear();
        }

        //4. Get Currency Data From API
        try{

            await state.search.getResults();
            console.log(state.search);

            //5. Convert
            state.search.convert();
    
            //6. Print Result to UI
            searchView.renderResult(state.search.result, type);



        }catch(error)
        {
            alert(error);
        }
        
    }else{
        searchView.inputToClear();
        searchView.inputFromClear();
        searchView.textResult();
    }

    

    

    //5. Render Result to the UI
}


/**
 * Input Event
 */
Array.from(elements.input).forEach((element) => {
    element.addEventListener('input',(e) => {
        const type = e.target.id === 'currencyFromInput' ? 'from' : 'to';
        searchController(type);
    });
})

