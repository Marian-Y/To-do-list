(function () {
    var time = {
      init: function () {
        this.checkbox = $("#time");
        this.bindEvents();
        this.changeTime();
      },
      bindEvents: function () {
        $(this.checkbox).change(this.changeTime.bind(this));
      },
      changeTime: function () {
        if (this.checkbox.is(":checked")) {
          $("body").removeClass().addClass("day");
          $("#toDoList").removeClass().addClass("day");
        } else {
          $("body").removeClass().addClass("night");
          $("#toDoList").removeClass().addClass("night");
        }
      }
    };
    time.init();
  })();