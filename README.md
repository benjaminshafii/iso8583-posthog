# ISO8583 PostHoga

> Create PostHog dashboard from ISO8583 messages



Status: Working on ISO8583 parser


![image](https://github.com/ashgansh/iso8583-posthog/assets/11430621/92de9b5a-1b25-466e-9f3c-0a248ab00f5b)

### What is it

This repo makes it easy for you to run a small payment message ingestor and is configurable to forward meaningful event data to posthog. 

It allows you to create dashboards that answers questions such as:
- What's our weekly card volume?
- What's the volume of declined payments?
- What's the average ticket size?
- ... and so on

### How does it work

Under the hood, it uses the `index.mjs` iso8583 parser to interpret (pre-serialized) iso8583 messages into more interpretable data.

![image](https://github.com/ashgansh/iso8583-posthog/assets/11430621/ca99942e-7aac-4116-827b-be681a078b67)

> ISO8583 parser

To Do:
- [x] Create a simplified ISO8583 parser
- [ ] Extend the parser
- [ ] Create a server
