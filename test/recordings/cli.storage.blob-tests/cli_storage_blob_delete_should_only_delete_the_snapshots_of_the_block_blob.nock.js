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
  .delete('/storage-cli-blob-test/blockblobname63597866')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '796f7273-0001-0028-0c5f-e2e1b8000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 08:21:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .delete('/storage-cli-blob-test/blockblobname63597866')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '796f7273-0001-0028-0c5f-e2e1b8000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 08:21:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname63597866')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Wed, 20 Jul 2016 08:20:02 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3B076A6026530"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3efdb2e8-0001-003a-475f-e2d5a4000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'broken',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 20 Jul 2016 08:21:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname63597866')
  .reply(200, "", { 'content-length': '17',
  'content-type': 'text/plain',
  'content-md5': 'rG1yD4pD69MsOEPPGr72YA==',
  'last-modified': 'Wed, 20 Jul 2016 08:20:02 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3B076A6026530"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3efdb2e8-0001-003a-475f-e2d5a4000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'broken',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 20 Jul 2016 08:21:17 GMT',
  connection: 'close' });
 return result; }]];