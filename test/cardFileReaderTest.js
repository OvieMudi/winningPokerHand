(() =>{
	const expect = require("chai").expect,
		  assert = require("chai").assert,
		  CardFileReader = require("../app/dependencies/cardFileReader.js");


	describe("Card module", () => {

		let cardFile = new CardFileReader();

		it("module should should exist", () => {
			expect(CardFileReader).to.not.be.null;
		});

		it("should be an array of card suits", (done) => {
			cardFile.read("app/lib/cards.txt", (err, data)=>{
				if(err) return done(err);
				expect(data).to.be.an("array", "it should return an array object")
				done();
			});
			
		});

		it("the array should have 1000 card items", (done) => {
			cardFile.read("app/lib/cards.txt", (err, data)=>{
				if(err) return done(err);
				expect(data.length).to.equal(1000, "length of array should be 1000");
				done();
			});
		});

		it("data contained in array should be correct", (done) => {
			cardFile.read("app/lib/cards.txt", (err, data)=>{
				if(err) return done(err);
				expect(data[0]).to.equal("8C TS KC 9H 4S 7D 2S 5D 3S AC", "the first line should be correct");
				expect(data[data.length - 1]).to.equal("AS KD 3D JD 8H 7C 8C 5C QD 6C", "the last line should be correct");
				done();
			});

		});

	});


})();