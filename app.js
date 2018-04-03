const budgetController = (function() {
    
    const x = 23;
     
    const add = function(a) {
         return x + a;
     }

     return {
         publicTest: function(b) {
             console.log(add(b));
         }
     }

})();


const UIController = (function() {

// some code

})();



const controller = (function(budgetCtrl, UICtrl) { 

    budgetCtrl.publicTest(5);

})(budgetController, UIController);

