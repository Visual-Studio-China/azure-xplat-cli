// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'australiasoutheast';
  process.env['SSHCERT'] = 'test/containerCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9791master\",\r\n      \"fqdn\": \"xplatcontainer9791master.australiasoutheast.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9791a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9791a2\",\r\n        \"fqdn\": \"xplatcontainer9791a2.australiasoutheast.cloudapp.azure.com\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791\",\r\n  \"name\": \"xplatContainer9791\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '8c4b1cae-e613-45b2-9955-5c0b0fbbb1b6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '88d3ff72-2bc3-4b36-8d31-387986e5f751',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T024006Z:88d3ff72-2bc3-4b36-8d31-387986e5f751',
  date: 'Mon, 11 Apr 2016 02:40:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"orchestratorProfile\": {\r\n      \"orchestratorType\": \"DCOS\"\r\n    },\r\n    \"masterProfile\": {\r\n      \"count\": 1,\r\n      \"dnsPrefix\": \"xplatContainer9791master\",\r\n      \"fqdn\": \"xplatcontainer9791master.australiasoutheast.cloudapp.azure.com\"\r\n    },\r\n    \"agentPoolProfiles\": [\r\n      {\r\n        \"name\": \"xplatContainer9791a1\",\r\n        \"count\": 2,\r\n        \"vmSize\": \"Standard_A1\",\r\n        \"dnsPrefix\": \"xplatContainer9791a2\",\r\n        \"fqdn\": \"xplatcontainer9791a2.australiasoutheast.cloudapp.azure.com\"\r\n      }\r\n    ],\r\n    \"linuxProfile\": {\r\n      \"ssh\": {\r\n        \"publicKeys\": [\r\n          {\r\n            \"keyData\": \"MIIDszCCApugAwIBAgIJALBV9YJCF/tAMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\\r\\naWRnaXRzIFB0eSBMdGQwHhcNMTUwMzIyMjI1NDQ5WhcNMTYwMzIxMjI1NDQ5WjBF\\r\\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\\r\\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIB\\r\\nCAKCAQEAxDC+OfmB+tQ+P1MLmuuW2hJLdcK8m4DLgAk5l8bQDNBcVezt+bt/ZFMs\\r\\nCHBhfTZG9O9yqMn8IRUh7/7jfQm6DmXCgtxj/uFiwT+F3out5uWvMV9SjFYvu9kJ\\r\\nNXiDC2u3l4lHV8eHde6SbKiZB9Jji9FYQV4YiWrBa91j9I3hZzbTL0UCiJ+1PPoL\\r\\nRx/T1s9KT5Wn8m/z2EDrHWpetYu45OA7nzyIFOyQup5oWadWNnpk6HkCGutl9t9b\\r\\ncLdjXjXPm9wcy1yxIB3Dj/Y8Hnulr80GJlUtUboDm8TExGc4YaPJxdn0u5igo5gZ\\r\\nc6qnqH/BMd1nsyICx6AZnKBXBycoSQIBI6OBpzCBpDAdBgNVHQ4EFgQUzWhrCCDs\\r\\nClANCGlKZ64rHp2BDn0wdQYDVR0jBG4wbIAUzWhrCCDsClANCGlKZ64rHp2BDn2h\\r\\nSaRHMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQK\\r\\nExhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGSCCQCwVfWCQhf7QDAMBgNVHRMEBTAD\\r\\nAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQCUaJnX0aBzwBkbJrBS5YvkZnNKLdc4oHgC\\r\\n/Nsr/9pwXzFYYXkdqpTw2nygH0C0WuPVVrG3Y3EGx/UIGDtLbwMvZJhQN9mZH3oX\\r\\n+c3HGqBnXGuDRrtsfsK1ywAofx9amZfKNk/04/Rt3POdbyD1/AOADw2zMokbIapX\\r\\n+nMDUtD/Tew9+0qU9+dcFMrFE1N4utlrFHlrLFbiCA/eSegP6gOeu9mqZv7UHIz2\\r\\noe6IQTw7zJF7xuBIzTYwjOCM197GKW7xc4GU4JZIN+faZ7njl/fxfUNdlqvgZUUn\\r\\nkfdrzU3PZPl0w9NuncgEje/PZ+YtZvIsnH7MLSPeIGNQwW6V2kc8\"\r\n          }\r\n        ]\r\n      },\r\n      \"adminUsername\": \"azureuser\"\r\n    },\r\n    \"diagnosticsProfile\": {\r\n      \"vmDiagnostics\": {\r\n        \"enabled\": true\r\n      }\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate5934/providers/Microsoft.ContainerService/containerServices/xplatContainer9791\",\r\n  \"name\": \"xplatContainer9791\",\r\n  \"type\": \"Microsoft.ContainerService/ContainerServices\",\r\n  \"location\": \"australiasoutheast\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2531',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '6d8fb542-dd65-48cb-9954-9a384a89dc05_131031808034968975',
  'x-ms-request-id': '8c4b1cae-e613-45b2-9955-5c0b0fbbb1b6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '88d3ff72-2bc3-4b36-8d31-387986e5f751',
  'x-ms-routing-request-id': 'BRAZILUS:20160411T024006Z:88d3ff72-2bc3-4b36-8d31-387986e5f751',
  date: 'Mon, 11 Apr 2016 02:40:06 GMT',
  connection: 'close' });
 return result; }]];