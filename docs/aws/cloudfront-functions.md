# CloudFront Functions

## Javascript Runtime

The CloudFront Functions Javascript runtime 2.0 is compliant with ECMAScript v5.1 and supports some features of v6 through to v12. There are some limitations which there seem to be no documentation for. You can't loop over more than 100 things (limit hit with loop over redirects).
 
See the AWS docs for the [Javascript Runtime](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-20.html).

## Monitoring

### Metrics

Under CloudFront -> Telemetry -> Monitoring you can see metrics like throttles, errors and the cpu usage (scaled from 0 to 100). At or above 100% cpu usage, which is really execution time, your code will get terminated and the request will proceed to the CloudFront cache regardless. This means CF Functions should not be relied upon for any critical access control or restrictions on content.

### Logs

CF Function logs are always sent to `us-east-1`. The log group name is in the format `/aws/cloudfront/function/FunctionName`, where `FunctionName` is the name that you gave to the function when you created it.

See <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-logs.html#cloudfront-function-logs>

## Quotas

Cloudfront Functions and KV Stores have more restrictive limits than Lambda@Edge, many of which cannot be increased.

* [CloudFront Functions Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-functions)

## Troubleshooting

Apparently if you misconfigure a CloudFront Distribution to have multiple Subject Alternate Names (SAN) but missing one specific domain, an ACM certificate valid for all SANs, all Route53 records correct, and a CloudFront Function attached to the default Behaviour as a Viewer Request, the Function will get called correctly for all domains except the one missing from the Distribution. Ask me how I know 😂
