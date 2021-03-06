/**
 * Nanocloud turns any traditional software into a cloud solution, without * changing or redeveloping existing source code.
 *
 * Copyright (C) 2016 Nanocloud Software
 *
 * This file is part of Nanocloud.
 *
 * Nanocloud is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * Nanocloud is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General
 * Public License
 * along with this program.  If not, see
 * <http://www.gnu.org/licenses/>.
 */

import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  userId: DS.attr('string'),
  userMail: DS.attr('string'),
  userFirstname: DS.attr('string'),
  userLastname: DS.attr('string'),
  connectionId: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  machineId: DS.attr('string'),
  machineType: DS.attr('string'),
  machineDriver: DS.attr('string'),
  applicationName: DS.attr('string'),
  duration: Ember.computed('startDate', 'endDate', function() {
    var start = window.moment(this.get('startDate'));
    var end = window.moment(this.get('endDate'));
    return end.diff(start);
  }),
  userFullName: Ember.computed('userFirstname', 'userLastname', function() {
    return this.get('userFirstname') + ' ' + this.get('userLastname');
  }),
  isActive: Ember.computed('endDate', function() {
    return this.get('endDate').toString() === 'Invalid Date';
  })
});
