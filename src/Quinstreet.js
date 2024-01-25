// src/components/QuinstreetWidget.js
import React, { useEffect } from "react";

const QuinstreetWidget = () => {
  useEffect(() => {
    // Widget configuration
    const matchingConfiguration = {
      src: "692221",
      var2: "",
      var3: "",
      trn_id: "",
      crd: "15",
      ni_max_display: "3",
    };

    // Initialize the widget
    if (window.sh) {
      window.sh.initialize(matchingConfiguration, "qsWidgetContainer");
    }
  }, []);

  return <div id="qsWidgetContainer"></div>;
};

export default QuinstreetWidget;
