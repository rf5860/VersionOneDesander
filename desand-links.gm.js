// ==UserScript==
// @name          VersionOneDesander
// @description	  Change Sandbox to Prod for VersionOne links.
// @include       http://aubne-s-dvl01b.dev.mincom.com:8080/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==
// Users
$("a[href*='VentyxSandbox']").each(function() {
	this.href = this.href.replace(/VentyxSandbox/, "VentyxProd");
	$(this).attr('onclick', $(this).attr('onclick').replace(/VentyxSandbox/, "VentyxProd"));
});