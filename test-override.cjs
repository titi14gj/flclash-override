const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');
const path = require('path');
const context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'QuantumultX-FlClash.js'), 'utf8'), context);
const fixtures = [
 ['🇭🇰 香港节点', ['香港 01', 'HK01', 'Hong Kong 1', '🇭🇰 01', 'Just My Socks 香港']],
 ['🇯🇵 日本节点', ['日本 01', 'JP01', 'Tokyo 01', '🇯🇵 01', 'Just My Socks 日本']],
 ['🇸🇬 新加坡节点', ['新加坡 01', 'SG01', 'Singapore 01', '🇸🇬 01', 'Just My Socks 新加坡']],
 ['🇰🇷 韩国节点', ['韩国 01', 'KR01', 'Seoul 01', '🇰🇷 01', 'Just My Socks 韩国']],
 ['🇺🇸 美国节点', ['美国 01', 'US01', 'USA 01', '🇺🇸 01', 'United States 1']],
 ['🇮🇳 印度', ['印度 01', 'IN01', 'India 01']],
 ['🇩🇪 德国', ['德国 01', 'DE01', 'Germany 01']],
 ['🇨🇦 加拿大', ['加拿大 01', 'CA01', 'Canada 01']],
 ['🇨🇳 台湾节点', ['台湾 01', 'TW01', 'Taiwan 01']],
 ['🇬🇧 英国节点', ['英国 01', 'UK01', 'London 01']],
 ['🇷🇺 俄罗斯节点', ['俄罗斯 01', 'RU01', 'Russia 01']]
];
const names = fixtures.flatMap(x => x[1]).concat(['Australia 01', 'Austria 01', 'Business Premium', 'Just My Socks', 'Edge Premium', 'Basic 01']);
const input = {proxies: names.map(name => ({name, type: 'ss'}))};
const result = context.main(input);
for (const [name, expected] of fixtures) {
 const group = result['proxy-groups'].find(g => g.name === name);
 assert.deepEqual(Array.from(group.proxies), expected, name);
 const regex = new RegExp(group.filter.replace('(?i)', ''), 'i');
 assert.deepEqual(names.filter(n => regex.test(n)), expected, 'provider filter: '+name);
}
assert.equal(result['proxy-groups'].length, 33);
const appleTV = result['proxy-groups'].find(g => g.name === 'AppleTV');
const f1TV = result['proxy-groups'].find(g => g.name === 'F1 TV');
assert.equal(result['proxy-groups'].indexOf(f1TV), result['proxy-groups'].indexOf(appleTV) + 1);
assert.deepEqual(Array.from(f1TV.proxies), Array.from(appleTV.proxies));
assert(result.rules.includes('RULE-SET,qx_f1_tv,F1 TV'));
assert(!result.rules.some(rule => /d2n9h2wits23hf|f1prodlive|f1esports|f1manager|f1play|formula1/.test(rule)));
assert.deepEqual(JSON.parse(JSON.stringify(result['rule-providers'].qx_f1_tv)), {
 type: 'http',
 url: 'https://raw.githubusercontent.com/dler-io/Rules/main/Surge/Surge%203/Provider/Media/F1%20TV.list',
 interval: 172800,
 behavior: 'classical',
 format: 'text',
});
const firstNodeGroup = result['proxy-groups'].findIndex(g => g.filter);
assert(firstNodeGroup > 0);
assert(result['proxy-groups'].slice(0, firstNodeGroup).every(g => !g.filter));
assert(result['proxy-groups'].slice(firstNodeGroup).every(g => g.filter));
assert(result['proxy-groups'].findIndex(g => g.name === '📺 IPTV Gary') < firstNodeGroup);
assert(result['proxy-groups'].findIndex(g => g.name === '📺 IPTV Cathy') < firstNodeGroup);
assert.equal(result.rules.at(-1), 'MATCH,🚀 策略选择');
assert(result.rules.some(r => r.endsWith(',🍿 国外媒体')));
assert(result.rules.some(r => r.endsWith(',AppleTV')));
for (const host of ['cma.itunes.apple.com', 'cma2.itunes.apple.com']) {
 const rule = `DOMAIN,${host},AppleTV`;
 assert(result.rules.includes(rule));
 assert(result.rules.indexOf(rule) < result.rules.indexOf('RULE-SET,qx_f1_tv,F1 TV'));
}
for (const source of ['gary', 'cathy']) {
 const groupName = source === 'gary' ? '📺 IPTV Gary' : '📺 IPTV Cathy';
 const group = result['proxy-groups'].find(g => g.name === groupName);
 const nodeGroups = result['proxy-groups'].filter(g => g.filter).map(g => g.name);
 assert.deepEqual(Array.from(group.proxies),
   ['🍿 国外媒体', ...nodeGroups, '🚀 策略选择', 'DIRECT']);
 for (const behavior of ['domain', 'ipcidr']) {
   const id = `qx_iptv_${source}_${behavior}`;
   const provider = result['rule-providers'][id];
   assert.equal(provider.type, 'http');
   assert.equal(provider.format, 'mrs');
   assert.equal(provider.behavior, behavior);
   assert.equal(provider.interval, 43200);
   assert(result.rules.includes(`RULE-SET,${id},${groupName}`));
 }
}
assert(result.rules.indexOf('RULE-SET,qx_iptv_gary_domain,📺 IPTV Gary') <
       result.rules.indexOf('RULE-SET,qx_iptv_cathy_domain,📺 IPTV Cathy'));
assert(!result.rules.some(r => r.includes('0b73ace69ebb45eaa249bb87837cb958.mediatailor')));
const valid = new Set([...result['proxy-groups'].map(g => g.name), 'DIRECT','REJECT',...names]);
for (const g of result['proxy-groups']) for (const n of g.proxies || []) assert(valid.has(n), n);
for (const rule of result.rules) {
 const parts = rule.split(','); const target = parts.at(-1)==='no-resolve'?parts.at(-2):parts.at(-1);
 assert(valid.has(target), rule);
}
const onlyUS = context.main({proxies: [{name:'US01',type:'ss'}]});
assert.deepEqual(Array.from(onlyUS['proxy-groups'].find(g=>g.name==='🇯🇵 日本节点').proxies), ['REJECT']);
assert(onlyUS['proxy-groups'].findIndex(g => g.name === '📺 IPTV Cathy') <
       onlyUS['proxy-groups'].findIndex(g => g.name === '🇯🇵 日本节点'));
const provider = {type:'http',url:'https://example.invalid/subscription'};
const dynamic = context.main({'proxy-providers': {sample: provider}});
assert.equal(dynamic['proxy-providers'].sample, provider);
for(const g of dynamic['proxy-groups'].filter(g=>g.filter)) assert.deepEqual(Array.from(g.use), ['sample']);
const existingRules = {custom: {type: 'inline', behavior: 'domain', payload: ['example.com']}};
const merged = context.main({proxies: [{name:'US01',type:'ss'}], 'rule-providers': existingRules});
assert.equal(merged['rule-providers'].custom, existingRules.custom);
assert.throws(()=>context.main({}));
assert.equal(input.proxies.length, names.length);
console.log('PASS: group order; F1 TV parity/provider; 11 region groups; Gary/Cathy IPTV routing; all references; input preservation.');
