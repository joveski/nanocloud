/**
 * Nanocloud turns any traditional software into a cloud solution, without
 * changing or redeveloping existing source code.
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

import ArrayDiff from 'nanocloud/lib/array-diff';

export default Ember.Controller.extend({
  groupController: Ember.inject.controller('protected.users.groups.group'),
  groupBinding: 'groupController.model',

  actions: {
    addMember(user) {
      let group = this.get('group');
      group.get('members').pushObject(user);
      group.save();
    },

    removeMember(user) {
      let group = this.get('group');
      let members = group.get('members');

      members.removeObject(user);
      group.save();
    },
  },

  reset() {
    let users = this.get('users');
    let members = this.get('group.members');

    let nonMembers = ArrayDiff.create({
      major: users,
      minor: members
    });

    this.set('nonMembers', nonMembers);
  }
});
