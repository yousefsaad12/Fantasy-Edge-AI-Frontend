import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PlayerTable = ({ playersData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 11;

  const totalPages = Math.ceil(playersData.length / playersPerPage);
  const fixedPages = 5;

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = playersData.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getVisiblePages = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(fixedPages / 2));
    const endPage = Math.min(startPage + fixedPages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (pages.length < fixedPages) {
      const remainingPages = fixedPages - pages.length;
      for (let i = 1; i <= remainingPages; i++) {
        if (!pages.includes(i)) {
          pages.unshift(i);
        }
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 from-gray-50 to-slate-50">
      {/* H1 Header */}
        <div className="flex justify-center mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 p-3 bg-gradient-to-br bg-clip-text text-transparent from-[#37003c] to-[#da0043] text-center">
              Our Top 5 Fantasy Picks for the Upcoming GameWeek
          </h1>
      </div>



            <motion.div
        className="bg-white shadow-lg rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-xs sm:text-sm md:text-base text-gray-900">
            <thead>
              <tr className="bg-gradient-to-tr from-[#37003c] to-[#da0043] text-white rounded-t-3xl">
                <th className="p-2 sm:p-4 text-left font-semibold min-w-[100px] sm:min-w-[150px]">Player Name</th>
                <th className="p-2 sm:p-4 text-left font-semibold min-w-[80px] sm:min-w-[100px]">Position</th>
                <th className="p-2 sm:p-4 text-left font-semibold min-w-[120px] sm:min-w-[150px]">Team</th>
                <th className="p-2 sm:p-4 text-left font-semibold min-w-[80px] sm:min-w-[100px]">Points</th>
                {Array.from({ length: 16 }).map((_, idx) => (
                  <th key={idx} className="p-2 sm:p-4 text-left font-semibold min-w-[100px] sm:min-w-[120px]">Additional {idx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentPlayers.map((player, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="p-2 sm:p-4">{player.firstName}</td>
                  <td className="p-2 sm:p-4">{player.position}</td>
                  <td className="p-2 sm:p-4">{player.team}</td>
                  <td className="p-2 sm:p-4">{player.points}</td>
                  {Array.from({ length: 16 }).map((_, idx) => (
                    <td key={idx} className="p-2 sm:p-4">Data {idx + 1}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center space-x-2 sm:space-x-3">
          {getVisiblePages().map((pageNumber) => (
            <motion.button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-tr from-[#37003c] to-[#da0043] text-white hover:from-[#5a005a] hover:to-[#ff0066] transition-colors duration-200 ${
                pageNumber === currentPage ? 'bg-indigo-800' : ''
              }`}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {pageNumber}
            </motion.button>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default PlayerTable;
