'use strict';

let angular = require('angular');

require('./wizard/templateSelection.html');

module.exports = angular.module('spinnaker.serverGroup.configure.gce', [
  require('../../../account/account.module.js'),
  require('./wizard/deployInitializer.controller.js'),
  require('../../../caches/infrastructureCaches.js'),
  require('./serverGroupConfiguration.service.js'),
  require('./wizard/ServerGroupBasicSettings.controller.js'),
  require('./wizard/ServerGroupLoadBalancers.controller.js'),
  require('./wizard/ServerGroupCapacity.controller.js'),
  require('./wizard/ServerGroupInstanceArchetype.controller.js'),
  require('./wizard/ServerGroupInstanceType.controller.js'),
  require('./wizard/ServerGroupAdvancedSettings.controller.js'),
  require('./serverGroupBasicSettingsSelector.directive.js'),
  require('./serverGroupLoadBalancersSelector.directive.js'),
  require('./serverGroupCapacitySelector.directive.js'),
  require('./serverGroup.transformer.service.js'),
  require('./serverGroupAdvancedSettingsSelector.directive.js'),

])
.name;
