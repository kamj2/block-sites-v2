import React from "react";
import "./first-page.css";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/download-tool");
  };

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>حصن نفسك من المواقع الضارة</h1>
        <p>
          بادر بتحميل هذا البرنامج الإسلامي الذي يهدف لحمايتك من المواقع الإباحية، لتعيش في أمان وتقوى،
          وتلتزم بطاعة الله تعالى.
          <span className="to-window">
            ﴿قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ﴾ [النور: 30]
          </span>
          انشر هذا البرنامج ليكون دواء. قال رسول الله: «من دلَّ على خير، فله مثلُ أجرِ فاعلِه».
        </p>
        <div className="hero-buttons">
          <button className="btn download-btn" onClick={handleNavigate}>
            اضغط للتوجه إلى صفحة تحميل الأداة
          </button>
        </div>
      </div>
    </header>
  );
}

export { FirstPage };
