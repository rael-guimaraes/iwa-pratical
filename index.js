const express = require ('express'),
      fs= reqire('fs'),
      http = reqire('http'),
      path = require('path'),
      xml2js = require('xml2js'),
      xmlParse = require('xslt-processor').xmlParse,
      xsltProcess = require('xslt-processor').xsltProcess;


const router = express(),
      server = http.createServer(router);

router.use(express.static(path.resolve(__dirname,'views')));
