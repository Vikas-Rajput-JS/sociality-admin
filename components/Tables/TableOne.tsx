"use client";
import ApiClient from "@/Apis/ApiClient";
import { BRAND } from "@/types/brand";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  const [data, setdata] = useState([]);
  const[total,setTotal]=useState(0)
  const [filter, setfilter] = useState({
    name: "",
    count: 1,
    page: 1,
    email: "",
    sortBy: "",
  });
  const search = localStorage.getItem("search");
  useEffect(() => {
    console.log(search);
    // setfilter({...filter,search:search})
    Getdata({ search: search });
  }, [search]);
  const Getdata = (p = {}) => {
    let filters = { ...filter, ...p };
    ApiClient.get("getUser", filters).then((res) => {
      if (res.success) {
        setdata(res?.data);
        setTotal(res.total)
        filter.name = "";
      }
    });
  };

  const handlePageChange = (e:any)=> {
   console.log(e)
    setfilter({...filter,page:e})
    Getdata({page:e})
  }

  useEffect(() => {
    Getdata();
  }, []);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    Getdata({ email: filter.email });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex w-full justify-end items-end flex-col">
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
      </div>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Users
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
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
        </div>

        {data.map((brand: any, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
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
                {brand.name}
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
                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success `}
              >
                Active
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Pagination className='w-full'
          activePage={filter.page}
          itemsCountPerPage={filter.count}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
      <select onChange={(e:any)=>{
        Getdata({count:e.target.value})
setfilter({...filter,count:e.target.value})
      }}>

        <option value="1" id="">1</option>
        <option value="3" id="">3</option>
        <option value="5" id="">5</option>
        <option value="10" id="">10</option>
      </select>
    </div>
  );
};

export default TableOne;
