# CloudFront

## CloudFront Distributions and alternate names

When you try to add an alternate domain name to a distribution but the alternate domain name is already in use on a different distribution, you get a `CNAMEAlreadyExists error (One or more of the CNAMEs you provided are already associated with a different resource)`. This means you cannot simply build a new Cloudfront Distribution for a site which is already live if you want to perform a migration for any reason. A migration is probably still possible, however it requires several manual steps in order to perform the migration to both the source and target CloudFront Distributions and DNS.

See <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/alternate-domain-names-move.html> for more information.
