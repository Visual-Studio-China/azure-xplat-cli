// This file has been autogenerated.

var profile = require('../../lib/util/profile');

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
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'TableEndpoint=http://yaxiatest.table.testch1.dnsdemo4.com/;QueueEndpoint=http://yaxiatest.queue.testch1.dnsdemo4.com/;FileEndpoint=http://yaxiatest.file.testch1.dnsdemo4.com/;BlobEndpoint=http://yaxiatest.blob.testch1.dnsdemo4.com/;AccountName=yaxiatest;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'storageclitesttable\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0adaa183-0002-0003-03aa-6675ea000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'http://yaxiatest.table.testch1.dnsdemo4.com/Tables(\'storageclitesttable\')',
  date: 'Wed, 25 Mar 2015 03:22:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/Tables(%27storageclitesttable%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"http://yaxiatest.table.testch1.dnsdemo4.com/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>http://yaxiatest.table.testch1.dnsdemo4.com/Tables('storageclitesttable')</id><category term=\"yaxiatest.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('storageclitesttable')\" /><title /><updated>2015-03-25T03:22:38Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>storageclitesttable</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '09c33aa1-0002-0000-3daa-66daa2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 25 Mar 2015 03:22:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bf518880-0002-0004-03aa-664e43000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:22:40 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/Tables')
  .reply(200, "{\"odata.metadata\":\"http://yaxiatest.table.testch1.dnsdemo4.com/$metadata#Tables\",\"value\":[{\"TableName\":\"storageclitesttable\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '089ec7ce-0002-0001-25aa-66bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 25 Mar 2015 03:22:41 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/Tables(%27storageclitesttable%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"http://yaxiatest.table.testch1.dnsdemo4.com/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>http://yaxiatest.table.testch1.dnsdemo4.com/Tables('storageclitesttable')</id><category term=\"yaxiatest.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('storageclitesttable')\" /><title /><updated>2015-03-25T03:22:42Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>storageclitesttable</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '40035bc2-0002-0002-4daa-6610d2000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 25 Mar 2015 03:22:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0adaa185-0002-0003-04aa-6675ea000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:22:40 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '09c33aa5-0002-0000-3eaa-66daa2000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:22:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitesttable?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bf518885-0002-0004-04aa-664e43000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:22:43 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>tablepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '089ec7e9-0002-0001-28ab-66bf9a000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>tablepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '40035bdd-0002-0002-4eab-6610d2000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:15 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitesttable?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0adaa19f-0002-0003-05ab-6675ea000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>tablepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>tablepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '089ec808-0002-0001-2dab-66bf9a000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:46 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>tablepolicy01</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>tablepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '40035bf8-0002-0002-50ab-6610d2000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitesttable?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0adaa1b8-0002-0003-07ab-6675ea000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:46 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>tablepolicy01</Id><AccessPolicy><Start>2015-12-01T00:00:00.0000000Z</Start><Expiry>2100-12-31T00:00:00.0000000Z</Expiry><Permission>raud</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>tablepolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>ad</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '09c33ada-0002-0000-41ab-66daa2000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitesttable?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bf5188b9-0002-0004-08ab-664e43000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 25 Mar 2015 03:23:49 GMT' });
 return result; }],
[],
[function (nock) { 
var result = 
nock('http://yaxiatest.table.testch1.dnsdemo4.com:80')
  .delete('/Tables(%27storageclitesttable%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '089ec80a-0002-0001-2eab-66bf9a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Wed, 25 Mar 2015 03:23:49 GMT' });
 return result; }]];