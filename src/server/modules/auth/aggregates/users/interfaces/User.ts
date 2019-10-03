import { Aggregate, IsAuditable, TimestampInDays, Gender } from '@app/core';

interface FacebookLogin {
  uid: string;
  email: string;
  provider: 'facebook';
}

interface GoogleLogin {
  uid: string;
  email: string;
  provider: 'google';
}

interface PhoneLogin {
  phoneNo: string;
  provider: 'phone';
}

interface EmailLogin {
  email: string;
  provider: 'email';
}

export interface User extends Aggregate, IsAuditable {
  _id: string;
  email: string;
  givenName?: string;
  familyName?: string;
  fullName?: string;
  phoneNo: string;
  address: string;
  description: string;
  avatarUrl?: string;
  province?: string;
  dob?: TimestampInDays;
  gender?: Gender;
  loginDetail: FacebookLogin | GoogleLogin | PhoneLogin | EmailLogin;
  roles: string[];
  completeSignUp: boolean;
  isActive: boolean;
  followBy: User[];
  counterFollow: number;
}
