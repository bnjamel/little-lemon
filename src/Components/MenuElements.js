import React from "react";
import { Link } from "react-router-dom";

function MenuElements() {
  return (
    <>
      <div className="courses-list container m-auto">
        <div className="coursesContainer mt-14">
          <ul className="hidden sm:flex px-4 md:px-0">
            <li className="px-4 py-1 mr-2 rounded-lg border border-black transition ease-in-out cursor-pointer hover:bg-[#495E57] hover:text-white">
              <a href="#starters">Starters</a>
            </li>
            <li className="px-4 py-1 mr-2 rounded-lg border border-black transition ease-in-out cursor-pointer hover:bg-[#495E57] hover:text-white">
              <a href="#soups">Soups and Salads</a>
            </li>
            <li className="px-4 py-1 mr-2 rounded-lg border border-black transition ease-in-out cursor-pointer hover:bg-[#495E57] hover:text-white">
              <a href="#pasta">Pasta</a>
            </li>
            <li className="px-4 py-1 mr-2 rounded-lg border border-black transition ease-in-out cursor-pointer hover:bg-[#495E57] hover:text-white">
              <a href="#mainCourses">Main Courses</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuElements;
