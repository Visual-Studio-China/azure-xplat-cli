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
    registeredProviders: [],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"7377b87a-2df0-4e88-a346-ee4f0cfa8be6\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"7377b87a-2df0-4e88-a346-ee4f0cfa8be6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBNicAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2561',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7377b87a-2df0-4e88-a346-ee4f0cfa8be6"',
  'x-ms-request-id': 'f0b150df-5775-40fb-969a-2ddf620db829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f62ecfc6-c483-48e3-9e69-1880968411f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093731Z:f62ecfc6-c483-48e3-9e69-1880968411f8',
  date: 'Tue, 26 Jan 2016 09:37:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"7377b87a-2df0-4e88-a346-ee4f0cfa8be6\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"7377b87a-2df0-4e88-a346-ee4f0cfa8be6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            },\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBNicAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2561',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7377b87a-2df0-4e88-a346-ee4f0cfa8be6"',
  'x-ms-request-id': 'f0b150df-5775-40fb-969a-2ddf620db829',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f62ecfc6-c483-48e3-9e69-1880968411f8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093731Z:f62ecfc6-c483-48e3-9e69-1880968411f8',
  date: 'Tue, 26 Jan 2016 09:37:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"d1caeed3-6bc1-4f03-a5f6-21e54f8623d0\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"d1caeed3-6bc1-4f03-a5f6-21e54f8623d0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7bc788e9-a781-4041-a760-7b98f5a32fd5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/7bc788e9-a781-4041-a760-7b98f5a32fd5?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ef90e18d-ddf8-470d-b034-159ae0cdc730',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093731Z:ef90e18d-ddf8-470d-b034-159ae0cdc730',
  date: 'Tue, 26 Jan 2016 09:37:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic\",\r\n  \"etag\": \"W/\\\"d1caeed3-6bc1-4f03-a5f6-21e54f8623d0\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"priority\": \"high\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7d3cc380-e7af-41f0-82d6-a95f20801fac\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkInterfaces/xplatTestNic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"d1caeed3-6bc1-4f03-a5f6-21e54f8623d0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.25\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          },\r\n          \"primary\": true,\r\n          \"loadBalancerBackendAddressPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/backendAddressPools/LBAddPollnic\"\r\n            }\r\n          ],\r\n          \"loadBalancerInboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/loadBalancers/xplattestlbnic/inboundNatRules/xplattestInboundnic\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internlDnsN\",\r\n      \"internalFqdn\": \"internlDnsN.xgl0knfmv0xupp2oqapzfmvcce.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGrpCreateNic/providers/Microsoft.Network/networkSecurityGroups/xplatTestNSGNic\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7bc788e9-a781-4041-a760-7b98f5a32fd5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/7bc788e9-a781-4041-a760-7b98f5a32fd5?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ef90e18d-ddf8-470d-b034-159ae0cdc730',
  'x-ms-routing-request-id': 'WESTEUROPE:20160126T093731Z:ef90e18d-ddf8-470d-b034-159ae0cdc730',
  date: 'Tue, 26 Jan 2016 09:37:31 GMT',
  connection: 'close' });
 return result; }]];
