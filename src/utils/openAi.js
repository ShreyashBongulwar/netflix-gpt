import OpenAI from 'openai';
import { openai_key } from './constants';

const openai = new OpenAI({
  apiKey: openai_key,
  dangerouslyAllowBrowser: true,
});

export default openai;