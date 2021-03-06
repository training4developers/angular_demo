/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const common_options_1 = require("../common_options");
const reporter_1 = require("../reporter");
const util_1 = require("./util");
/**
 * A reporter that writes results into a json file.
 */
let JsonFileReporter = JsonFileReporter_1 = class JsonFileReporter extends reporter_1.Reporter {
    constructor(_description, _path, _writeFile, _now) {
        super();
        this._description = _description;
        this._path = _path;
        this._writeFile = _writeFile;
        this._now = _now;
    }
    reportMeasureValues(measureValues) { return Promise.resolve(null); }
    reportSample(completeSample, validSample) {
        const stats = {};
        util_1.sortedProps(this._description.metrics).forEach((metricName) => {
            stats[metricName] = util_1.formatStats(validSample, metricName);
        });
        const content = JSON.stringify({
            'description': this._description,
            'stats': stats,
            'completeSample': completeSample,
            'validSample': validSample,
        }, null, 2);
        const filePath = `${this._path}/${this._description.id}_${this._now().getTime()}.json`;
        return this._writeFile(filePath, content);
    }
};
JsonFileReporter.PATH = new core_1.InjectionToken('JsonFileReporter.path');
JsonFileReporter.PROVIDERS = [JsonFileReporter_1, { provide: JsonFileReporter_1.PATH, useValue: '.' }];
JsonFileReporter = JsonFileReporter_1 = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(JsonFileReporter_1.PATH)),
    __param(2, core_1.Inject(common_options_1.Options.WRITE_FILE)),
    __param(3, core_1.Inject(common_options_1.Options.NOW))
], JsonFileReporter);
exports.JsonFileReporter = JsonFileReporter;
var JsonFileReporter_1;
//# sourceMappingURL=json_file_reporter.js.map