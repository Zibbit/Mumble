/*
 
This file is part of Mumble application. 
Mumble is an open source project to create a real time communication system for humans and machines. 

Mumble is a free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3.0 of the License, or (at your option) any later version.

Mumble is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Mumble software.  
If not, see http://www.gnu.org/licenses/.
 
-------------------------------------------------------------------------------------------------------------------------
Author: Tibor Zsolt Pardi 
Copyright (C) 2016 The Mumble software development team
-------------------------------------------------------------------------------------------------------------------------
  
*/


/**
 * Implementation is based on https://github.com/kadtools/kad 
 * Huge thanks to Gordon Hall https://github.com/gordonwritescode the author of kad library!
 * @module kad
 * @license GPL-3.0
 * @author Gordon Hall gordon@gordonwritescode.com
 */

'use strict';

module.exports = {
  /**
   * Creates a blacklist filter for rejecting messages from defined nodeIDs
   * @function
   * @param {Array} nodeIDs - List of nodeIDs to blacklist
   * @returns {Function}
   */
  blacklist: require('./blacklist'),
  /**
   * Creates a whitelist filter for accepting messages from defined nodeIDs
   * @function
   * @param {Array} nodeIDs - List of nodeIDs to whitelist
   * @returns {Function}
   */
  whitelist: require('./whitelist'),
  /**
   * Allows the definition of method handlers not defined by kademlia
   * @function
   * @param {Object} protocol - Hash map of <method_name>:<handler_function>
   * @returns {Function}
   */
  protocol: require('./protocol')
};
