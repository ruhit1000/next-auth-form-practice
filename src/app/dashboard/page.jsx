import NoUser from '@/components/Dashboard/NoUser';
import Dashboard from '@/components/Dashboard/Dashboard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DashBoardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    if (user) {
        return <Dashboard user={user} />
    }
    return <NoUser />;
};

export default DashBoardPage;