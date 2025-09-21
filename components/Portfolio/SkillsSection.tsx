const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function SkillsSection() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 text-center">
      <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4 font-bold">
        MY SKILLS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm sm:text-base max-w-md mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-600 p-2 sm:p-3 hover:bg-gray-800 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
