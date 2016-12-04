import path from 'path';
import chai from 'chai';

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;
global.srcDir = path.resolve(__dirname, '../src');
global.rootDir = path.resolve(__dirname, '../');

process.env.NODE_ENV = 'test';
process.setMaxListeners(1000);
