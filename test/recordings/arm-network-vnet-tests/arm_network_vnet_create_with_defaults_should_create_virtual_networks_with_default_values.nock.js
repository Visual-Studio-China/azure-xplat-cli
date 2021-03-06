// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '30bf1d71-41fd-4b90-8d23-e443898dd59c',
  'x-ms-correlation-request-id': '30bf1d71-41fd-4b90-8d23-e443898dd59c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095016Z:30bf1d71-41fd-4b90-8d23-e443898dd59c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:50:16 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/virtualNetworksDefaultName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '30bf1d71-41fd-4b90-8d23-e443898dd59c',
  'x-ms-correlation-request-id': '30bf1d71-41fd-4b90-8d23-e443898dd59c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095016Z:30bf1d71-41fd-4b90-8d23-e443898dd59c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 24 Jan 2017 09:50:16 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"482b2ffd-50a1-4112-9bf5-86837c3a0899\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e4f3edd0-6bb1-4105-be54-e26b3d2777b1\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '608',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'fd76675e-7610-4ea1-b901-5638456f6240',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/fd76675e-7610-4ea1-b901-5638456f6240?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ef4b0df9-6c5f-4601-8d41-a5269d8c7f8b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095019Z:ef4b0df9-6c5f-4601-8d41-a5269d8c7f8b',
  date: 'Tue, 24 Jan 2017 09:50:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"482b2ffd-50a1-4112-9bf5-86837c3a0899\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"e4f3edd0-6bb1-4105-be54-e26b3d2777b1\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '608',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'fd76675e-7610-4ea1-b901-5638456f6240',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/fd76675e-7610-4ea1-b901-5638456f6240?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ef4b0df9-6c5f-4601-8d41-a5269d8c7f8b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095019Z:ef4b0df9-6c5f-4601-8d41-a5269d8c7f8b',
  date: 'Tue, 24 Jan 2017 09:50:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/fd76675e-7610-4ea1-b901-5638456f6240?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5c41c7f8-c8ff-489c-88b1-ecc8ef0881ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14910',
  'x-ms-correlation-request-id': 'b0ac81ae-1dd0-4587-a1b2-558d10081abb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095050Z:b0ac81ae-1dd0-4587-a1b2-558d10081abb',
  date: 'Tue, 24 Jan 2017 09:50:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/fd76675e-7610-4ea1-b901-5638456f6240?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5c41c7f8-c8ff-489c-88b1-ecc8ef0881ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14910',
  'x-ms-correlation-request-id': 'b0ac81ae-1dd0-4587-a1b2-558d10081abb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095050Z:b0ac81ae-1dd0-4587-a1b2-558d10081abb',
  date: 'Tue, 24 Jan 2017 09:50:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4f3edd0-6bb1-4105-be54-e26b3d2777b1\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6"',
  'x-ms-request-id': 'b19dc138-efec-4ab1-8fd5-aa5594f256e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': '3cebcef1-275e-488c-9f1e-abcc2b0abb3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095051Z:3cebcef1-275e-488c-9f1e-abcc2b0abb3e',
  date: 'Tue, 24 Jan 2017 09:50:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4f3edd0-6bb1-4105-be54-e26b3d2777b1\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6"',
  'x-ms-request-id': 'b19dc138-efec-4ab1-8fd5-aa5594f256e2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': '3cebcef1-275e-488c-9f1e-abcc2b0abb3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095051Z:3cebcef1-275e-488c-9f1e-abcc2b0abb3e',
  date: 'Tue, 24 Jan 2017 09:50:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4f3edd0-6bb1-4105-be54-e26b3d2777b1\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6"',
  'x-ms-request-id': 'cd73cacc-5a5d-4782-9d6d-8dad435edfff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '99d7db7b-4b1f-4137-bd99-a59eeb31e60f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095052Z:99d7db7b-4b1f-4137-bd99-a59eeb31e60f',
  date: 'Tue, 24 Jan 2017 09:50:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworksDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName\",\r\n  \"etag\": \"W/\\\"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e4f3edd0-6bb1-4105-be54-e26b3d2777b1\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '609',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"14eb8e33-e0c1-4d80-9405-4d664fc8f3c6"',
  'x-ms-request-id': 'cd73cacc-5a5d-4782-9d6d-8dad435edfff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '99d7db7b-4b1f-4137-bd99-a59eeb31e60f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095052Z:99d7db7b-4b1f-4137-bd99-a59eeb31e60f',
  date: 'Tue, 24 Jan 2017 09:50:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/e34135fa-6058-4bd5-b6ad-97d139abb509?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'e34135fa-6058-4bd5-b6ad-97d139abb509',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e34135fa-6058-4bd5-b6ad-97d139abb509?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '084ab9a1-a92a-4ddf-8ae6-bf86804d97c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095054Z:084ab9a1-a92a-4ddf-8ae6-bf86804d97c6',
  date: 'Tue, 24 Jan 2017 09:50:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworksDefaultName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/e34135fa-6058-4bd5-b6ad-97d139abb509?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'e34135fa-6058-4bd5-b6ad-97d139abb509',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e34135fa-6058-4bd5-b6ad-97d139abb509?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '084ab9a1-a92a-4ddf-8ae6-bf86804d97c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095054Z:084ab9a1-a92a-4ddf-8ae6-bf86804d97c6',
  date: 'Tue, 24 Jan 2017 09:50:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e34135fa-6058-4bd5-b6ad-97d139abb509?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '116c7a4b-f521-40c7-bd66-59d3523f4816',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c76dd37b-23e8-486b-a53c-5189d849cbd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095125Z:c76dd37b-23e8-486b-a53c-5189d849cbd9',
  date: 'Tue, 24 Jan 2017 09:51:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e34135fa-6058-4bd5-b6ad-97d139abb509?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '116c7a4b-f521-40c7-bd66-59d3523f4816',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c76dd37b-23e8-486b-a53c-5189d849cbd9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170124T095125Z:c76dd37b-23e8-486b-a53c-5189d849cbd9',
  date: 'Tue, 24 Jan 2017 09:51:24 GMT',
  connection: 'close' });
 return result; }]];