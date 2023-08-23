import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'; 

const HomePage = () => {
  const [studentData, setStudentData] = useState();
  const [dateValue, setDateValue] = useState('');

  const getAllData = async () => {
    setStudentData([]);
    try {
      const getStudent = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getAllStudents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getStudent.json();
      setStudentData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = async () => {
    setStudentData([]);
    try {
      const getStudent = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getOutStudents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data Fetched Successfully");
      const res = await getStudent.json();
      setStudentData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const dateHandler = async () => {

    if(!dateValue)
    {
      toast.warn("Please select the date");
    }
    else
    {
    setStudentData([]);
    try {
      const getStudent = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getOutStudentsbyDate/${dateValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data Fetched Successfully");
      const res = await getStudent.json();
      setDateValue('');
      setStudentData(res);
    } catch (error) {
      console.log(error);
      setDateValue('');
    }
  }
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log("Printing Employee Data", studentData);

  const dateChangeHandler = (event) => {
    setDateValue(event.target.value);
  }

  // console.log(empData);

  return (
    <>
      <section className="container px-4 mx-auto py-4 bg-gray-800">
        <div className="LogoHeading flex items-center gap-5 border-2 p-2 mb-4 rounded-[10px] bg-gradient-to-r from-white to-blue-200">
          <img src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png" alt="IITGLOGO" height={80} width={80} ></img>
          <h1 className="text-[1.6rem] font-bold text-gray-700">Indian Institute of Technology Guwahati</h1>
        </div>
        <div className="flex flex-wrap items-end gap-2 justify-center font-medium text-gray-800 dark:text-white p-4">
          <span className="text-blue-500 text-4xl">eRegister</span>
          <span className="text-xl text-cyan-200">Student Entry-Exit System</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button onClick={clickHandler} className="rounded-md bg-indigo-600 px-[0.2rem] py-1.5 text-sm md:px-3.5 font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Exit Entries
            </button>

            <button onClick={getAllData} className="rounded-md bg-indigo-600 px-[0.2rem] py-1.5 md:px-3.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Show all Entries
            </button>
            <div className="flex flex-col gap-1">
            <div><input type="date" id="dateValue" name="dateValue" value={dateValue} onChange={dateChangeHandler} className="rounded-md border-1"/></div>
            <div><button onClick={dateHandler} className="w-full rounded-md bg-indigo-600 px-[0.2rem] py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Search By Date
            </button>
            </div>
            </div>
          </div>



          <Link to={"/addStudent"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-[0.8rem] py-3 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Create New Entry <span className="text-xl">→</span>
              </button>
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 ">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr className="bg-black">
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        <span>Student Name & Email</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Roll No.
                      </th>

                      <th
                        scope="col"
                        className="px-1 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Department
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Hostel
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Contact No.
                      </th>

                      <th
                        scope="col"
                        className="px-[50px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Exit Date & Time
                      </th>

                      <th
                        scope="col"
                        className="px-[50px] py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Entry Date & Time
                      </th>

                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-300 dark:divide-gray-700 dark:bg-gray-900">
                    {studentData?.data?.map((person) => (
                      <tr key={person.name} className="bg-sky-100">
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.rollNo}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.department}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.hostel}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.contact}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="ml-8">
                              <div className="text-sm font-medium text-gray-500 dark:text-white">
                                {person.outDate}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {person.outTime}
                              </div>
                            </div>
                        </td>

                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        <div className="ml-10">
                              <div className="text-sm font-medium text-gray-500 dark:text-white">
                                {person.inDate}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {person.inTime}
                              </div>
                            </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
