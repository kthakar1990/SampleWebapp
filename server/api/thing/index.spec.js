'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var thingCtrlStub = {
  index: 'thingCtrl.index',
  create: 'thingsCtrl.create'
};

var routerStub = {
  get: sinon.spy(),
  post: sinon.spy()
};

// require the index with our stubbed out modules
var thingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './thing.controller': thingCtrlStub
});

describe('Thing API Router:', function() {
  it('should return an express router instance', function() {
    thingIndex.should.equal(routerStub);
  });

  describe('GET /api/things', function() {
    it('should route to thing.controller.index', function() {
      routerStub.get
        .withArgs('/', 'thingCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/things', function() {
    it('should route to thing.controller.create', function() {
      routerStub.post
        .withArgs('/create', 'thingCtrl.create')
        .should.have.been.calledOnce;
    });
  });
});
