'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ReportSchema = new Schema({
	title: String,
	description: String,
	hours: Number,
	created_at: {
		type: Date,
		default: new Date()},
	billable: Boolean
});

module.exports = mongoose.model('Report', ReportSchema);
