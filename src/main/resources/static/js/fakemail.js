/*******************************************************************************
 * Copyright (C) 2017 Patrice Le Gurun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/

(function($) {
	'use strict';

	$.extend($.fn.dataTable.defaults, {
		'processing': true,
		'searching': false,
		'ajax': {
			'contentType': 'application/json',
			'dataSrc': 'content',
			'dataType': 'json',
		}
//    	dataField: 'content',
//    	totalField: 'totalElements',
//    	sidePagination: 'server',
//    	showColumns: true,
//    	showRefresh: true,
//    	idField: 'id',
//    	uniqueId: 'id',
//    	escape: true,
//    	cache: true
	});
//	$.extend($.fn.bootstrapTable.columnDefaults, {
//		sortable: true
//	});
})(jQuery);
