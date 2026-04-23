import NoUser from '@/components/Dashboard/NoUser';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DashBoardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    if (!user) {
        return <NoUser />
    }

    return (
        <div>
            <h2>This is dashing board</h2>
        </div>
    );
};

export default DashBoardPage;