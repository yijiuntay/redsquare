A Next.js App with 2 api endpoints. 

Endpoint 1 will be returning a random hash string using SHA-256 algorithmn. In
every hash generation, it will always return a unique hash string and not repeatable. Endpoint 1 shall
only return after 1 seconds.

Endpoint 2 will keep requesting a hash string from endpoint 1, and
endpoint 2 shall only return a success response body when last 1 character of the hash is a number
and it is an odd number.

A loadtest for endpoint 2 is included (loadtest.js), and it is done with k6.
