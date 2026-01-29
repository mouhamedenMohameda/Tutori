import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StudentTabParamList = {
  Map: { subject?: string };
  Learn: undefined;
  BAC: undefined;
  Chat: undefined;
  Graph: undefined;
};

export type StudentStackParamList = {
  StudentTabs: undefined;
  LearnSection: { subject: string; sectionId: string };
  BacChat: { exerciseId: string };
};

export type SchoolStackParamList = {
  Dashboard: undefined;
  Classrooms: undefined;
  Teachers: undefined;
  Students: undefined;
  Parents: undefined;
  Subjects: undefined;
};

export type TeacherStackParamList = {
  Dashboard: undefined;
  Assignments: undefined;
  Progress: undefined;
  Students: undefined;
};

export type ParentStackParamList = {
  Dashboard: undefined;
};

export type StudentStackScreenProps<T extends keyof StudentStackParamList> =
  NativeStackScreenProps<StudentStackParamList, T>;

export type SchoolStackScreenProps<T extends keyof SchoolStackParamList> =
  NativeStackScreenProps<SchoolStackParamList, T>;

export type TeacherStackScreenProps<T extends keyof TeacherStackParamList> =
  NativeStackScreenProps<TeacherStackParamList, T>;

export type ParentStackScreenProps<T extends keyof ParentStackParamList> =
  NativeStackScreenProps<ParentStackParamList, T>;
