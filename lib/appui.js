

import $ from 'jquery';
import ko from "knockout";
import i18next from 'i18next';
import i18nextko from "./bindinghandlers/i18next-ko";
import AppSrvc from 'appsrvc';
import appevents from "appevents";
import apputils from "apputils";
import appsrvc from "appsrvc";
import user from "user";
import accounts from "accounts";
import peercomm from "peercomm";
import bootbox from "makeusabrew/bootbox"; 
import bindings from "./bindinghandlers/bindings";
import WebrtcData from "webrtcdata";
import aboutview from './app/views/about/about.html!text';
import database from "database";
import mumblenet from './app/mumblenet';

function MainVM() {

    function validate_page(param) {
        var page = param;
        if (page == "connectpublic") {
            var accountlist = accounts.list;
            if (!accountlist || !accountlist.length) {
                // there is no account exists -> navigate to new account
                page = "createaccount";
            }
        }
        else if (page == "changepassword") {
            if (!appsrvc.username || !appsrvc.account_connected) {
                mumble.notify.error("First initialize the account by connecting to the Mumble network");
                return "initui";
            }

            var curr_account = accounts.get_account(appsrvc.username);
            if (!curr_account) {
                mumble.notify.error("The account is not initialized. First initialize the account by connecting to the Mumble network");
                page = "initui";
            }
        }

        return page;
    }

    var viewModel = {
        route: ko.observable({ page: 'initui' }),

        nav: function (page, params) {
            var navroute = {
                "page": "",
                "params": params
            };

            if (page) {
                navroute.page = validate_page(page);
            }
            else {
                if (AppSrvc.account_connected) {
                    navroute.page = mumble.view.mainapp || "mumble-app";
                }
                else {
                    navroute.page = "initui";
                }
            }

            viewModel.route(navroute);
        },

        cmd: function (action) {
            if (action) {
                switch (action) {
                    case 'delete-account':
                        break;
                    default:
                        appevents.cmd(action);
                        break;
                }
            }
        },

        onNavigate: function (page, params) {
            var nav = {
                "page": "",
                "params": params
            };

            if (page) {
                // validate the routes  
                nav.page = validate_page(page);
            }
            else {
                if (AppSrvc.account_connected) {
                    console.log("loading mumble app");
                    nav.page = mumble.view.mainapp || "mumble-app";
                }
                else {
                    nav.page = "initui";
                }
            }

            viewModel.route(nav);
        },

        backupContacts: function () {
            apputils.backup_contacts();
        },

        restoreContacts: function () {
            apputils.restore_contacts(function () {
                console.log("contacts restored")
            });
        },

        backupAccount: function () {
            apputils.backup_account();            
        },

        restoreAccount: function () {
            console.log("cmd: restoreAccount");
            apputils.restore_account(function () {
            });
        },

        about: function () {
            var box = bootbox.dialog({
                title: "About Mumble",
                message: aboutview,
                buttons: {
                    close: {
                        label: "Close",
                        className: "btn-default",
                        callback: function () {
                        }
                    }
                }
            });

            box.init(function () {
                $(".modal-header").css("padding", "4px 8px 4px 12px");
                $("#lbl_app_version").text(mumble.globals.version);
            });
        },

        clearDatabase: function () {
            apputils.clear_database();
        },

        checkUpdates: function () {   
            apputils.getversion(function (err, version) {
                if (err || !version) {
                    return mumble.notify.error("Error in retrieving version from the repository");
                }

                try {
                    var tverarr = mumble.globals.version.split(".");
                    var strver = tverarr.join('');
                    var numver = parseInt(strver);
                    var trcvver = version.split('.');
                    var rcvnum = trcvver.join('');
                    var rcvver = parseInt(rcvnum);
                    if (numver >= rcvver) {
                        mumble.notify.success("Your Mumble version v" + mumble.globals.version + " is up to date, there is no new version available.");
                    }
                    else {
                        mumble.notify.success("There is a new Mumble version v" + version + " available for download. Your Mumble current version is v" + mumble.globals.version);
                    }
                }
                catch (e) {
                    mumble.notify.error_popup("Error in populating version: %j", e);
                }                
            });         
        },

        offline_contact_request: function () {            
            if (!AppSrvc.account_connected) {
                return mumble.notify.error("First connect to the Mumble network");
            }

            appevents.dispatch("display-view", "offline-contact-request");
        },

        accept_contact_request: function () {
            if (!AppSrvc.account_connected) {
                return mumble.notify.error("First connect to the Mumble network");
            }

            appevents.dispatch("display-view", "accept-contact-request");
        }
    };

    return viewModel;
}

export default function() {
    return new Promise((resolve, reject) => {
        // initialize the locals/languages binding handlers
        var language = i18next.language;
        i18nextko.init(ko, $, (language || "en"));

        // initialize the knockout binding handlers
        bindings.init();

        // initialize the main viewmodel
        var vm = new MainVM();
        appevents.onNavigate(vm.onNavigate);        

        // KO data binding
        ko.applyBindings(vm);

        resolve();
    });       
}



