import { useState } from "react";
import "./App.css";
import { Menu, X } from "lucide-react";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav className="bg-gray-800 fixed h-15 w-full ">
                <div className="flex text-white justify-between items-center relative">
                    <div>Logo</div>
                    <button
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        {isMenuOpen ? (
                            <X className="text-white w-8 h-8" />
                        ) : (
                            <Menu className="text-white w-8 h-8" />
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed z-10  top-0 right-0 transform transition-transform duration-300 w-50 bg-amber-200 h-full ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between">
                    hi this is menu
                    <button
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    >
                        <X className="w-8 h-8 text-white" />
                    </button>
                </div>
                <div>lower section </div>
            </div>
        </div>
    );
}

export default App;
