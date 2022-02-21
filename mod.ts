/** This is a stream combinator that JSON.parses each incoming chunk into a
 * JSON object. */
export class JSONParseStream extends TransformStream<string, unknown> {
  constructor() {
    super({
      transform(chunk, controller) {
        const data = JSON.parse(chunk);
        controller.enqueue(data);
      },
    });
  }
}
