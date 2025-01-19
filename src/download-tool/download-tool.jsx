import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./download-tool.css";

function DownloadTool() {
  const platforms = [
    { name: "Windows", link: "/downloads/windows" },
    { name: "Android", link: "/downloads/android" },
    { name: "iOS", link: "/downloads/ios" },
    { name: "macOS", link: "/downloads/macos" },
    { name: "Linux", link: "/downloads/linux" },
    { name: "ChromeOS", link: "/downloads/chromeos" },
    { name: "FreeBSD", link: "/downloads/freebsd" },
    { name: "Solaris", link: "/downloads/solaris" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="download-page">
      <h1>تحميل الأداة لجميع الأنظمة</h1>
      <p className="note">
        الموقع غير مكتمل, <Link to="/under-construction" className="more-details">لتفاصيل أخرى اضغط هنا</Link>
      </p>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="ابحث عن النظام..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="download-table">
        <thead>
          <tr>
            <th>النظام</th>
            <th>رابط التحميل</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlatforms.map((platform, index) => (
            <tr key={index}>
              <td className="td2">{platform.name}</td>
              <td>
                <a>
                  إضغط للتحميل
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { DownloadTool };
