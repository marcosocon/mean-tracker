'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var ReportSchema = new Schema({
	title: String,
	description: String,
	hours: Number,
	date: Date,
	created_at: {
		type: Date,
		default: new Date()},
	user: ObjectId,
	billable: String
});

module.exports = mongoose.model('Report', ReportSchema);
