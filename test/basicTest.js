/**
 * Created by Matthieu on 30/12/2015.
 */
var expect = chai.expect;

describe("BasicTest", function(){
    function setInput(id, value){
        var inputText = document.getElementById(id);
        inputText.value = value;

        //noinspection JSClosureCompilerSyntax
        inputText.dispatchEvent(new Event("change"));
    }

    function setCheckBox(id, value){
        var inputCheck = document.getElementById(id);
        inputCheck.checked = value;

        //noinspection JSClosureCompilerSyntax
        inputCheck.dispatchEvent(new Event("change"));
    }

    function setSelect(id, index){
        var inputSelect = document.getElementById(id);
        inputSelect.selectedIndex = index;

        //noinspection JSClosureCompilerSyntax
        inputSelect.dispatchEvent(new Event("change"));
    }

    describe("Basic usage", function(){

        it("should create object if needed", function(){
            //noinspection JSUnresolvedVariable
            expect(mustBeCreated).not.equal(undefined);
        });

        it("should not add default value", function(){
            //noinspection JSUnresolvedVariable
            expect(basicSync.inputText).equal(undefined);
            //noinspection JSUnresolvedVariable
            expect(basicSync.inputNumber).equal(undefined);
        });

        it("should listen for all changes", function(){
            setInput("inputText", "John Doe");
            //noinspection JSUnresolvedVariable
            expect(basicSync.inputText).equal("John Doe");

            setInput("inputNumber", 50);
            //noinspection JSUnresolvedVariable
            expect(basicSync.inputNumber).equal(50);
        });

        it("should not look on input out of scope", function(){
            //noinspection JSUnresolvedVariable
            expect(basicSync.inputNotInScope).equal(undefined);

            setInput("inputNotInScope", "test");
            //noinspection JSUnresolvedVariable
            expect(basicSync.inputNotInScope).equal(undefined);
        });

        it("should look for checkbox and select", function(){
            setCheckBox("inputCheckBox", true);
            //noinspection JSUnresolvedVariable
            expect(basicSelectAndCheck.inputCheckBox).equal(true);

            setCheckBox("inputCheckBox", false);
            //noinspection JSUnresolvedVariable
            expect(basicSelectAndCheck.inputCheckBox).equal(false);

            setSelect("inputSelect", 1);
            //noinspection JSUnresolvedVariable
            expect(basicSelectAndCheck.inputSelect).equal('b');

            setSelect("inputSelect", 0);
            //noinspection JSUnresolvedVariable
            expect(basicSelectAndCheck.inputSelect).equal('a');
        });

        it("should put default value", function(){
            var defaultSelect = document.getElementById("defaultSelect");
            expect(defaultSelect.selectedIndex).equal(2);

            var defaultNumber = document.getElementById("defaultNumber");
            expect(defaultNumber.value).equal('50');


            var defaultCheckbox = document.getElementById("defaultCheckbox");
            expect(defaultCheckbox.checked).equal(true);

        });
    });

    describe("Advanced structure", function(){
        it("should handle multiple . (dot) notation", function(){
            setInput("firstSecondThirdLast", "John");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.second.third.last).equal("John");

            setInput("firstSecondThirdLast", "Doe");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.second.third.last).equal("Doe");
        });

        it("should handle one array", function(){
            setInput("firstTab0Last", "John");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.tab[0].last).equal("John");

            setInput("firstTab1Last", "Doe");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.tab[1].last).equal("Doe");
        });

        it("should handle multiple array", function(){
            setInput("firstTab00Last", "John");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.tab[0][0].last).equal("John");


            setInput("firstTab01Last", "Doe");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.tab[0][1].last).equal("Doe");
        });

        it("should handle array as last part", function(){
            setInput("firstTab0", "John");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.tab[0]).equal("John");

            setInput("firstTab1", "Doe");
            //noinspection JSUnresolvedVariable
            expect(advancedStructure.first.tab[1]).equal("Doe");
        });

        it("should handle array as structure", function(){
            setInput("base0", "John");
            setInput("base1", "Doe");
            setInput("base2", "Junior");

            expect(baseIsArray[0]).equal("John");
            expect(baseIsArray[1]).equal("Doe");
            expect(baseIsArray[2]).equal("Junior");
        });
    });
});