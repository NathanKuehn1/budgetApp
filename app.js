
const budgetController = (function() {
    
   

})();





const UIController = (function() {

    const DOMstrings = {
          inputType: '.add__type',
          inputDescription: '.add__description',
          inputValue: '.add__value',
          inputButton: '.add__btn'
    }

    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
             };
           },
           getDOMstrings: function() {
                return DOMstrings;
           }
        };

})();






const controller = (function(budgetCtrl, UICtrl) { 

    const DOM = UICtrl.getDOMstrings

    const ctrlAddItem = function() {

    
        const input = UICtrl.getInput();
        console.log(input);










    }

document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

});


})(budgetController, UIController);









