var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200/books'
});

let q = process.argv[2];

( async query => {
    try {
        const response = await client.search({
            q: query
        });
        console.log("Results found:", response.hits.hits.length)
        response.hits.hits.forEach( h => {
            let {_source, ...params } = h;
            console.log("Result found in file: ", params._id, " with score: ", params._score)
        })
    } catch (error) {
        console.trace(error.message)
    }
})(q)
