// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy01</Id><AccessPolicy><Start>2015-12-01T00:00:00.0000000Z</Start><Expiry>2100-12-31T00:00:00.0000000Z</Expiry><Permission>rwdl</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 08:18:36 GMT',
  etag: '"0x8D3B076729E296F"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6d3184ec-0001-0021-205f-e2fb36000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 08:18:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy01</Id><AccessPolicy><Start>2015-12-01T00:00:00.0000000Z</Start><Expiry>2100-12-31T00:00:00.0000000Z</Expiry><Permission>rwdl</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 20 Jul 2016 08:18:36 GMT',
  etag: '"0x8D3B076729E296F"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6d3184ec-0001-0021-205f-e2fb36000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 08:18:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest?restype=container&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 08:18:37 GMT',
  etag: '"0x8D3B076733B9D7A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ce248b77-0001-0002-305f-e294fd000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 08:18:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest?restype=container&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 20 Jul 2016 08:18:37 GMT',
  etag: '"0x8D3B076733B9D7A"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ce248b77-0001-0002-305f-e294fd000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 08:18:37 GMT',
  connection: 'close' });
 return result; }]];