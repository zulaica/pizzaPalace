var Pizza = {
  size: function(diameter) {
    this.size = diameter;
  },
  pepperoni: false,
  putPepperoni: function() {
    this.pepperoni = true;
  },
  slices: 1,
  sliceIt: function() {
    switch(this.size) {
      case 8:
        this.pepperoni ? this.slices = 7 : this.slices = 6;
        break;
      case 12:
        this.pepperoni ? this.slices = 9 : this.slices = 8;
        break;
      case 16:
        this.pepperoni ? this.slices = 13 : this.slices = 12;
        break;
      case 20:
        this.pepperoni ? this.slices = 17 : this.slices = 16;
        break;
    }
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sizeText  = "";
    var typeText  = "cheese";
    var sliceText = "Don't worry; we won't slice it up once it's done. We're not sure why you wouldn't want your pizza sliced for you&thinsp;&mdash;&thinsp;that's kinda weird. But, hey, who are we to judge?";

    var size = parseInt($("#size").val());
    var pizzaOrder = Object.create(Pizza);
    pizzaOrder.size(size);
    if ($("#put-pepperoni").prop("checked")) { pizzaOrder.putPepperoni() };
    if ($("#slice-it").prop("checked")) { pizzaOrder.sliceIt() };

    switch(pizzaOrder.size) {
      case 8:
        sizeText   = "a small ";
        bakingTime = "24";
        break;
      case 12:
        sizeText   = "a medium ";
        bakingTime = "28";
        break;
      case 16:
        sizeText   = "a large ";
        bakingTime = "32";
        break;
      case 20:
        sizeText   = "an All-American, jumboriffic ";
        bakingTime = "36";
        break;
    }
    if (pizzaOrder.pepperoni) { typeText = "pepperoni" };
    if (pizzaOrder.slices > 1) { sliceText = "Once it's done we'll cut that up into " + pizzaOrder.slices + " slices to ensure optimal flavor." };

    $("#order").append(
      "<p>We've got " + sizeText + typeText + " pizza in the oven with your name on it!</p><p>" + sliceText + "</p>" +
      "<p>Swing by and pick it up in&hellip; oh&hellip; let's say&hellip; " + bakingTime + " minutes.</p>"
      );

    $("form")[0].reset();
    $("#order-form").slideUp(250).dequeue().fadeOut(250);
    $("#receipt").slideDown(250).dequeue().fadeIn(250);
  });

  $('[href="/"]').click(function(event) {
    event.preventDefault();
    $("#order").empty();
    $("#receipt").slideUp(270).dequeue().fadeOut(200);
    $("#order-form").slideDown(250).dequeue().fadeIn(250);
  });
});
