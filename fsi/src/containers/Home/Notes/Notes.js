import React from "react";
import Welcome from "../../../components/HeaderHome/HeaderHome";
import Table from "../../../components/Table/Table";
import STable from "../../../components/Table/Stable";
import * as assets from "../../../assets/assetes";

function Td() {
  const dataFundamentals = [
    { NAME: "System embarquee", TD: 15, EXAM: 15, MOY: 15 },
    { NAME: "Electronique appliquee", TD: 10, EXAM: 10, MOY: 10 },
    { NAME: "API", TD: 15, EXAM: 13, MOY: 13.5 },
    { NAME: "System Non Linear", TD: 13, EXAM: 13, MOY: 13 },
  ];
  const dataTP = [
    { NAME: "System embarquee", MOY: 12 },
    { NAME: "Electronique appliquee", MOY: 10 },
    { NAME: "Resau informatique", MOY: 13.5 },
    { NAME: "System Non Linear", MOY: 13 },
  ];
  const dataDC = [
    { NAME: "Les capteurs", MOY: 12 },
    { NAME: "Ethique", MOY: 10 },
    { NAME: "Actionneur", MOY: 13.5 },
  ];
  return (
    <div className="">
      <Welcome
        title="Note pages"
        text="Welcome this is note pages "
        image={assets.headerIcons.noteIconHeader}
      />
      <div>
        <h3 className="text-left pl-2 pb-2 font-semibold text-lg text-black text-primary">
          Fundamentals
        </h3>
        <Table data={dataFundamentals} />
      </div>
      <div>
        <h3 className="text-left pl-2 pb-2 font-semibold text-lg text-black text-primary">
          Travaux pratique
        </h3>
        <STable data={dataTP} />
      </div>
      <div>
        <h3 className="text-left pl-2 pb-2 font-semibold text-lg text-black text-primary">
          Module decouvert
        </h3>
        <STable data={dataDC} />
      </div>
    </div>
  );
}

export default Td;
