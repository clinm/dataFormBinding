/**
 * Created by Matthieu on 30/12/2015.
 */
var expect = chai.expect;
describe("BasicTest", function(){
   describe("Basic usage", function(){

       function setInput(id, value){
           var inputText = document.getElementById(id);
           inputText.value = value;
           inputText.dispatchEvent(new Event("change"));
       }

       function setCheckBox(id, value){
           var inputCheck = document.getElementById(id);

           inputCheck.checked = value;
           inputCheck.dispatchEvent(new Event("change"));
       }

       function setSelect(id, index){
           var inputSelect = document.getElementById(id);

           inputSelect.selectedIndex = index;
           inputSelect.dispatchEvent(new Event("change"));
       }

        it("should create object if needed", function(){
            expect(mustBeCreated).to.not.equal(undefined);
        });

       it("should not add default value", function(){
           expect(basicSynchro.inputText).to.equal(undefined);
           expect(basicSynchro.inputNumber).to.equal(undefined);
       });

        it("should listen for all changes", function(){
           setInput("inputText", "John Doe");
            expect(basicSynchro.inputText).to.equal("John Doe");

            setInput("inputNumber", 50);
            expect(basicSynchro.inputNumber).to.equal(50);
        });

       it("should not look on input out of scope", function(){
           expect(basicSynchro.inputNotInScope).to.equal(undefined);

           setInput("inputNotInScope", "test");
           expect(basicSynchro.inputNotInScope).to.equal(undefined);
       });

       it("should look for checkbox and select", function(){
           setCheckBox("inputCheckBox", true);
           expect(basicSelectAndCheck.inputCheckBox).to.equal(true);

           setCheckBox("inputCheckBox", false);
           expect(basicSelectAndCheck.inputCheckBox).to.equal(false);

           setSelect("inputSelect", 1);
           expect(basicSelectAndCheck.inputSelect).to.equal('b');

           setSelect("inputSelect", 0);
           expect(basicSelectAndCheck.inputSelect).to.equal('a');
       });

       it("should put default value", function(){
            var defaultSelect = document.getElementById("defaultSelect");
           expect(defaultSelect.selectedIndex).to.equal(2);

           var defaultNumber = document.getElementById("defaultNumber");
           expect(defaultNumber.value).to.equal('50');


           var defaultCheckbox = document.getElementById("defaultCheckbox");
           expect(defaultCheckbox.checked).to.equal(true);

       });
   });
});