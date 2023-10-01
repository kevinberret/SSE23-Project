// Inject a wrapper around the function in the class we want to inspect.
const JSpector = require('../../JSpector/jspector');

const jspector = new JSpector(
  'moment',
  'add',
  'SSE23-moment'
);

jspector.start();
