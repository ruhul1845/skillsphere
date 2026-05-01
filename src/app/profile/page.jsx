"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    //   if(!user) {
    //     redirect('/signin')
    //   }

    return (
        <div className="h-127">
            <Card className="max-w-7xl  mx-auto flex flex-col items-center border border-gray-100 mt-20 mb-20 p-20">
                <Avatar className="h-40 w-40">
                    <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>

                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default ProfilePage;