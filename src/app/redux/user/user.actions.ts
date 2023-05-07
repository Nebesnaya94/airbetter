import { createActionGroup, props } from '@ngrx/store';
import { UserState } from './user.state';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Set Email': props<{
      email: UserState['email'];
    }>(),
    'Set Name': props<{
      name: UserState['name'];
    }>(),
    'Set Phone': props<{
      phone: UserState['phone'];
    }>(),
    'Set Gender': props<{
      gender: UserState['gender'];
    }>(),
    'Set Country': props<{
      country: UserState['country'];
    }>(),
  },
});
