import React, { useState, useEffect } from "react";
import CircularSkill from "../CircularSkill";
export const About = (props) => {
  const [random, setRandom] = useState(1);
  const [skillValues, setSkillValues] = useState([]);
 
useEffect(() => {
    // Lade die JSON-Datei
    const basePath = process.env.REACT_APP_BASE_URL || "";
    fetch(`${basePath}/skills.json`)
      .then((response) => response.json())
      .then((data) => setSkillValues(data))
      .catch((error) => console.error("Fehler beim Laden der Daten:", error));
  }, []);

  return (
    <div id="about">
      <div className="content">
        <h2>Skills</h2>
        <div className="circles_wrapper">
        {skillValues.map((skill) => (
         <CircularSkill key={skill.id}
         size={100}
         strokeWidth={2}
         percentage= {props.isVisible ? skill.percentage : 0}      
         title={skill.title}
         highlightColor={skill.color}
       />
      ))}
          
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          fugiat error perspiciatis sunt labore adipisci consequuntur. Ratione
          praesentium repellendus, obcaecati, quibusdam illum officiis natus
          ipsum, odit debitis sit expedita quod modi similique harum ullam!
          Magnam quisquam in assumenda. Consequatur modi qui labore fugiat
          officiis, sequi unde debitis in quae exercitationem magni eligendi
          ipsum numquam ut voluptas repudiandae aliquid praesentium. Nulla
          reiciendis ullam praesentium quam minima corporis perspiciatis
          voluptas quos saepe enim vero dicta ex alias ratione dolor in nesciunt
          eveniet eum fuga, omnis neque qui. Cum quaerat sed hic tenetur
          repudiandae ex doloribus dolorem dignissimos. Commodi exercitationem
          perspiciatis aliquam magni fugit at pariatur qui rem enim ea, iusto
          aperiam dignissimos rerum nesciunt quam corporis quos delectus nisi
          facilis molestias hic corrupti dolorum? Culpa minima expedita, illo
          ducimus numquam unde reiciendis non libero impedit vitae at vero
          nesciunt quidem architecto cumque, itaque, eveniet dolorum quam
          molestiae natus. Maiores deserunt cum ab, tempore voluptatum illum
          doloremque dolorem nesciunt dicta ipsam numquam similique dolor magni
          quia, aliquid unde facere, optio expedita amet placeat vitae nam! Eos
          veritatis a voluptatibus necessitatibus minus vitae facilis ad tempore
          fuga autem quasi, consequatur repellendus rerum sed cupiditate quae
          error, quam at totam provident accusamus! Non optio consectetur
          voluptate? Alias architecto hic officia voluptate voluptatem optio
          illum eos temporibus, consectetur eum quibusdam aliquid harum a natus
          nostrum dolores sit tempora dolore perspiciatis praesentium fugit
          suscipit. Sint saepe harum, aspernatur incidunt aperiam dolorem
          impedit maxime perferendis exercitationem sed rem iste provident
          vitae, soluta odio tempore delectus libero atque corporis sapiente.
          Velit quas nemo aspernatur fuga dignissimos, cupiditate odio pariatur!
          Laborum placeat cupiditate animi reiciendis eligendi enim nam, ipsam
          voluptate veritatis, dolorum amet ex architecto sit quaerat ratione
          provident consequuntur harum ad tempora nihil sed sint. Nemo
          temporibus saepe non. Dolore, adipisci iusto. Sed ducimus inventore
          nostrum. Libero delectus quod placeat hic rem omnis iste a magni
          perspiciatis ducimus quas facere eveniet unde, tempora ullam accusamus
          quis ipsa, deleniti nobis nostrum! Sint, ad magni ducimus dicta sed
          rerum accusamus et animi. Deserunt maxime, dolorum aliquam vel nam
          maiores. Illo eaque in quasi explicabo, officiis ducimus, aspernatur
          qui distinctio sapiente molestias quas debitis provident dignissimos
          magni fugiat sed corrupti aliquid est sint natus officia culpa! Earum
          fugit velit quidem laborum veniam quae nesciunt at, neque eligendi,
          enim aut vel, nobis molestias! Cupiditate maiores consequuntur
          doloremque voluptate mollitia laudantium saepe exercitationem dolores
          aliquam. Sapiente ad, natus ab molestias eaque placeat beatae magni.
        </p>
      </div>
    </div>
  );
};
