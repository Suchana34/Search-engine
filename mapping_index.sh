$ curl -X PUT "localhost:9200/books?pretty" -H 'Content-Type: application/json' -d'
{ 
  "properties": {
    "title": {
      "type": "text",
      "analyzer": "standard",
      "boost": 2
    },
    "body": {
      "type": "text",
      "analyzer": "english"
    }
  }
}
'
