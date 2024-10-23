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
      <h1 className="text-5xl font-bold mb-12 text-indigo-700">Our Top 5 Fantasy Picks for the Upcoming Gameweek</h1>

      <motion.div
        className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-7xl mx-auto" // Increased table width with `max-w-7xl`
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm text-gray-900">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-3xl">
                <th className="p-4 text-left font-semibold min-w-[150px]">Player Name</th>
                <th className="p-4 text-left font-semibold min-w-[100px]">Position</th>
                <th className="p-4 text-left font-semibold min-w-[150px]">Team</th>
                <th className="p-4 text-left font-semibold min-w-[100px]">Points</th>
                {Array.from({ length: 16 }).map((_, idx) => (
                  <th key={idx} className="p-4 text-left font-semibold min-w-[120px]">Additional {idx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentPlayers.map((player, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="p-4">{player.firstName}</td>
                  <td className="p-4">{player.position}</td>
                  <td className="p-4">{player.team}</td>
                  <td className="p-4">{player.points}</td>
                  {Array.from({ length: 16 }).map((_, idx) => (
                    <td key={idx} className="p-4">Data {idx + 1}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="mt-8 flex justify-center space-x-3">
          {getVisiblePages().map((pageNumber) => (
            <motion.button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`h-12 w-12 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 ${
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
