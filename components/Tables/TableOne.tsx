"use client";
import ApiClient from "@/Apis/ApiClient";
import { BRAND } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Pagination from "react-js-pagination";
import SwitcherThree from "../Switchers/SwitcherThree";
const TableOne = () => {
  const [data, setdata] = useState([]);
  const [total, setTotal] = useState(0);
  const [TotalPage, setTotalPage] = useState([]);
  const history = useRouter();
  const [filter, setfilter] = useState({
    name: "",
    count: 6,
    page: 1,
    email: "",
    sortBy: "",
  });
  // let page = [];
  const search = localStorage.getItem("search");
  useEffect(() => {
    console.log(search);
    // setfilter({...filter,search:search})
    Getdata({ search: search });
  }, [search]);
  const Getdata = (p = {}) => {
    let filters = { ...filter, ...p };
    ApiClient.get("getUser", filters).then((res: any) => {
      if (res.success) {
        setdata(res?.data);
        setTotal(res.total);

        const Total = res?.total / filter?.count;
        console.log(Total);
        let pages: any = [];
        for (let index = 0; index < Total; index++) {
          pages.push(index + 1);
        }
        console.log(pages);
        let FinalNum = pages.shift();
        // console.log(FinalNum)
        setTotalPage(pages);

        filter.name = "";
      }
    });
  };

  const handlePageChange = (e: any) => {
    console.log(e);
    setfilter({ ...filter, page: e });
    Getdata({ page: e });
  };

  useEffect(() => {
    Getdata();
  }, []);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    Getdata({ email: filter.email });
  };

  const ChangeStatus = (id: any, status: any) => {
    if (window.confirm("confirm")) {
      ApiClient.put("admin/user", {
        id: id,
        status: status == "active" ? "deactive" : "active",
      }).then((res) => {
        if (res.success) {
          toast.success(res?.message);
          Getdata({ ...filter });
        }
      });
    }
  };

  const DeleteUser = (id: any) => {
    if (window.confirm("confirm")) {
      ApiClient.delete("user", { id: id }).then((res) => {
        if (res.success) {
          toast.success(res?.message);
          Getdata({ ...filter });
        }
      });
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-full justify-end items-end ">
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />{" "}
        <form onSubmit={HandleSubmit}>
          <input
            onChange={(e: any) => {
              setfilter({ ...filter, email: e.target.value });
            }}
            value={filter.email}
            placeholder="Search..."
            className="w-340 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            type="text"
          />
        </form>
        <div className="ml-3">
          <a
            onClick={() => {
              history.push("/user/add");
            }}
            className="inline-flex items-center justify-center rounded-md bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Add User
          </a>
        </div>
      </div>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Users
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base flex">
              Name
              {filter.sortBy == "name 1" ? (
                <svg
                  onClick={() => {
                    setfilter({ ...filter, sortBy: "name -1" });
                    Getdata({ sortBy: "name -1" });
                  }}
                  className="h-8 w-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="12" y1="5" x2="12" y2="19" />{" "}
                  <line x1="16" y1="9" x2="12" y2="5" />{" "}
                  <line x1="8" y1="9" x2="12" y2="5" />
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    setfilter({ ...filter, sortBy: "name 1" });
                    Getdata({ sortBy: "name 1" });
                  }}
                  className="h-8 w-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="12" y1="5" x2="12" y2="19" />{" "}
                  <line x1="16" y1="15" x2="12" y2="19" />{" "}
                  <line x1="8" y1="15" x2="12" y2="19" />
                </svg>
              )}
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base flex">
              Email{" "}
              {filter.sortBy == "email 1" ? (
                <svg
                  onClick={() => {
                    setfilter({ ...filter, sortBy: "email -1" });
                    Getdata({ sortBy: "email -1" });
                  }}
                  className="h-8 w-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="12" y1="5" x2="12" y2="19" />{" "}
                  <line x1="16" y1="9" x2="12" y2="5" />{" "}
                  <line x1="8" y1="9" x2="12" y2="5" />
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    setfilter({ ...filter, sortBy: "email 1" });
                    Getdata({ sortBy: "email 1" });
                  }}
                  className="h-8 w-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="12" y1="5" x2="12" y2="19" />{" "}
                  <line x1="16" y1="15" x2="12" y2="19" />{" "}
                  <line x1="8" y1="15" x2="12" y2="19" />
                </svg>
              )}
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Bio</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Address
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {data.map((brand: any, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === data.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              {/* <div className="flex-shrink-0">
                <Image src={brand.image} alt="Brand" width={48} height={48} />
              </div> */}
              <p className="hidden text-black dark:text-white sm:block">
                {brand.firstName} {brand?.lastName}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.email}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">
                {brand.bio?.substr(0, 15) || "Hello World"}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.city}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p
                onClick={() => {
                  ChangeStatus(brand?.id, brand?.status);
                }}
              >
                <SwitcherThree enable={brand?.status} />
              </p>
              {/* <p onClick={()=>{
                ChangeStatus(brand?.id,brand?.status)
              }}
                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success `}
              >
               {brand?.status}
              </p> */}
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5 ">
              <div className="w-full flex items-center justify-center">
                <svg
                  onClick={() => {
                    history.push(`/userdetail/${brand?.id}`);
                  }}
                  className="h-8 w-8 text-red-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />{" "}
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <svg
                onClick={() => {
                  DeleteUser(brand?.id);
                }}
                className="h-12 w-12 text-red-500 "
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                onClick={() => {
                  history.push(`/user/edit/${brand?.id}`);
                }}
                width="24"
                height="24"
                className="cursor-pointer"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <>
        <nav aria-label="Page navigation example mt-5">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a
                onClick={() => {
                  setfilter({ ...filter, page: filter?.page - 1 });
                  Getdata({ page: filter?.page - 1 });
                }}
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>

            {TotalPage?.map((itm, i) => {
              return (
                <li key={i}>
                  <a
                    href="#"
                    onClick={() => {
                      setfilter({ ...filter, page: itm });
                      Getdata({ page: itm });
                    }}
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ${
                      filter?.page == itm ? "bg-primary" : "bg-white"
                    }   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  >
                    {itm}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                onClick={() => {
                  if (filter?.page < total - 1)
                    setfilter({ ...filter, page: filter?.page + 1 });
                  Getdata({ page: filter?.page + 1 });
                }}
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>

      {/* <select
        onChange={(e: any) => {
          Getdata({ count: e.target.value });
          setfilter({ ...filter, count: e.target.value });
        }}
      >
        <option value="1" id="">
          1
        </option>
        <option value="3" id="">
          3
        </option>
        <option value="5" id="">
          5
        </option>
        <option value="10" id="">
          10
        </option>
      </select> */}
    </div>
  );
};

export default TableOne;
