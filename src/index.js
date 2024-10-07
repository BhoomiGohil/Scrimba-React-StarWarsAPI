import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on Browser -------------------------------------
const rootElement = document.querySelector("#root"); // Selecting the root element in the HTML

// Throwing an error if the root element is not found
if (!rootElement) throw new Error("Failed to find the root h1");

// Creating a root for rendering React components
const root = createRoot(rootElement);

// Rendering the MainContent component into the root element
root.render(<MainContent />);
