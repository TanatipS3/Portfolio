import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          I often find myself relying on his expertise when it comes to web app development challenges. They are excellent at problem-solving and can quickly come up with efficient solutions. Their collaborative spirit also makes them a pleasure to work with.
          </p>
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Mango</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          I've been consistently impressed by his web app development skills. They have a strong understanding of the core technologies and frameworks, and they're always eager to learn new ones. They also possess a keen eye for detail and consistently deliver high-quality work
          </p>
          <img
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Orange</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          He is a valuable asset to our team. They are not only skilled in the technical aspects of web app development, but they also have a good understanding of user experience and design principles. This allows them to create user-friendly and effective applications.
          </p>
          <img
            src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Watermelon</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;