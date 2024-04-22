function newItem() {
    let inputValue = $("#input").val();
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      let li = $("<li></li>").text(inputValue);
      $("#list").append(li);
    }
  
    function crossOut() {
      $(this).toggleClass("strike");
    }
  
    $(document).on("dblclick", "li", crossOut);
  
    let crossOutButton = $("<button></button>").text("X");
    $(crossOutButton).appendTo("li");
  
    $(document).on("click", "button", deleteListItem);
  
    function deleteListItem() {
      $(this).parent().addClass("delete");
    }
  
    $("#list").sortable();
  }