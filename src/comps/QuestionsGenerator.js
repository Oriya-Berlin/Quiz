import React from 'react';

const QuestionGenerator = () => {

    return(
        <form>
        
            <div className="mb-3">
            <label for="disabledSelect" className="form-label">Disabled select menu</label>
            <select id="disabledSelect" className="form-select">
                <option>Disabled select</option>
            </select>
            </div>

            <div className="mb-3">
            <label for="disabledTextInput" className="form-label">Disabled input</label>
            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
            </div>

            <button type="submit" className="btn btn-primary">Generate</button>
   
        </form>
    );
}

export default QuestionGenerator;


