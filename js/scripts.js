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
        this.pepperoni ? this.slices = 5 : this.slices = 4;
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
