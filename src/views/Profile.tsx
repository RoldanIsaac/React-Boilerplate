import React from "react";
import { useAuth } from "../context/AuthContext";

type Props = {};

const Profile = (props: Props) => {
  const { user } = useAuth();

  if (!user) return <p>No estás autenticado</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Perfil</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>UID:</strong> {user.uid}
      </p>
    </div>
  );
};

export default Profile;
