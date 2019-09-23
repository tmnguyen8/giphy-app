// Global Variables
let buttons = ["cats", "dogs", "lions"];

// function to load buttons from local storage object; buttons is the key and the array is the value
function loadButtons(){
    const listButtons = JSON.parse(localStorage.getItem("buttons"));
    buttons = listButtons;
}
// function to render buttons
function renderButtons(){
    $(".recent-search").empty();
    for (i of buttons) {
        var buttonName = i;
        var button = `
        <div class="wrap-buttons">
            <button class="btn btn-search" data-name="${buttonName}">${buttonName}</button>
            <button class="btn btn-delete fas fa-times" data-name="${buttonName}"></button>
        </div>
        `;
        $(".recent-search").append(button);
    }
    // save the search into local storage
    localStorage.setItem("buttons", JSON.stringify(buttons));
}

loadButtons();
renderButtons();


$(document).on("click", "#submit-button", function(event){
    event.preventDefault();
    var searchVal = $("#search").val();
    buttons.push(searchVal)
    renderButtons();

});