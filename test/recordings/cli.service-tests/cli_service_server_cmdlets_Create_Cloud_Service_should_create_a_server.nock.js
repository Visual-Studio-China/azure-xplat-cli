// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_CLOUD_SERVICE_TEST_LOCATION'] = 'undefined';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'c35d9851586a74178fa2b4fbe0a16f9c',
  date: 'Fri, 13 Mar 2015 02:24:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/testbuntu12</Url><ServiceName>testbuntu12</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdGJ1bnR1MTI=</Label><Status>Created</Status><DateCreated>2014-12-01T22:36:22Z</DateCreated><DateLastModified>2014-12-01T22:36:44Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testbuntu12</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/testwin12</Url><ServiceName>testwin12</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHdpbjEy</Label><Status>Created</Status><DateCreated>2015-02-16T17:29:13Z</DateCreated><DateLastModified>2015-02-16T17:47:39Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testwin12</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><DefaultWinRmCertificateThumbprint>2B1CE9E3BA1594B3B3137374A9BCD986FDE58F82</DefaultWinRmCertificateThumbprint><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2015-02-16T17:37:11Z</DateCreated><DateLastModified>2015-02-16T17:58:12Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>xplattestvm</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize><RoleSize>Standard_G1</RoleSize><RoleSize>Standard_G2</RoleSize><RoleSize>Standard_G3</RoleSize><RoleSize>Standard_G4</RoleSize><RoleSize>Standard_G5</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '5776',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '99c928450ea9757ab59f9b8c6ca987f1',
  date: 'Fri, 13 Mar 2015 02:24:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd12ac046eeda732ea50a4e95f8cb146a',
  date: 'Fri, 13 Mar 2015 02:24:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/compute/cli-cs5840',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '2215a7ebdc317531a5f5d884a90c163f',
  date: 'Fri, 13 Mar 2015 02:24:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6131547d36a074d89a24e2867f0be07a',
  date: 'Fri, 13 Mar 2015 02:24:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/cli-cs5840</Url><ServiceName>cli-cs5840</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>Y2xpLWNzNTg0MA==</Label><Status>Created</Status><DateCreated>2015-03-13T02:24:34Z</DateCreated><DateLastModified>2015-03-13T02:24:34Z</DateLastModified><ExtendedProperties/></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize><RoleSize>Standard_G1</RoleSize><RoleSize>Standard_G2</RoleSize><RoleSize>Standard_G3</RoleSize><RoleSize>Standard_G4</RoleSize><RoleSize>Standard_G5</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/testbuntu12</Url><ServiceName>testbuntu12</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdGJ1bnR1MTI=</Label><Status>Created</Status><DateCreated>2014-12-01T22:36:22Z</DateCreated><DateLastModified>2014-12-01T22:36:44Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testbuntu12</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/testwin12</Url><ServiceName>testwin12</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHdpbjEy</Label><Status>Created</Status><DateCreated>2015-02-16T17:29:13Z</DateCreated><DateLastModified>2015-02-16T17:47:39Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testwin12</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><DefaultWinRmCertificateThumbprint>2B1CE9E3BA1594B3B3137374A9BCD986FDE58F82</DefaultWinRmCertificateThumbprint><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2015-02-16T17:37:11Z</DateCreated><DateLastModified>2015-02-16T17:58:12Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>xplattestvm</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize><RoleSize>Standard_G1</RoleSize><RoleSize>Standard_G2</RoleSize><RoleSize>Standard_G3</RoleSize><RoleSize>Standard_G4</RoleSize><RoleSize>Standard_G5</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '7818',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '403f5833072775418fa1d7f036b5d23b',
  date: 'Fri, 13 Mar 2015 02:24:35 GMT' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['cli-cs5840'];};