import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const StudentInForm = ({barcodeResult}) => {
  const { register, handleSubmit,setValue} = useForm();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (barcodeResult) {
      setValue("rollNo", barcodeResult);
    }
  }, [barcodeResult, setValue]);

  const editStudent = async (data)=>{
    console.log("printing Data in EditEmployee Form : ",data);
    const rollNo = data.rollNo;

    console.log("printing roll in Edit Employee Form : ",rollNo);


    const studentDetails = await fetch(
      `${process.env.REACT_APP_BASE_URL}/updateEntry/${rollNo}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await studentDetails.json();

    if(res.success===false) {
        toast.error("Student does not have any OUT entry");
      }
    else
    {
        toast.success("In Entry Created Successfully");
        navigate("/");
    }


  }

  return (
    <div>
      <form onSubmit={handleSubmit(editStudent)} className="mt-8">
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
              Create In Entry
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

export default StudentInForm;
