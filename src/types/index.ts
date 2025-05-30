export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'member' | 'gym_owner' | 'trainer';
  avatar?: string;
}

export interface GymOwner {
  id: string;
  name: string;
  email: string;
  phone: string;
  gymName: string;
  location: string;
  joinDate: string;
  status: 'active' | 'inactive';
  lastLogin?: string;
  subscriptionStatus: 'trial' | 'active' | 'expired';
  revenue: number;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  membershipId: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
  memberId: string; // Unique member ID for check-in
}

export interface Trainer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  specialization: string;
  experience: string;
  joinDate: string;
  status: 'active' | 'inactive';
  trainerId: string; // Unique trainer ID
}

export interface Membership {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  features: string[];
  color: string;
}

export interface Attendance {
  id: string;
  memberId: string;
  memberName: string;
  checkIn: string;
  checkOut: string | null;
  duration?: number;
  uniqueId: string; // Member's unique ID used for check-in
}

export interface DashboardSummary {
  totalMembers: number;
  activeMembers: number;
  newMembersToday: number;
  checkedInToday: number;
  membershipStats: {
    name: string;
    value: number;
  }[];
  recentAttendance: Attendance[];
}

export interface AdminStats {
  totalGymOwners: number;
  activeGymOwners: number;
  totalRevenue: number;
  monthlyRevenue: number;
  recentGymOwners: GymOwner[];
  ownersByStatus: {
    name: string;
    value: number;
  }[];
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
}