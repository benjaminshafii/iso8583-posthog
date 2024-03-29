# ISO8583 PostHog

> Create PostHog dashboard from ISO8583 messages



Status: Planning

![image](https://github.com/ashgansh/iso8583-posthog/assets/11430621/92de9b5a-1b25-466e-9f3c-0a248ab00f5b)

### What is it

This repo makes it easy for you to run a small payment message ingestor and is configurable to forward meaningful event data to posthog. 

It allows you to create dashboards that answers questions such as:
- What's our weekly card volume?
- What's the volume of declined payments?
- What's the average ticket size?
- ... and so on

### How does it work

Under the hood, this service will interpret complex authorization and clearing messages and send events to posthog.

![image](https://github.com/ashgansh/iso8583-posthog/assets/11430621/e4afff42-e547-4217-badc-356233c7e3d3)
> ISO8583 parser

To Do:
- [ ] Create an ISO8583 parser
