// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2016-04-30-preview', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '767',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/e39931c6-a1ab-49d1-b773-4c389a48e156?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': 'e39931c6-a1ab-49d1-b773-4c389a48e156',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '8412ae5c-5bbf-4610-8388-46548b0685e0',
  'x-ms-routing-request-id': 'WESTUS2:20170208T022105Z:8412ae5c-5bbf-4610-8388-46548b0685e0',
  date: 'Wed, 08 Feb 2017 02:21:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2016-04-30-preview', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '767',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/e39931c6-a1ab-49d1-b773-4c389a48e156?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': 'e39931c6-a1ab-49d1-b773-4c389a48e156',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '8412ae5c-5bbf-4610-8388-46548b0685e0',
  'x-ms-routing-request-id': 'WESTUS2:20170208T022105Z:8412ae5c-5bbf-4610-8388-46548b0685e0',
  date: 'Wed, 08 Feb 2017 02:21:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/e39931c6-a1ab-49d1-b773-4c389a48e156?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T02:21:04.9501268+00:00\",\r\n  \"endTime\": \"2017-02-08T02:21:20.2163137+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"e39931c6-a1ab-49d1-b773-4c389a48e156\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '1a423e6b-e47a-4e05-a9f2-eb358936deb8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': 'cf6bef45-d8da-491d-ad42-31280c32f3f0',
  'x-ms-routing-request-id': 'WESTUS2:20170208T022135Z:cf6bef45-d8da-491d-ad42-31280c32f3f0',
  date: 'Wed, 08 Feb 2017 02:21:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/e39931c6-a1ab-49d1-b773-4c389a48e156?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T02:21:04.9501268+00:00\",\r\n  \"endTime\": \"2017-02-08T02:21:20.2163137+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"e39931c6-a1ab-49d1-b773-4c389a48e156\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '1a423e6b-e47a-4e05-a9f2-eb358936deb8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14918',
  'x-ms-correlation-request-id': 'cf6bef45-d8da-491d-ad42-31280c32f3f0',
  'x-ms-routing-request-id': 'WESTUS2:20170208T022135Z:cf6bef45-d8da-491d-ad42-31280c32f3f0',
  date: 'Wed, 08 Feb 2017 02:21:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '4234ec29-730c-42f3-903f-2dad66bb2d5a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': '53c19116-cacd-4bf9-965c-70215352d64b',
  'x-ms-routing-request-id': 'WESTUS2:20170208T022135Z:53c19116-cacd-4bf9-965c-70215352d64b',
  date: 'Wed, 08 Feb 2017 02:21:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage13710.blob.core.windows.net/vm13547/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '768',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '4234ec29-730c-42f3-903f-2dad66bb2d5a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14919',
  'x-ms-correlation-request-id': '53c19116-cacd-4bf9-965c-70215352d64b',
  'x-ms-routing-request-id': 'WESTUS2:20170208T022135Z:53c19116-cacd-4bf9-965c-70215352d64b',
  date: 'Wed, 08 Feb 2017 02:21:35 GMT',
  connection: 'close' });
 return result; }]];