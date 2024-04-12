import { ISO_MSG as ISO_MSG_001 } from './examples/001.mjs';
import { ISO_MSG as ISO_MSG_002 } from './examples/002.mjs';
import { ISO_MSG as ISO_MSG_003 } from './examples/003.mjs';
import { ISO_MSG as ISO_MSG_004 } from './examples/004.mjs';
import { transformISOMessageToReadableFormat } from './index.mjs';


const result = transformISOMessageToReadableFormat(ISO_MSG_001);

console.log(result);

const result_002 = transformISOMessageToReadableFormat(ISO_MSG_002);
console.log(result_002);

const result_003 = transformISOMessageToReadableFormat(ISO_MSG_003);
console.log(result_003);

const result_004 = transformISOMessageToReadableFormat(ISO_MSG_004);
console.log(result_004);




