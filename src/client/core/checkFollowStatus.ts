import { ProfileState } from '@client/store';

export const checkFollowStatus = (profileState: ProfileState, item: any) => {
  return profileState && profileState.authUser && item && item.followBy.indexOf(profileState.authUser.id) !== -1 ? true : false;
};
