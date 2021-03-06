/* global define,describe,it */

define([
	'chai',
	'svgimagemap/SvgImageMap'
], function (
	chai,
	SvgImageMap
) {
	'use strict';
	var expect = chai.expect;


	describe('SvgImageMap', function () {

		var imageMap = new SvgImageMap({
				imageUrl: 'data/usb000ldeh_ciim.jpg',
				mapUrl: 'data/usb000ldeh_ciim_imap.html'
			});

		it('exists', function () {
			expect(imageMap).to.not.equal(null);
		});


		describe('_getPath()', function () {

			it('handles "circle" shapes', function () {
				var circle = imageMap._getPath({
					shape: 'circle',
					coords: ['X', 'Y', 'R'],
					href: '#HREF',
					title: 'TITLE'
				});

				expect(circle).to.equal(
						'<circle cx="X" cy="Y" r="R" xlink:href="#HREF">' +
							'<title>TITLE</title>' +
						'</circle>');
			});

			it('handles "rect" shapes', function () {
				var rect = imageMap._getPath({
					shape: 'rect',
					coords: [15, 16, 45, 47],
					href: '#HREF',
					title: 'TITLE'
				});

				expect(rect).to.equal(
						'<rect x="15" y="16" width="30" height="31" xlink:href="#HREF">' +
							'<title>TITLE</title>' +
						'</rect>');
			});

			it ('handles "poly" shapes', function () {
				var poly = imageMap._getPath({
					shape: 'poly',
					coords: [1, 2, 3, 4, 5, 6, 1, 2],
					href: '#HREF',
					title: 'TITLE'
				});

				expect(poly).to.equal(
						'<path d="M1,2L3,4L5,6L1,2Z" xlink:href="#HREF">' +
							'<title>TITLE</title>' +
						'</path>');
			});

		});

	});

});
