/*

This file is part of Mumble application. 
Mumble is an open source project to create a real time communication system for humans and machines. 

Mumble is a free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3.0 of the License, or (at your option) any later version.

Mumble is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty 
of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Mumble software.  
If not, see http://www.gnu.org/licenses/.
 
-------------------------------------------------------------------------------------------------------------------------
Author: Tibor Zsolt Pardi 
Copyright (C) 2016 The Mumble software development team
-------------------------------------------------------------------------------------------------------------------------

*/

'use strict';

(function () {

    define(
        ['knockout', 'user', 'appsrvc', 'mumblenet', 'settings', './netinfo.html!text'],
        function (ko, user, appsrvc, mumblenet, settings, template) {

        function NetInfoVm(params) {
            this.account = ko.observable(user.name);
            this.public_key = ko.observable(user.public_key);
            this.seeds = ko.observableArray([]);
            this.port = ko.observable(appsrvc.port);
            this.address = ko.observable(appsrvc.address);
            this.upnpaddress = ko.observable(appsrvc.upnpaddress);
            this.upnpgateway = ko.observable(appsrvc.upnpgateway);
            this.transport = ko.observable(appsrvc.transport);
            this.net_connected = ko.observable(appsrvc.net_connected);
            this.iswspublish = ko.observable(settings.wspublish);
            this.wshub = ko.observable((mumble.globals.wsprotocol || "http") + '://' + settings.wshost + ":" + settings.wsport);

            var seedarray = mumblenet.getseeds();
            if (seedarray) {
                this.seeds(seedarray);
            }
        }           

        return {
            viewModel: NetInfoVm,
            template: template
        };
    });

}());



