import SkillsToolsImage from "./SkillsToolsImage";

function SkillsList({ skills }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-6
        lg:gap-8
      "
    >
      {skills.map((skill) => (
        <SkillsToolsImage
          key={skill.id}
          {...skill}
        />
      ))}
    </div>
  );
}

export default SkillsList;