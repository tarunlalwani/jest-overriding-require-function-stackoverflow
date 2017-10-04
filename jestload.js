#!/usr/bin/env node
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const jestRuntime = require("jest-runtime");
// const old_createRequireImplementation = jestRuntime.prototype._createRequireImplementation;
//
// oldrequireModuleOrMock = jestRuntime.prototype.requireModuleOrMock;
oldexecModule = jestRuntime.prototype._execModule;

jestRuntime.prototype._execModule = function (localModule, options) {
    if (localModule.id.indexOf(".mjs") > 0) {
        // console.log(localModule);
        localModule.exports = require("@std/esm")(localModule)(localModule.id);
        return localModule;
    }
    return oldexecModule.apply(this, [localModule, options]);
};

// jestRuntime.prototype.requireModuleOrMock = function (from, moduleName) {
//
//     // if (moduleName.indexOf(".mjs") > 0)
//     // {
//     //     require = require("@std/esm")(module);
//     //     return require(moduleName);
//     // }
//     return oldrequireModuleOrMock.apply(this, [from, moduleName]);
// };
//
// jestRuntime.prototype._createRequireImplementation = function (from,
//                                                                options) {
//     return old_createRequireImplementation.apply(this, [from, options]);
// };

cli = require('jest/bin/jest');

