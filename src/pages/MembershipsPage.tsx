import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import Button from '../components/ui/Button';
import MembershipCard from '../components/membership/MembershipCard';
import { memberships } from '../data/mockData';
import { Membership } from '../types';

const MembershipsPage: React.FC = () => {
  const [editingMembership, setEditingMembership] = useState<Membership | null>(null);

  const handleEdit = (membership: Membership) => {
    setEditingMembership(membership);
    // In a real app, this would navigate to an edit form or open a modal
    console.log('Edit membership:', membership);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader 
        title="Memberships" 
        description="Manage your gym membership plans"
        action={
          <Link to="/memberships/new">
            <Button variant="primary\" leftIcon={<Plus size={16} />}>
              Create Plan
            </Button>
          </Link>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {memberships.map((membership, idx) => (
          <MembershipCard 
            key={membership.id} 
            membership={membership}
            isPopular={idx === 1}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipsPage;