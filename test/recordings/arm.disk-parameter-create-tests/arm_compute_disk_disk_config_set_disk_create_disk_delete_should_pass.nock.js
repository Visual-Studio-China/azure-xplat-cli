// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '21466899-20b2-463c-8c30-b8fb28a43248',
    name: 'Core-RP Alpha Subscription-11',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourcegroups/xTestDiskCreate8952?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestDiskCreate8952' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '25b87b63-4a15-4972-8b01-fb5a280d67a6',
  'x-ms-correlation-request-id': '25b87b63-4a15-4972-8b01-fb5a280d67a6',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215741Z:25b87b63-4a15-4972-8b01-fb5a280d67a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 21:57:41 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourcegroups/xTestDiskCreate8952?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestDiskCreate8952' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '25b87b63-4a15-4972-8b01-fb5a280d67a6',
  'x-ms-correlation-request-id': '25b87b63-4a15-4972-8b01-fb5a280d67a6',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215741Z:25b87b63-4a15-4972-8b01-fb5a280d67a6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 21:57:41 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourcegroups/xTestDiskCreate8952?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952\",\"name\":\"xTestDiskCreate8952\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-02-02T21:57:40.927Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '825e74d2-7673-4299-82ff-9d7b0a049dde',
  'x-ms-correlation-request-id': '825e74d2-7673-4299-82ff-9d7b0a049dde',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215744Z:825e74d2-7673-4299-82ff-9d7b0a049dde',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 21:57:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourcegroups/xTestDiskCreate8952?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952\",\"name\":\"xTestDiskCreate8952\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-02-02T21:57:40.927Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '825e74d2-7673-4299-82ff-9d7b0a049dde',
  'x-ms-correlation-request-id': '825e74d2-7673-4299-82ff-9d7b0a049dde',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215744Z:825e74d2-7673-4299-82ff-9d7b0a049dde',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 21:57:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715?api-version=2016-04-30-preview', '*')
  .reply(202, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '347',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/ed2dcf40-46c8-4ba2-a80e-5d05897a2145?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/ed2dcf40-46c8-4ba2-a80e-5d05897a2145?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131292439804223218',
  'x-ms-request-id': 'ed2dcf40-46c8-4ba2-a80e-5d05897a2145',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '61b17513-3f08-46e2-a209-a26d2c23c9e4',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215749Z:61b17513-3f08-46e2-a209-a26d2c23c9e4',
  date: 'Thu, 02 Feb 2017 21:57:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715?api-version=2016-04-30-preview', '*')
  .reply(202, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '347',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/ed2dcf40-46c8-4ba2-a80e-5d05897a2145?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/ed2dcf40-46c8-4ba2-a80e-5d05897a2145?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131292439804223218',
  'x-ms-request-id': 'ed2dcf40-46c8-4ba2-a80e-5d05897a2145',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '61b17513-3f08-46e2-a209-a26d2c23c9e4',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215749Z:61b17513-3f08-46e2-a209-a26d2c23c9e4',
  date: 'Thu, 02 Feb 2017 21:57:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/ed2dcf40-46c8-4ba2-a80e-5d05897a2145?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-02T21:57:49.8329063+00:00\",\r\n  \"endTime\": \"2017-02-02T21:57:50.0203801+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"properties\":{\"accountType\":\"Standard_LRS\",\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-02-02T21:57:49.8329063+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715\",\"name\":\"xplatDisk715\"}\r\n  },\r\n  \"name\": \"ed2dcf40-46c8-4ba2-a80e-5d05897a2145\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '723',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131292439804223218',
  'x-ms-request-id': '487679fa-70c6-4d33-89d5-55b0d9e61118',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '1eaf7b27-e921-4c52-8442-b5f0362a84e2',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215820Z:1eaf7b27-e921-4c52-8442-b5f0362a84e2',
  date: 'Thu, 02 Feb 2017 21:58:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/ed2dcf40-46c8-4ba2-a80e-5d05897a2145?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-02T21:57:49.8329063+00:00\",\r\n  \"endTime\": \"2017-02-02T21:57:50.0203801+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"properties\":{\"accountType\":\"Standard_LRS\",\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-02-02T21:57:49.8329063+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715\",\"name\":\"xplatDisk715\"}\r\n  },\r\n  \"name\": \"ed2dcf40-46c8-4ba2-a80e-5d05897a2145\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '723',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131292439804223218',
  'x-ms-request-id': '487679fa-70c6-4d33-89d5-55b0d9e61118',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '1eaf7b27-e921-4c52-8442-b5f0362a84e2',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215820Z:1eaf7b27-e921-4c52-8442-b5f0362a84e2',
  date: 'Thu, 02 Feb 2017 21:58:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-02-02T21:57:49.8329063+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715\",\r\n  \"name\": \"xplatDisk715\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '620',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131292439804223218',
  'x-ms-request-id': '54381b6e-b6ab-4f31-bb3a-82185cdbdf87',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '4e4c6538-fb3f-4c13-b118-0ff1e7344b1e',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215821Z:4e4c6538-fb3f-4c13-b118-0ff1e7344b1e',
  date: 'Thu, 02 Feb 2017 21:58:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"accountType\": \"Standard_LRS\",\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-02-02T21:57:49.8329063+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8952/providers/Microsoft.Compute/disks/xplatDisk715\",\r\n  \"name\": \"xplatDisk715\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '620',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e9309273-0eeb-49f7-82ac-4b3f4fa2919e_131292439804223218',
  'x-ms-request-id': '54381b6e-b6ab-4f31-bb3a-82185cdbdf87',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '4e4c6538-fb3f-4c13-b118-0ff1e7344b1e',
  'x-ms-routing-request-id': 'WESTUS2:20170202T215821Z:4e4c6538-fb3f-4c13-b118-0ff1e7344b1e',
  date: 'Thu, 02 Feb 2017 21:58:21 GMT',
  connection: 'close' });
 return result; }]];