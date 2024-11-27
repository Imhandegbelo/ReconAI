import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogPreview = ({
  title = "",
  category = "",
  highlight = "",
  author = "",
  dateCreated = "",
  avatarImage,
  thumbnail,
}) => {
  BlogPreview.propTypes = {
    avatarImage: PropTypes.node.isRequired,
    thumbnail: PropTypes.node.isRequired,
  };

  const slug = title.split(" ").join("-").toLowerCase();

  return (
    <Link to={`/blog/${slug}`}>
      <div className="p-6 rounded shadow-lg bg-white">
        <div>
          <figure>
            <img className="w-full" src={thumbnail} alt="" />
          </figure>
          <div className="flex flex-col gap-3 mt-8">
            <h5 className="text-[#194185] font-semibold text-sm leading-6">
              {category}
            </h5>
            <div className=" flex justify-between items-start">
              <h4 className="text-xl font-semibold text-[#101828]">
                {title}
              </h4>
            </div>
            <p className="text-base font-normal text-[#667085]">{highlight}</p>
          </div>

          <div className="flex items-center gap-3 mt-[34px]">
            <figure className="w-10 h-10">
              <img
                className="rounded-full w-full"
                src={avatarImage}
                alt={author}
              />
            </figure>
            <div>
              <h5 className="text-sm font-semibold text-[#101828]">{author}</h5>
              <p className="text-[#667085] text-sm">{dateCreated}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPreview;
