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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Automation/dsc\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '253',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'centralus:389ce5c4-d073-4014-9536-af593d8f9bfb',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd30babc9-dc14-47ce-80f6-9c51f9026b8b',
  'x-ms-routing-request-id': 'CENTRALUS:20160527T222006Z:d30babc9-dc14-47ce-80f6-9c51f9026b8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 27 May 2016 22:20:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc?api-version=2015-12-01')
  .reply(200, "{\"properties\":{\"state\":\"NotRegistered\"},\"id\":\"/subscriptions/2ee83a5c-bad2-4213-85d3-8c68a80fc359/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\",\"name\":\"Microsoft.Automation/dsc\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '253',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'centralus:389ce5c4-d073-4014-9536-af593d8f9bfb',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'd30babc9-dc14-47ce-80f6-9c51f9026b8b',
  'x-ms-routing-request-id': 'CENTRALUS:20160527T222006Z:d30babc9-dc14-47ce-80f6-9c51f9026b8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 27 May 2016 22:20:06 GMT',
  connection: 'close' });
 return result; }]];