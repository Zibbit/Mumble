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

import i18next from 'i18next';

export default function () {
    return new Promise((resolve, reject) => {
        i18next.init({
            lng: 'en',
            resources: {
                en: {
                    translation: {
                        "appname-title": "Mumble",
                        "appname-sub-title": "Decentralized, peer-to-peer, secure communication system for humans and machines",
                        "appload-mumble": "Load Mumble",
                        "appload-application": "Load application",
                        "appload-components": "Loading UI components",
                        "appload-datadir": "Create application data directory",
                        "appload-databind": "Create data binders",
                        "appload-database": "Load database",
                        "appload-logger": "Creating application logger",
                        "appload-settings": "Load settings from local database",
                        "appload-accounts": "Load accounts from local database",
                        "appload-apputils": "Create application utility handler",
                        "appload-contacts": "Load contacts from local database",
                        "appload-contact-handler": "Initialize contacts handler",
                        "appload-events": "Create event handlers",
                        "appload-kademlia": "Load Kademlia DHT",
                        "appload-mumbleconn": "Connecting to Mumble network",
                        "appload-complete": "Application resource loading has been completed",
                        "lbl-initui-connect": "Connect to Public Mumble",
                        "lbl-initui-connectpriv": "Connect to Private Mumble",
                        "lbl-initui-newaccount": "New Account",
                        "lbl-initui-initexisting": "Initialize Existing Account",
                        "lbl-initui-restore": "Restore Account",
                        "lbl-createaccount-create": "Create new Mumble account",
                        "lbl-connectto-public-net": "Connect to Public Mumble Network",
                        "lbl-connect": "Connect",
                        "lbl-mumbleacc": "Mumble account",
                        "lbl-saved-accounts": "Saved accounts",
                        "lbl-privkeypassword": "Private key password",
                        "lbl-confirmpassword": "Confirm private key password",
                        "lbl-changepwd-title": "Change your Mumble password",
                        "lbl-changepwd-change": "Change password",
                        "errmsg-createaccount-accountname": "The account name must be between 6-20 characters and it can only contain alphanumeric characters (letters a-z, A-Z and numbers 0-9)",
                        "errmsg-createaccount-exists": "The account already exists in your account list.",
                        "errmsg-createaccount-pwdrequired": "Password is required",
                        "errmsg-createaccount-pwdlength": "The password must be at least 8 characters",
                        "errmsg-createaccount-nospaceallowed": "The password must not contain empty space",
                        "errmsg-createaccount-lowercaseneed": "The password must contain at least one lower case letter",
                        "errmsg-createaccount-uppercaseneed": "The password must contain at least one upper case letter",
                        "errmsg-createaccount-digitneed": "The password must contain at least one digit",
                        "errmsg-createaccount-specialcharneed": "The password must contain at least one special character",
                        "errmsg-createaccount-pwdconfirm": "Password confirm input value is required",
                        "errmsg-createaccount-pwdconfirmmatch": "The password and its confirm are not the same",
                        "errmsg-connectaccount-select": "Select an account from the saved account list",
                        "appmsg-nopeer-wsuseprompt": "Unable to connect via the TCP peer connection. Most likely your firewall, port forwarding or UPnP configuration is blocking the communication via TCP.\nWould you like to use WebSocket connection? Your signalling and contact discovery will be performed by a WebSocket server, but your video, audio, text communication and file sending will still be fully encrypted and peer-to-peer.",
                        "appmsg-askwspublish": "Would you like to publish data to Mumble WebSocket hubs? Using WebSocket enables communication with users who are unable to etablish a TCP connection. Using WS signalling your video, audio, text communication and file sending will still be fully encrypted and peer-to-peer."
                    }
                },
                de: {
                    translation: {
                        "appname-title": "German Mumble",
                        "appname-sub-title": "German Decentralized, peer-to-peer, secure communication system for humans and machines",
                        "appload-mumble": "German Load Mumble",
                        "appload-locals": "German Load localization resources",
                        "appload-database": "German Load database",
                        "appload-logger": "German Load application logger",
                        "appload-kademlia": "German Load Kademlia DHT",
                        "lbl-initui-connect": "Verbunden mit Mumble",
                        "lbl-initui-connectpriv": "Verbunden mit Privatgelände Mumble",
                        "lbl-initui-newaccount": "Neues Konto",
                        "lbl-initui-initexisting": "Initialisieren Bestehenden Konto",
                        "lbl-initui-restore": "Wiederherstellung Konto"
                    }
                }
            }
        },
        (err, t) => {
            if (!err) {
                console.log('Local resources loaded');
                resolve();
            }
            else {
                reject(err);
            }
        });
    }); 
}


