import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";

interface IProps {
  setEditMode: any;
  editMode: boolean;
}

const ProfileInfo: React.FC<IProps> = ({ setEditMode, editMode }) => {
  const rootStore = useContext(RootStoreContext);
  const { user } = rootStore.userStore;
  return (
    <Fragment>
      <div className='infos'>
        <div className='upper'>
          <h2>Osnovne informacije</h2>
          <button
            onClick={() => setEditMode(!editMode)}
            style={{
              border: "none",
              cursor: "pointer",
              color: "#da291c",
              outline: "none",
            }}
          >
            <i className='far fa-edit'></i>
          </button>
        </div>
        <div className='down'>
          <div className='desc'>
            <p className='first'>Ime i prezime</p>
            <p>
              {user?.name} {user?.lastname}
            </p>
          </div>
          <div className='desc'>
            <p className='first'>Username</p>
            <p>{user?.username}</p>
          </div>
          <div className='desc'>
            <p className='first'>Kontakt broj</p>
            <p>{user?.phoneNumber}</p>
          </div>
          <div className='desc'>
            <p className='first'>Adresa prebivališta</p>
            <p>{user?.adress}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default observer(ProfileInfo);
