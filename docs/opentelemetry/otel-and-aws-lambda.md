# OpenTelemetry with AWS Lambda

At the time of writing, OpenTelemetry and AWS Lambda still seems to be a bumpy ride. In the past, a lot of the documentation about using and configuring Collectors bears no relevance to using this with AWS Lambda, as each lambda function has it's own collector instance. 

For some time, the response time of a lmabda function had to include the time taken to send the telemetry before the response could be sent from the Lambda function back to the caller. The Decouple Processor fixed this but this seemed to be quite late to the game, as though this was an edge case being supported. Until even more recently, using the Decoupel processor also means using the OpenTelemetry Lambda layers as this was n't includes in the AWS Distribution for Open Telemetry (ADOT). 

As should always be the case, a lot of the power and value from OpenTelemetry comes from observing Traces which span multiple different backends. Somehow Typescript and ESM are also an edge case so instrumenting fetch is also [not something covered by the auto-instrumentation](https://github.com/open-telemetry/opentelemetry-lambda/issues/1557#issuecomment-2466435496).

## Resources

* [AWS Distribution for Open Telemetry (ADOT)](https://aws-otel.github.io/)
** Note that also here you need to instrument undici if using fetch in the [OTEL_NODE_ENABLED_INSTRUMENTATIONS](https://aws-otel.github.io/docs/getting-started/lambda/lambda-js).
* [OTel Bin](https://www.otelbin.io/) - Validate your collector.yaml configuration against known distributions. I raised a request many months ago but surprisingly you still can't validate configuration against the official OpenTelemetry Lambda Layers.
* [Instrumentation Score](https://instrumentation-score.com/) - A project to objectively "score" your instrumentation.
* [Blog - Instrumenting a Typescript Lambda with Honeycomb](https://dalejsalter.com/post/8afd46ad-7da2-4b2a-9cb5-9e5ae4fe6cc2/cdk-lambda-otel-honeycomb)
* [Honeycomb](https://www.honeycomb.io/) - [Export Data with AWS Lambda Layer + OpenTelemetry](https://docs.honeycomb.io/integrations/aws/lambda/opentelemetry/)
