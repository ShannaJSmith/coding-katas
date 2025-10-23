#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const kataName = process.argv[2];

if (!kataName) {
  console.error('❌ Please provide a kata name. Example: node createKata.js twoSum');
  process.exit(1);
}

// --- Paths ---
const jsDir = path.join(__dirname, 'js');
const testsDir = path.join(__dirname, 'tests', 'js');

const kataFile = path.join(jsDir, `${kataName}.js`);
const testFile = path.join(testsDir, `${kataName}.test.js`);
const edgeFile = path.join(testsDir, `${kataName}-edge.test.js`);

// --- Templates ---
const kataTemplate = `/**
 * 🧩 Kata: ${kataName}
 * Description: Add kata question here.
 */

function ${kataName}() {
}

module.exports = { ${kataName} };
`;

const testTemplate = `const { ${kataName} } = require('../../js/${kataName}');

describe('${kataName}()', () => {
  test('example test case', () => {
    expect(${kataName}()).toBeDefined();
  });
});
`;

const edgeTemplate = `const { ${kataName} } = require('../../js/${kataName}');

describe('Edge cases', () => {
  test('', () => {
    expect(${kataName}()).toBeDefined();
  });
});
`;

// --- Write files ---
fs.writeFileSync(kataFile, kataTemplate, { flag: 'wx' });
fs.writeFileSync(testFile, testTemplate, { flag: 'wx' });
fs.writeFileSync(edgeFile, edgeTemplate, { flag: 'wx' });

console.log(`✅ Kata scaffolding created:
  - ${kataFile}
  - ${testFile}
  - ${edgeFile}`);
