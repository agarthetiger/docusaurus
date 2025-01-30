# API Gateway

## Lambda Authorizers

Lambda Authorizers can be configured with Identity Sources, which are effectively mandatory inputs. They can be query string params, HTTP request headers, etc. API Gateway will reject requests with a 401 response if a request does not contain the mandatory Identity Sources. To use a lambda authorizer which uses one or another method of authentication, specify a blank list for the Identity Sources instead. 

See <https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html>
