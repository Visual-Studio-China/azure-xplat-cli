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
  .head('/storage-cli-blob-test/blockblobname6359')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 20 Jul 2016 08:19:46 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3B0769C3589D5"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fd714df4-0001-0039-375f-e2d6a3000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 20 Jul 2016 08:19:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname6359')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Wed, 20 Jul 2016 08:19:46 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D3B0769C3589D5"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fd714df4-0001-0039-375f-e2d6a3000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Wed, 20 Jul 2016 08:19:56 GMT',
  connection: 'close' });
 return result; }]];