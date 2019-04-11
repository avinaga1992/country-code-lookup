var countries = require('./index.js');

describe('country code', function(){

	it('loads the countries into an array', function(done){
		if (countries.countries.length < 239) return done('not all countries loaded, found ' + countries.countries.length);
		return done();
	});

	it('finds countries by fips', function(done){
		var uk = countries.byFips('UK');
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		if (uk.continent !== 'Europe') return done('wrong continent');
		if (uk.region !== 'Western Europe') return done('wrong region');
		if (uk.capital !== 'London') return done('wrong capital');
		return done();
	});

	it('finds countries by iso 2', function(done){
		var uk = countries.byIso('GB');
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		return done();
	});

	it('finds countries by iso 3', function(done){
		var uk = countries.byIso('GBR');
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		return done();
	});

	it('finds countries by iso number', function(done){
		var uk = countries.byIso(826);
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		return done();
	});

	it('finds countries by iso number as a string', function(done){
		var uk = countries.byIso('826');
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		return done();
	});

	it('finds countries by internet code', function(done){
		var uk = countries.byInternet('UK');
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		return done();
	});

	it('finds countries by lower case fips', function(done){
		var uk = countries.byFips('uk');
		if (!uk) return done('no country');
		if (uk.country !== 'United Kingdom') return done('wrong country');
		return done();
	});

	it('throws an error if the iso code is invalid', function(done){
		try {
			var uk = countries.byIso('foo bar baz');
			return done('exception should be thrown');
		} catch (e){
			return done()
		}
	});

	it('returns null if no country is found', function(done){
		var uk = countries.byIso(23452);
		if (uk === null) return done();
		return done('country should be null');
	});


	it('Romania is now ROU', function(done){
		var romania = countries.byIso('ROM');
		if (null !== romania) return done('Romania is no longer ROM');

		var romania = countries.byIso('ROU');
		if (null === romania) return done('Romania is now ROU');
		done();

	});

	it('Democratic Republic of Congo', function(done){
		var drcongo = countries.byIso('COD');
		if (null == drcongo) return done('Democratic Republic of Congo is COD');

		var drcongo = countries.byIso('CD');
		if (null == drcongo) return done('Democratic Republic of Congo is CD');

		done();

	});

});
