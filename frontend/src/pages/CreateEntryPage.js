import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import StudentForm from "../components/StudentOutForm";
import StudentInForm from "../components/StudentInForm";
import BarcodeScanner from "../components/BarCode";
import StudentOutForm from "../components/StudentOutForm";

const CreateEntryPage = () => {
  const [barcodeResult, setBarcodeResult] = useState("");
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  // ...

  const handleOpenScanner = () => {
    setIsScannerOpen(true);
  };

  // Function to handle barcode detection
  const handleBarcodeDetected = (code) => {
    console.log("code...",code);
    setBarcodeResult(code);
    setIsScannerOpen(false); // Close the scanner
  };
  return (
    <section  className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://www.iitg.ac.in/johnjose/GIAN/Leisure_images/iitggate.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24 mt-[390px]">
              <div className="text-4xl font-bold text-white flex flex-col">
                  <h3>Student Entry-Exit System</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <p className="mt-2 mb-8 text-base text-gray-600 dark:text-gray-300">
              <Link
                to={"/"}
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
              >
                <FaBackward />
                Back to all Students' List
              </Link>
            </p>
            <h2 className="text-3xl font-bold mb-10 leading-tight text-white dark:text-white sm:text-4xl">
              Create New Entry
            </h2>
            <section className="bg-black">
              {/* ... */}
              <button
                onClick={handleOpenScanner}
                className="bg-blue-500 letter-spacing: 0.025em hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
              >
                Scan ID-Card
              </button>
              {/* ... */}
              {isScannerOpen && <BarcodeScanner onBarcodeDetected={handleBarcodeDetected} />}
              {/* ... */}
              <StudentOutForm barcodeResult={barcodeResult} />
              <StudentInForm barcodeResult={barcodeResult} />
              {/* ... */}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateEntryPage;
