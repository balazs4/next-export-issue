````bash
npm install

npm start
# http://localhost:3000/?foo=bar
# Index
# {
#   "query": {
#     "foo": "bar"
#   },
#   "pathname": "/",
#   "asPath": "/?foo=bar"
# }

# http://localhost:3000/foo?foo=bar
# Foo
# {
#   "query": {
#     "foo": "bar"
#   },
#   "pathname": "/foo",
#   "asPath": "/foo?foo=bar"
# }
#

npm run build
npm run serve

# http://localhost:5000?foo=bar
# Index
# {
#   "query": {},
#   "pathname": "/",
#   "asPath": "/?foo=bar"
# }


# http://localhost:5000/foo?foo=bar
# Foo
# {
#   "query": {},
#   "pathname": "/foo",
#   "asPath": "/foo/?foo=bar"
# }
````