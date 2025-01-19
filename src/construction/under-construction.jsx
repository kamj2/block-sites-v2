import React from "react";
import "./under-construction.css";

function UnderConstruction() {
  return (
    <div className="construction-page">
      <h1>🚧 الموقع قيد الترميم 🚧</h1>
      <p>شكرًا لزيارتك! نحن نعمل على تحسين الموقع ليكون أفضل قريبًا <br /> سوف يكون الموقع متاح بالكامل خلال هذه الأيام بإذن الله ترقبوا</p>
      <a href="/" className="back-button">العودة إلى الصفحة الرئيسية</a>
    </div>
  );
}

export { UnderConstruction };
