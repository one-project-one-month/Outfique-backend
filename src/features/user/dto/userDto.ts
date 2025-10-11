import { Gender, PrivacyLevel } from '../../../../generated/client';

export interface CreateUserDto {
  name: string;
  email: string;
  emailVerified?: boolean;
  age?: number;
  height?: number;
  birthday: Date;
  gender?: Gender;
  isActive?: boolean;
  onboardingCompleted?: boolean;
  privacyLevel?: PrivacyLevel;
  timezone?: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  emailVerified?: boolean;
  age?: number;
  height?: number;
  birthday?: Date;
  gender?: Gender;
  isActive?: boolean;
  onboardingCompleted?: boolean;
  privacyLevel?: PrivacyLevel;
  timezone?: string;
}
