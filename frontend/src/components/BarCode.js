import React, { useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onBarcodeDetected }) => {
  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#barcode-scanner'),
        constraints: {
          width: 600,
          height: 450,
        },
      },
      decoder: {
        readers: [], // You can specify barcode types here
      },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      console.log('Barcode detected:', data.codeResult.code);
      // Call the provided callback function to handle the detected barcode
      onBarcodeDetected(data.codeResult.code);
      Quagga.stop(); // Stop the scanner immediately after detecting a barcode
    });

    return () => {
      Quagga.stop();
    };
  }, [onBarcodeDetected]);

  return (
    <div id="barcode-scanner" className="h-[200px] w-[270px]">
      {/* The video stream and detected barcode will be displayed here */}
    </div>
  );
};

export default BarcodeScanner;