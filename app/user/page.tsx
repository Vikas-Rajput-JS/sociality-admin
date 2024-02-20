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
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Metadata } from "next";
import { useEffect } from "react";
import { AddUser } from "../ReduxToolKit/Reducer";


const Users = () => {
  const dispatch:any = useDispatch()
  const user = useSelector((state:any)=>state?.user)
  const UserDispatch = ()=>{

    dispatch(AddUser("vikas"))
    console.log(user)
  }
  return (
    <>
      <Breadcrumb pageName="Users" />
<button onClick={UserDispatch}>hello</button>
      <div className=" w-full">
        <TableOne/>

      </div>
    </>
  );
};

export default Users;
