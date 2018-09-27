(() => {
	"use strict"
	const expect = require("chai").expect,
		  Card   = require("../app/dependencies/card.js");

	describe("Card Modules", () => {
		describe("Card properties", () => {
			var draw = new Card("9", "diamonds", "nine", 9);

			it("Should be an object", () => {
				expect(draw).to.be.an("object");
			});

			it("Should have valid properties", () => {
				expect(draw).to.have.a.property("faceValue");
				expect(draw).to.have.a.property("suit");
				expect(draw).to.have.a.property("cardValue");
				expect(draw).to.have.a.property("numericValue");
			});

			it("Should display card image", () => {
				expect(draw, "add cardImageLocation to prototype").to.have.property("cardImageLocation");
			});
			it("Should return the location of card image", () => {
				expect(draw.cardImageLocation()).to.be.equal("cards/images/nine_of_diamonds.png", "it should point to card image location");
			});

		});
	});
})();