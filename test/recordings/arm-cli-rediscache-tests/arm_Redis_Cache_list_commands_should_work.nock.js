// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2ee83a5c-bad2-4213-85d3-8c68a80fc359',
    name: 'Windows Azure MSDN - Visual Studio Ultimate',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'eed40b28-28f0-4583-bece-05a89fb86e85',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestCacheRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Cache/Redis/?api-version=2015-08-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '4b62be92-a7e4-48e5-9303-93cb7030d48f',
  'x-ms-correlation-request-id': '4b62be92-a7e4-48e5-9303-93cb7030d48f',
  'x-ms-routing-request-id': 'WESTUS:20160529T085908Z:4b62be92-a7e4-48e5-9303-93cb7030d48f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 May 2016 08:59:07 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Cache/Redis/?api-version=2015-08-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '4b62be92-a7e4-48e5-9303-93cb7030d48f',
  'x-ms-correlation-request-id': '4b62be92-a7e4-48e5-9303-93cb7030d48f',
  'x-ms-routing-request-id': 'WESTUS:20160529T085908Z:4b62be92-a7e4-48e5-9303-93cb7030d48f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 May 2016 08:59:07 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/?api-version=2015-08-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '82a93d23-b78e-4bf4-a81d-8cf0f41918ee',
  'x-ms-correlation-request-id': '82a93d23-b78e-4bf4-a81d-8cf0f41918ee',
  'x-ms-routing-request-id': 'WESTUS:20160529T085908Z:82a93d23-b78e-4bf4-a81d-8cf0f41918ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 May 2016 08:59:07 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/?api-version=2015-08-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '82a93d23-b78e-4bf4-a81d-8cf0f41918ee',
  'x-ms-correlation-request-id': '82a93d23-b78e-4bf4-a81d-8cf0f41918ee',
  'x-ms-routing-request-id': 'WESTUS:20160529T085908Z:82a93d23-b78e-4bf4-a81d-8cf0f41918ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 29 May 2016 08:59:07 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];