describe("Pizza", function() {
  describe("size", function() {
    it("sets the size of the pizza", function() {
      var myPizza = Object.create(Pizza);
      myPizza.size(8);
      expect(myPizza.size).to.equal(8);
    });
  });

  describe("putPepperoni", function() {
    it("adds pepperoni to the pizza", function() {
      var myPizza = Object.create(Pizza);
      myPizza.putPepperoni();
      expect(myPizza.pepperoni).to.equal(true);
    });
  });

  describe("sliceIt", function() {
    it("slices up the pizza", function() {
      var myPizza = Object.create(Pizza);
      myPizza.size(8);
      myPizza.putPepperoni();
      myPizza.sliceIt();
      expect(myPizza.slices).to.equal(5);
    });
  });
});
