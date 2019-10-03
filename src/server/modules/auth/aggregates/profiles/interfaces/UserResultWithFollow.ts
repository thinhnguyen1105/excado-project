export interface UserResultWithFollow {
  _id: string;
  email: string;
  familyName: string;
  givenName: string;
  fullName: string;
  phoneNo: string;
  address: string;
  description: string;
  avatarUrl: string;
  dob: number;
  gender: string;
  loginDetail: any;
  roles: string[];
  completeSignUp: boolean;
  isActive: boolean;
  createdAt: number;
  createdBy: number;
  isFollowing: boolean;
  followerCount: number;
}
