import React from "react";
import Welcome from "../../../components/HeaderHome/HeaderHome";
import Table from "../../../components/Table/Table";
import * as assets from "../../../assets/assetes";

function Td() {
  return (
    <div className="text-center">
      <Welcome
        title="Note pages"
        text="Welcome this is note pages "
        image={assets.headerIcons.noteIconHeader}
      />
      <Table />
    </div>
  );
}

export default Td;
