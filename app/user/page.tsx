"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// import CheckboxFive from "@/components/Checkboxes/CheckboxFive";
// import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
// import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
// import CheckboxThree from "@/components/Checkboxes/CheckboxThree";
// import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
// import SwitcherFour from "@/components/Switchers/SwitcherFour";
// import SwitcherOne from "@/components/Switchers/SwitcherOne";
// import SwitcherThree from "@/components/Switchers/SwitcherThree";
// import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
// import TableFour from "@/components/Tables/TableFour";
import TableOne from "@/components/Tables/TableOne";

import { Metadata } from "next";


const Users = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />

      <div className=" w-full">
        <TableOne/>

      </div>
    </>
  );
};

export default Users;
