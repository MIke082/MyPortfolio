import React from 'react';

const Skills = () => {
  return (
    <section id="skillsSection" style={{ backgroundColor: "#0a0a0a", color: "#f6b41e", padding: "4em", fontFamily: "Arial, sans-serif" }}>
      <div style={{ border: '2px solid #f6b41e', padding: '20px', borderRadius: '8px', fontSize: '1em', color: '#333', background: '#fff' }}>
        <h2 style={{ color: '#f6b41e' }}>Professional Skills</h2>
        <ul style={{ listStyleType: 'none' }}>
          <li>✔️ <strong>5+ years</strong> of professional expertise in the Information Technologies (IT) industry.</li>
          <li>✔️ Experienced with <strong>Javascript</strong>, <strong>Typescript</strong> programming languages.</li>
          <li>✔️ Proficient in <strong>web application development</strong>.</li>
          <li>✔️ Skilled in <strong>mobile applications development</strong>.</li>
          <li>✔️ Programming languages and Frameworks:</li>
          <ul>
            <li>• Javascript, TypeScript</li>
            <li>• React Native</li>
            <li>• ReactJS - Redux</li>
            <li>• Proficiency in <strong>REST API</strong></li>
            <li>• Extensive use of <strong>Firebase</strong>, including Cloud functions and Database</li>
            <li>• Solid understanding of <strong>HTML5, CSS3, Sass, CSS</strong></li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
