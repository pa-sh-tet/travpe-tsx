import React from "react";
import Settings from "../../components/Settings/Settings";

function SettingsPage({ logOut }: { logOut: () => void }) {
  return (
    <div className="settings-page">
      <Settings logOut={logOut} />
    </div>
  );
}

export default SettingsPage;
