import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="bg-[#101828] text-blue-400 font-mono text-sm max-w-4xl mx-auto">
      {/* HTML-style comments and tags */}
      <div className="text-gray-500 ">{"<!-- start .scope-profile -->"}</div>

      <div>
        &lt;section class="
        <span className="text-orange-400">scope-profile</span>"&gt;
      </div>
      <div className="ml-4">
        <div className="text-blue-400 ">{"<h3>"}</div>
        <div className="ml-4 text-white font-bold ">PROFILE</div>
        <div className="text-blue-400 ">{"</h3>"}</div>

        <div className="text-blue-400">{"<p>"}</div>
        <div className="ml-4 text-gray-300 leading-relaxed ">
          Hi, I'm Kaung Myat Soe — a web engineer and creative coder
          <br />
          based in Bangkok, Thailand. With over 3 years of experience in
          <br />
          the industry, I've collaborated with a diverse
          <br />
          range of clients to create modern,
          <br />
          high-performance websites that strike the right
          <br />
          balance between aesthetics and usability.
        </div>
        <div className="text-blue-400 ">{"</p>"}</div>

        <div className="text-blue-400 ">{"<p>"}</div>
        <div className="ml-4 text-gray-300 leading-relaxed ">
          Throughout my career, I've worked across a broad
          <br />
          spectrum of technologies, frameworks, and
          <br />
          platforms. This has helped me build a solid
          <br />
          foundation in best practices and proven
          <br />
          methodologies, enabling me to consistently deliver
          <br />
          results that exceed expectations.
        </div>
        <div className="text-blue-400 ">{"</p>"}</div>

        <div className="text-blue-400 ">{"<p>"}</div>
        <div className="ml-4 text-gray-300 leading-relaxed ">
          I'm currently open to new opportunities and
          <br />
          looking to partner with agencies, designers,
          <br />
          startups, and established businesses to create
          <br />
          beautiful, functional digital experiences on an
          <br />
          ongoing basis.
        </div>
        <div className="text-blue-400 ">{"</p>"}</div>
      </div>

      <div className="text-blue-400">{"</section>"}</div>
    </div>
  );
};

export default AboutSection;
