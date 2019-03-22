
$(function(){

  // ADD NEW ITEM 
  $('#js-shopping-list-form').submit(function() {
    
    // this stops the default form submission behavior
    event.preventDefault();

    // grab item from textbox
    let newItem = $('#shopping-list-entry').val();

    // validate if entry is not empty
    if(newItem != "") {

      // build shopping item box HTML with new entry
      let itemBlock = `
      <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`

      // append new item to list
      $('.shopping-list').append(itemBlock);
    }

  });
  

  // CHECK OR UNCHECK
  // target ul so it binds to newly dynamically added li's
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {

    // traverse up the DOM to find closest li specific to wich check btn was clicked
    $(this).closest('li')
      // traverse down the Down to find .shopping-item
      .find('.shopping-item')
      // toggle the checked class
      .toggleClass('shopping-item__checked');

  });


  // REMOVE ITEM
  // target ul so it binds to newly dynamically added li's
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
      
    // remove closest li to the delete btn
    $(this).closest('li').remove();

  });

});