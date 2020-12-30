import React, { Fragment, useContext, useState } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { EditProfile } from "./EditProfile";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileOrders } from "./ProfileOrders";

export const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Fragment>
      <main>
        <div className='container-profile'>
          <div className='profile'>
            <h1>O meni</h1>
            {!editMode ? (
              <ProfileInfo setEditMode={setEditMode} editMode={editMode} />
            ) : (
              <EditProfile setEditMode={setEditMode} editMode={editMode} />
            )}
            <ProfileOrders />
          </div>
        </div>
      </main>
    </Fragment>
  );
};