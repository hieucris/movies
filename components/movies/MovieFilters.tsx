"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

const MovieFilters = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const genres = [
    { value: "all", label: "Tất Cả" },
    { value: "action", label: "Hành Động" },
    { value: "drama", label: "Tâm Lý" },
    { value: "comedy", label: "Hài" },
    { value: "horror", label: "Kinh Dị" },
    { value: "scifi", label: "Khoa Học Viễn Tưởng" },
    { value: "romance", label: "Lãng Mạn" },
  ];

  const years = [
    { value: "all", label: "Tất Cả" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary-600" />
        <h3 className="text-lg font-bold text-gray-900">Bộ Lọc</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Thể Loại
          </label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre.value}
                onClick={() => setSelectedGenre(genre.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedGenre === genre.value
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {genre.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Năm Phát Hành
          </label>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year.value}
                onClick={() => setSelectedYear(year.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === year.value
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {year.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieFilters;
