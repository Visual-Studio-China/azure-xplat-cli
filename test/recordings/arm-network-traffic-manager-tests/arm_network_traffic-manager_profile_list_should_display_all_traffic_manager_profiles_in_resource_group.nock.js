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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles?api-version=2015-11-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":null,\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\"},\"endpoints\":[]}}]}", { 'cache-control': 'private',
  'content-length': '626',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9fb2afad-e5d0-40da-87af-a5a45d3fbfa4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'd65487b7-05d0-44dc-a252-e41732f90ce3',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143535Z:d65487b7-05d0-44dc-a252-e41732f90ce3',
  date: 'Wed, 07 Dec 2016 14:35:35 GMT' });
 return result; }]];