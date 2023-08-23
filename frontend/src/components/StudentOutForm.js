import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';


const StudentOutForm = ({barcodeResult}) => {
  const { register, handleSubmit,setValue} = useForm();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (barcodeResult) {
      console.log("adfksjd",barcodeResult);
      setValue("rollNo", barcodeResult);
    }
  }, [barcodeResult, setValue]);
  const createEntry = async (data) => {

    // console.log("printing Data in Employee Form : ",data);
    const rollNo = data.rollNo;

    // console.log("printing roll in Employee Form : ",rollNo);


    const studentDetails = await fetch(
      `${process.env.REACT_APP_BASE_URL}/getStudent/${rollNo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("User Details found are : ",studentDetails);
    const res = await studentDetails.json();
    console.log("this is response : ",res);
    if(res.data.length===0) {
      toast.error("Roll No is not valid !!!");
    }

    else
    {
      
      const studentDetailsFromRegister = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getStudentsFromRegister/${rollNo}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const output = await studentDetailsFromRegister.json();

      if(output.data.length===0)
      {
        const savedStudentResponse = await fetch(
          `${process.env.REACT_APP_BASE_URL}/createEntry`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(res),
          }
        );
    
        // const output = await savedUserResponse.json();
        // console.log("akshat");
        // console.log("FORM RESPONSE......", output);
        toast.success('New Entry Created Successfully');
        navigate("/")
      }

      else
      {
        toast.warn("Student is already out of Institute!!!")
      }
      
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEntry)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="rollNo"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              {" "}
              Student Roll No.{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 text-white dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                // value={rollNo}
                placeholder="Enter Roll No"
                maxLength={9}
                minLength={9}
                {...register("rollNo")}
              ></input>
            </div>
          </div>

          <div className="flex gap-8">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Out Entry
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentOutForm;
