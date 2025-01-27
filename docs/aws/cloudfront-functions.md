# CloudFront Functions

## Javascript Runtime

The CloudFront Functions Javascript runtime 2.0 is compliant with ECMAScript v5.1 and supports some features of v6 through to v12. There are some limitations which there seem to be no documentation for. You can't loop over more than 100 things (limit hit with loop over redirects).
 
See the AWS docs for the [Javascript Runtime](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-20.html).

## Quotas

Cloudfront Functions and KV Stores have more restrictive limits than Lambda@Edge, many of which cannot be increased.

* [CloudFront Functions Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-functions)
