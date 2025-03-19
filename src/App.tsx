import {useState} from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {Result} from "@zxing/library";

function App() {
    const [data, setData] = useState<string>("");
    const [showScanner, setShowScanner] = useState(false);

    const handleScan = (error: unknown, result?: Result) => {
        if (result) {
            setData(result.getText());
            setShowScanner(false);
        } else {
            console.log("Scan failed: ", error)
        }
    };

    return (
        <div style={{padding: '20px'}}>
            <h1>QR/Barcode Scanner</h1>

            <div style={{marginBottom: '20px'}}>
                <button
                    onClick={() => setShowScanner(!showScanner)}
                    style={{
                        padding: '10px 20px',
                        marginRight: '10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {showScanner ? 'Stop Scanner' : 'Start Scanner'}
                </button>
            </div>

            {showScanner && (
                <div style={{maxWidth: '500px', margin: '20px 0'}}>
                    <BarcodeScannerComponent
                        width={500}
                        height={500}
                        onUpdate={handleScan}
                    />
                </div>
            )}

            <div style={{
                padding: '15px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                marginTop: '20px'
            }}>
                <h3>Scanned Result:</h3>
                <p>{data}</p>
            </div>
        </div>
    );
}

export default App;
